import React from 'react';
import { View } from 'react-native';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MainPage from "./MainPage";
import PeopleList from "./people/List";
import PeopleDetails from "./people/Details";
import StarshipsList from "./starships/List";
import StarshipsDetails from "./starships/Details";
import SwapiHtml from "./WebOnly/SwapiHtml";
import StaticHtml from "./StaticHtml";
import StaticPDF from "./StaticPDF";

const App = () => (
  <Router>
    <View>
      <Route path="/" component={MainPage} />
      <Route path="/people-list" component={PeopleList} />
      <Route path="/starships-list" component={StarshipsList} />
      <Route path="/people-details" component={PeopleDetails} />
      <Route path="/starships-details" component={StarshipsDetails} />
      <Route path="/swapi-html" component={SwapiHtml} />
      <Route path="/static-html" component={StaticHtml} />
      <Route path="/static-pdf" component={StaticPDF} />
    </View>
  </Router>
)

export default App;