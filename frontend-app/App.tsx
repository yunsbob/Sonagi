import React, {useCallback, useRef, useState} from 'react';
import WebView from 'react-native-webview';
// import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
// import {requestMultiple, checkMultiple} from 'react-native-permissions';
// import {PERMISSIONS} from 'react-native-permissions';
import pushNoti from './android/app/src/utils/pushNoti';
import Clipboard from '@react-native-clipboard/clipboard';
import {PermissionsAndroid} from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  // 뒤로가기 로직
  const webViewRef = useRef<any>(null);
  const [isCanGoBack, setIsCanGoBack] = useState(false);
  const onPressHardwareBackButton = useCallback(() => {
    if (webViewRef.current && isCanGoBack) {
      webViewRef.current.goBack();
      return true;
    } else {
      return false;
    }
  }, [isCanGoBack]);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
      pushNoti.displayNoti(remoteMessage);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      onPressHardwareBackButton,
    );
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        onPressHardwareBackButton,
      );
    };
  }, [onPressHardwareBackButton]);

  useEffect(() => {
    requestUserPermission();
    requestPermission();
  });

  // PermissionsAndroid 사용 로직
  const requestPermission = async () => {
    try {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      ];

      const granted = await PermissionsAndroid.requestMultiple(permissions);

      if (
        granted['android.permission.POST_NOTIFICATIONS'] === 'granted' &&
        granted['android.permission.READ_MEDIA_IMAGES'] === 'granted'
      ) {
        console.log('모든 권한 획득', granted);
        Toast.show({
          type: 'success',
          text1: '권한이 정상적으로 설정되어 있습니다',
        });
      } else if (
        granted['android.permission.POST_NOTIFICATIONS'] ===
          'never_ask_again' ||
        granted['android.permission.READ_MEDIA_IMAGES'] === 'never_ask_again'
      ) {
        console.log('거절된 권한있음', granted);
        Alert.alert(
          '권한이 설정에 문제가 발생하였습니다.',
          '앱 설정에서 권한을 허용해주시거나,\n' +
            '앱을 재설치해주시기 바랍니다.',
          [{text: '확인', onPress: () => {}, style: 'default'}],
        );
      } else {
        console.log('거절된 권한있음', granted);
        Alert.alert(
          '권한이 설정되지 못했습니다.',
          '권한 설정을 다시 시도해주시기 바랍니다',
          [
            {text: '권한 설정 거부', onPress: () => {}, style: 'cancel'},
            {
              text: '권한 재설정',
              onPress: () => {
                PermissionsAndroid.requestMultiple(permissions);
              },
              style: 'default',
            },
          ],
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // 토큰 값 가져오기 관련 로직
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      return getToken();
    }
  };

  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log(fcmToken);
    try {
      webViewRef.current.postMessage(fcmToken);
    } catch (e) {
      console.log(e, 'Error');
    }
  };

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://sonagi.site',
        }}
        onLoad={() => {
          getToken();
        }}
        userAgent={
          'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/102.0.5005.87 Mobile/15E148 Safari/604.1'
        }
        sharedCookiesEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={`
      (function() {
        function wrap(fn) {
          return function wrapper() {
            var res = fn.apply(this, arguments);
            window.ReactNativeWebView.postMessage
            (
              JSON.stringify({
                type: 'navigationStateChange',
                code: 'navigationStateChange',
                })
                );
                return res;
              }
            }
            
            history.pushState = wrap(history.pushState);
          history.replaceState = wrap(history.replaceState);
          window.addEventListener('popstate', function() {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                type: 'navigationStateChange'
              })
              );
            });
          })();
          
          true;
          `}
        onMessage={({nativeEvent: state}) => {
          try {
            const receivedMessage = JSON.parse(state.data);
            if (receivedMessage.type === 'navigationStateChange') {
              setIsCanGoBack(state.canGoBack);
            } else if (receivedMessage.type === 'BabyCode') {
              webViewRef.current.requestFocus();
              Clipboard.setString(receivedMessage.code);
              console.log('clipboard success', receivedMessage.code);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />
      <Toast />
    </>
  );
};

export default App;
