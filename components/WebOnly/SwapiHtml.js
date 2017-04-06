import React from "react";
import WebView from "./WebView";

export default class SwapiHtml extends React.Component {

  render() {
    // There can be only webview here, nothing else?
    return (<WebView
      src="http://onet.pl"
      style={this.props.style}
    />);
  }
}