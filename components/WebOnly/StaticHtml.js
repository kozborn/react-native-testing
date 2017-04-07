import React from "react";
import htmlContent from "../../static/static.html";

export default class StaticHtml extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: htmlContent}} />
    );
  }
}
