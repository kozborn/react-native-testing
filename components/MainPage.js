import React from "react";
import { Image, Text, TouchableOpacity, ScrollView, View, StyleSheet } from "react-native";

export default class MainPage extends React.Component {

  static navigationOptions = {
    title: 'Starships List',
    header: {
      visible: false
    }
  };

  render(){
    const { navigate } = this.props.navigation;

    return (<ScrollView style={styles.pageContainer}>
      <Image
        style={styles.logo}
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png'}}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigate('PeopleList')}
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>People List</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigate('StarshipsList')}
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Starships List</Text>
        </View>
      </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigate('SwapiHtml')}
        >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Swapi HTML</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigate('StaticHtml')}
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Static HTML content</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigate('StaticPDF')}
      >
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Static PDF</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>);

  }
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 10
  },
  logo: {
    backgroundColor: "#000",
    resizeMode: 'contain',
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

