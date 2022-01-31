import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class SignUp extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.google.com/' }}
        javaScriptEnabled={true}
        style={{ marginTop: 20 }}
      />
    );
  }
}