import React from "react";

export default class WebView extends React.Component {

  render() {
    return (
      <iframe src={ this.props.src } />
    );
  }
}