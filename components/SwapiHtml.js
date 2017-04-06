import React from "react";
import { StatusBar, WebView } from "react-native";

export default class SwapiHtml extends React.Component {

  static navigationOptions = {
    title: 'SwapiHtml',
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
        source={{uri: 'http://swapi.co/'}}
        style={{marginTop: 20}}
      />
    );
  }
}