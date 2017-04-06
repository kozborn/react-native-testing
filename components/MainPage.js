import React from "react";
import { Image, Text, TouchableNativeFeedback, ScrollView, View, StyleSheet } from "react-native";

export default class MainPage extends React.Component {

  static navigationOptions = {
    title: 'StarWars',
    header: {
      visible: false
    },
  };

  render(){

    const { navigate } = this.props.navigation;

    return (<ScrollView style={styles.pageContainer}>
      <Image
        style={styles.logo}
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png'}}
      />
      <TouchableNativeFeedback
        onPress={() => navigate('PeopleList')}
        style={styles.link}
        title="People List"
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>People List</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => navigate('StarshipsList')}
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Starships List</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.linkContainer}>
        <TouchableNativeFeedback
          onPress={() => navigate('SwapiHtml')}
        >
          <Text style={styles.link}>Swapi HTML</Text>
        </TouchableNativeFeedback>
      </View>
      <TouchableNativeFeedback
        onPress={() => navigate('StaticHtml')}
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Static HTML content</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => navigate('StaticPDF')}
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Static PDF</Text>
        </View>
      </TouchableNativeFeedback>
    </ScrollView>);
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 10
  },
  logo: {
    flex: 1,
    height: 200
  },
  link: {
    fontSize: 25,
    color: "#ffe81f",
  },
  linkContainer: {
    padding: 15,
    backgroundColor: '#333333',
    marginTop: 10,
  }
})

