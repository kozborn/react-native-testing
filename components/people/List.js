import React from "react";
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default class PeopleList extends React.Component {

  static navigationOptions = {
    title: 'People List',
  };

  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
    this.renderPeople = this.renderPeople.bind(this);
  }

  componentDidMount() {
    const url = "http://swapi.co/api/people/";
    fetch(url)
    .then(response => response.json())
    .then(res => this.setState({people: res.results}))
    .catch(e => alert(e));
  }

  renderPeople(person, index) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        key={`${person.name}-${index}`}
        onPress={() => navigate('PeopleDetails', {
          personName: person.name,
          personUrl: person.url
        })}
      >
        <View style={styles.listItem}>
          <Text style={styles.name}>{person.name}</Text>
          <Text>{person.gender}</Text>
          <Text>{person.height}</Text>
        </View>
      </TouchableOpacity>);
  }

  render() {
    return (<ScrollView style={styles.listContainer}>
      {this.state.people.map(this.renderPeople)}
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
