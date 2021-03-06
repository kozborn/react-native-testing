import React from "react";
import { ScrollView, TouchableNativeFeedback, View, Text, StyleSheet } from "react-native";

export default class PeopleList extends React.Component {

  static navigationOptions = {
    title: 'People List',
  };

  constructor(props) {
    super(props);

    this.state = {
      starships: [],
    };
    this.renderStarship = this.renderStarship.bind(this);
  }

  componentDidMount() {
    const url = "http://swapi.co/api/starships/";
    fetch(url)
    .then(response => response.json())
    .then(res => this.setState({starships: res.results}))
    .catch(e => alert(e));
  }

  renderStarship(person, index) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableNativeFeedback
        key={`${person.name}-${index}`}
        onPress={() => navigate('StarshipsDetails', {
          personName: person.name,
          personUrl: person.url
        })}
      >
        <View style={styles.listItem}>
          <Text style={styles.name}>{person.name}</Text>
        </View>
      </TouchableNativeFeedback>);
  }

  render() {
    return (<ScrollView style={styles.listContainer}>
      {this.state.starships.map(this.renderStarship)}
    </ScrollView>)
  }
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
  },
  listItem: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
  },
  name: {
    fontSize: 25,
  }
})
