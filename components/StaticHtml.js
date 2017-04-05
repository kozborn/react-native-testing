import React from "react";
import { View, Text, StatusBar, WebView } from "react-native";
import { StackNavigator } from "react-navigation";

export default class StaticHtml extends React.Component {

  static navigationOptions = {
    title: 'Static Html content',
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
        source={require("../static/static.html")}
        style={{marginTop: 20}}
      />
    );
  }
}