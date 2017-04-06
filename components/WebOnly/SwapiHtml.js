import React from "react";
import { View } from "react-native";

export default class SwapiHtml extends React.Component {

  render() {
    return (
      <View style={{height: "100%", width: "100%", overflowX: "hidden"}}>
        <iframe src="http://onet.pl" width="100%" height="100%"/>
      </View>);
  }
}
