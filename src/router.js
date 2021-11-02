import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import List from "./pages/List";

const Routes = () => {
  return (
    <Router>
      <Route component={List} path="/" exact />
      <Route component={List} path="/listagem" />
    </Router>
  );
};

export default Routes;
