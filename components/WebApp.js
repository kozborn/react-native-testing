import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";
import MainPage from "./MainPage";
import PeopleList from "./people/List";
import PeopleDetails from "./people/Details";
import StarshipsList from "./starships/List";
import StarshipsDetails from "./starships/Details";
import SwapiHtml from "./WebOnly/SwapiHtml";
import StaticHtml from "./WebOnly/StaticHtml";
import StaticPDF from "./WebOnly/StaticPDF";

const history = createBrowserHistory();

const navigation = {
  navigate: (path) => history.push(path),
}

const routes = <Route path="/" render={() => <App navigation={navigation}/>} />;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.getNavigation = this.getNavigation.bind(this);
  }

  // Based on Link from 'react-router'

  static contextTypes = {
    router: React.PropTypes.shape({
      history: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired,
        replace: React.PropTypes.func.isRequired,
        createHref: React.PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  getNavigation(context) {
    return {
      navigate: (path, params = {}) => {
        this.state = params;
        return this.context.router.history.push(path);
      }
    }
  }

  render() {
    const navigation = this.getNavigation(this.context);
    return (
      <div style={{height: "100%"}}>
        <Switch>
          <Route exact path="/" render={() => <MainPage navigation={navigation}/>} />
          <Route path="/PeopleList" render={() => <PeopleList navigation={navigation}/>} />
          <Route path="/StarshipsList" render={() => <StarshipsList navigation={navigation}/>} />
          <Route path="/PeopleDetails" render={() => <PeopleDetails navigation={navigation}/>} />
          <Route path="/StarshipsDetails" render={() => <StarshipsDetails navigation={navigation}/>} />
          <Route path="/SwapiHtml" render={() => <SwapiHtml navigation={navigation}/>} />
          <Route path="/StaticHtml" render={() => <StaticHtml navigation={navigation}/>} />
          <Route path="/StaticPDF" render={() => <StaticPDF navigation={navigation}/>} />
        </Switch>
      </div>
    )
  }
}

const Root = () => (
  <Router>{routes}</Router>
)

export default Root;