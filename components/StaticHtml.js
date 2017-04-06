import React from "react";
import { StatusBar, WebView } from "react-native";

export default class StaticHtml extends React.Component {

  static navigationOptions = {
    title: 'SoF',
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