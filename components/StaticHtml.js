import React from "react";
import { View, Text, StatusBar, WebView } from "react-native";

export default class StaticHtml extends React.Component {

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