import React from "react";
import { Text, WebView } from "react-native";

export default class SwapiHtml extends React.Component {

  render() {
    console.log("SwapiHTML")
    // There can be only webview here, nothing else?
    return (<Text>Here should be WebView</Text>);
  }
}