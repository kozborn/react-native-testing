import React from "react";
import { Image, Text, Button, ScrollView, View, StyleSheet } from "react-native";

export default class MainPage extends React.Component {

  static navigationOptions = {
    title: 'StarWars',
  };

  render(){

     const { navigate } = this.props.navigation;

    return (<ScrollView style={styles.pageContainer}>
      <Image
        style={styles.logo}
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png'}}
      />
      <View style={styles.linkContainer}>
        <Button
          onPress={() => navigate('PeopleList')}
          style={styles.link}
          title="People List"
        />
      </View>
      <View style={styles.linkContainer}>
        <Button
          onPress={() => navigate('StarshipsList')}
          style={styles.link}
          title="Starships List"
        />
      </View>
      <View style={styles.linkContainer}>
        <Button
          onPress={() => navigate('OnetHtml')}
          style={styles.link}
          title="Onet.pl"
        />
      </View>
      <View style={styles.linkContainer}>
        <Button
          onPress={() => navigate('StaticHtml')}
          style={styles.link}
          title="Static HTML content"
        />
      </View>
      <View style={styles.linkContainer}>
        <Button
          onPress={() => navigate('StaticPDF')}
          style={styles.link}
          title="Static PDF"
        />
      </View>
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
    marginTop:20,
    textAlign: 'center',
    fontSize: 25,
  },
  linkContainer: {
    marginTop: 10,
  }
})

