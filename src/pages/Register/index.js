import Main from "./components/Main";
import FormNew from "./components/FormNew";
import Navbar from "../../components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <FormNew />
      </Main>
    </>
  );
}

export default App;
