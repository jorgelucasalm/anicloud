import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./pages/List";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Router>
     <Route path="/" exact component={Home} />
      <Route path="/animes" exact render= {() => <List screen="anime"/>} />
      <Route path="/mangas" exact render= {() => <List screen="manga"/>} />
    </Router>
  );
};

export default Routes;
