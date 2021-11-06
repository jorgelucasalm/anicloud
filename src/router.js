import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./pages/List";

const Routes = () => {
  return (
    <Router>
      <Route path="/animes" exact render= {() => <List screen="animes"/>} />
      <Route path="/mangas" exact render= {() => <List screen="mangas"/>} />
    </Router>
  );
};

export default Routes;
