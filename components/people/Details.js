import React from "react";
import { ScrollView, Text } from "react-native";

export default class PeopleDetails extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.personName} Detailed Information`,
  };

  constructor(props) {
    super(props);
    this.state = {
      person: {},
    }

    this.renderKeys = this.renderKeys.bind(this);
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const url = params.personUrl;
    fetch(params.personUrl)
    .then(response => response.json())
    .then(result => this.setState({person: result}))
    .catch(e => console.log(e));
  }

  renderKeys() {
    let components = [];
    for (const key of Object.keys(this.state.person)) {
      components.push(<Text key={key}>{key} - {this.state.person[key]}</Text>)
    }
    return components;
  }

  render() {

    console.log(this.props.navigation);

    return (<ScrollView>
      {this.renderKeys()}
    </ScrollView>);
  }
}
