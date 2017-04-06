import { StackNavigator } from "react-navigation";

import MainPage from "./MainPage";
import PeopleList from "./people/List";
import PeopleDetails from "./people/Details";
import StarshipsList from "./starships/List";
import StarshipsDetails from "./starships/Details";
import SwapiHtml from "./SwapiHtml";
import StaticHtml from "./StaticHtml";
import StaticPDF from "./StaticPDF";

const App = StackNavigator({
  Home: { screen: MainPage },
  PeopleList: { screen: PeopleList },
  PeopleDetails: { screen: PeopleDetails },
  StarshipsList: { screen: StarshipsList },
  StarshipsDetails: { screen: StarshipsDetails },
  SwapiHtml: { screen: SwapiHtml },
  StaticHtml: { screen: StaticHtml },
  StaticPDF: { screen: StaticPDF},
});

export default App;
