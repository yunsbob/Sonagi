import React, {useCallback, useRef, useState} from 'react';
import WebView from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';

import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {requestMultiple, checkMultiple} from 'react-native-permissions';
import {PERMISSIONS} from 'react-native-permissions';
import pushNoti from './android/app/src/utils/pushNoti';

const App = () => {
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
  const requestMultiplePermissions = () => {
    requestMultiple([
      // PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
      // PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
      PERMISSIONS.ANDROID.READ_PHONE_STATE,
      // PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]).then(response => {
      console.log('MULTIPLE REQUEST RESPONSE : ', response);
    });
  };

  const checkMultiplePermissions = () => {
    checkMultiple([
      // PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
      // PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
      PERMISSIONS.ANDROID.READ_PHONE_STATE,
      // PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]).then(response => {
      console.log('MULTIPLE CHECK RESPONSE : ', response);
      // console.log(response['android.permission.POST_NOTIFICATIONS']);
      if (
        // response['android.permission.POST_NOTIFICATIONS'] === 'denied' ||
        // response['android.permission.READ_MEDIA_IMAGES'] === 'denied'
        response['android.permission.READ_PHONE_STATE'] === 'denied'
        // response['android.permission.WRITE_EXTERNAL_STORAGE'] === 'denied'
      ) {
        requestMultiplePermissions();
      }
    });
  };

  const webViewRef = useRef<any>(null);

  useEffect(() => {
    requestUserPermission();
    checkMultiplePermissions();
  });

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

    try {
      webViewRef.current.postMessage(fcmToken);
      console.log('디바이스 토큰값');
      console.log(fcmToken);
    } catch (e) {
      console.log(e, 'Error');
    }

    // dispatch(set_deviceToken(fcmToken));
  };

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log(remoteMessage);
  //   });

  //   return unsubscribe;
  // }, []);

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     return getToken();
  //   }
  // };

  // useEffect(() => {
  //   requestUserPermission();
  // });

  // messaging().setBackgroundMessageHandler(async (msg: any) => {
  //   console.log(msg);
  // });
  // const getToken = async () => {
  //   const fcmToken = await messaging().getToken();
  // };

  return (
    <WebView
      ref={webViewRef}
      source={{
        uri: 'http://localhost:3000',
      }}
      onLoad={() => {
        getToken();
      }}
      userAgent={DeviceInfo.getUserAgent() + '-kwdApp-'}
      sharedCookiesEnabled={true}
      domStorageEnabled={true}
      allowFileAccess={true}
      javaScriptEnabledAndroid={true}
      injectedJavaScript={`
        (function() {
          function wrap(fn) {
            return function wrapper() {
              var res = fn.apply(this, arguments);
              window.ReactNativeWebView.postMessage('navigationStateChange');
              return res;
            }
          }
    
          history.pushState = wrap(history.pushState);
          history.replaceState = wrap(history.replaceState);
          window.addEventListener('popstate', function() {
            window.ReactNativeWebView.postMessage('navigationStateChange');
          });
        })();
    
        true;
      `}
      onMessage={({nativeEvent: state}) => {
        if (state.data === 'navigationStateChange') {
          // Navigation state updated, can check state.canGoBack, etc.
          setIsCanGoBack(state.canGoBack);
        }
      }}
    />
  );
};

export default App;
