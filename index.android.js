/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from "react-navigation";
import MainPage from "./components/MainPage";
import PeopleList from "./components/people/List";
import PeopleDetails from "./components/people/Details";
import StarshipsList from "./components/starships/List";
import StarshipsDetails from "./components/starships/Details";
import SwapiHtml from "./components/SwapiHtml";
import StaticHtml from "./components/StaticHtml";
import StaticPDF from "./components/StaticPDF";

const SwapiProject = StackNavigator({
  Home: { screen: MainPage },
  PeopleList: { screen: PeopleList },
  PeopleDetails: { screen: PeopleDetails },
  StarshipsList: { screen: StarshipsList },
  StarshipsDetails: { screen: StarshipsDetails },
  SwapiHtml: { screen: SwapiHtml },
  StaticHtml: { screen: StaticHtml },
  StaticPDF: { screen: StaticPDF},
});

AppRegistry.registerComponent('SwapiProject', () => SwapiProject);
