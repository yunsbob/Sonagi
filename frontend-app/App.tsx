import React from 'react';
import WebView from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';

const App = () => {
  return (
    <WebView
      source={{uri: 'https://sonagi.site'}}
      userAgent={DeviceInfo.getUserAgent() + '-kwdApp-'}
    />
  );
};

export default App;
