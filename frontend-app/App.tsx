import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';

const App = () => {
  const webViewRef = useRef<WebView | null>(null);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
      console.log(remoteMessage);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    requestUserPermission();
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

  messaging().setBackgroundMessageHandler(async (msg: any) => {
    console.log(msg);
  });
  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('디바이스 토큰값');
    console.log(fcmToken);
    // dispatch(set_deviceToken(fcmToken));

    if (webViewRef.current) {
      const tokenMessage = {type: 'fcmToken', token: fcmToken};
      const jsonString = JSON.stringify(tokenMessage);
      const script = `window.postMessage(${jsonString}, '*');`;
      webViewRef.current.injectJavaScript(script);
    }
  };

  return (
    <WebView
      ref={webViewRef}
      source={{uri: 'https://sonagi.site'}}
      userAgent={DeviceInfo.getUserAgent() + '-kwdApp-'}
    />
  );
};

export default App;
