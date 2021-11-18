import "./App.css";
import Routes from "../router";
import { Authenticate } from "../Context/Authenticate";

function App() {
  return (
    <Authenticate >
      <Routes />
    </Authenticate>
  );
}

export default App;
