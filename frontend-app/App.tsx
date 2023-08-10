import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';

import {useEffect} from 'react';
import {requestMultiple, checkMultiple} from 'react-native-permissions';
import {PERMISSIONS} from 'react-native-permissions';
import pushNoti from './android/app/src/utils/pushNoti';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
      pushNoti.displayNoti(remoteMessage);
    });

    return unsubscribe;
  }, []);
  const requestMultiplePermissions = () => {
    requestMultiple([PERMISSIONS.ANDROID.POST_NOTIFICATIONS]).then(response => {
      console.log('MULTIPLE REQUEST RESPONSE : ', response);
    });
  };

  const checkMultiplePermissions = () => {
    checkMultiple([PERMISSIONS.ANDROID.POST_NOTIFICATIONS]).then(response => {
      console.log('MULTIPLE CHECK RESPONSE : ', response);
      if (response['android.permission.POST_NOTIFICATIONS'] === 'denied') {
        requestMultiplePermissions();
      }
    });
  };

  const webViewRef = useRef<any>(null);

  useEffect(() => {
    requestUserPermission();
    checkMultiplePermissions();
  });

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
    console.log('디바이스 토큰값');
    console.log(fcmToken);
    // dispatch(set_deviceToken(fcmToken));
    webViewRef.current.postMessage(fcmToken);
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
      source={{uri: 'https://sonagi.site'}}
      userAgent={DeviceInfo.getUserAgent() + '-kwdApp-'}
      onLoad={() => {
        getToken();
      }}
    />
  );
};

export default App;
