import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./pages/List";
import Home from "./pages/Home";
import New from "./pages/News/App";
import Login from "./pages/Login/App";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/animes" exact render={() => <List screen="anime" />} />
      <Route path="/mangas" exact render={() => <List screen="manga" />} />
      <Route path="/noticias" exact component={New} />
      <Route path="/login" exact component={Login} />
      <Route path="/registro" exact component={Register} />
    </Router>
  );
};

export default Routes;
