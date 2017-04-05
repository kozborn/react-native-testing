import React from "react";
import { View, Text, StatusBar, WebView } from "react-native";
import { StackNavigator } from "react-navigation";

export default class OnetHtml extends React.Component {

  static navigationOptions = {
    title: 'Onet.pl',
    header: {
      visible: false
    }
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    // There can be only webview here, nothing else?
    return (<WebView
        source={{uri: 'http://www.onet.pl/'}}
        style={{marginTop: 20}}
      />
    );
  }
}