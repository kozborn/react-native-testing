import React from "react";
import { View, Text, StatusBar, WebView } from "react-native";

export default class StaticPDF extends React.Component {

  static navigationOptions = {
    title: 'PDF',
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
        source={{uri: "https://docs.google.com/gview?embedded=true&url=https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf"}}
        style={{marginTop: 20}}
      />
    );
  }
}