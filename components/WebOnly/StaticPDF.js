import React from "react";
import ReactPDF from "react-pdf";
import PDF from "./github-git-cheat-sheet.pdf"

export default class StaticPDF extends React.Component {

  render() {
    return(
      <ReactPDF
        file={PDF}
        pageIndex={2}
        onDocumentLoad={this.onDocumentLoad}
        onPageLoad={this.onPageLoad}
      />
    );
  }

}