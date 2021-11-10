import Main from "./components/Main";
import FormNew from "./components/FormNew";
// import Reset from "./components/styles/generic/Reset";
import Navbar from "../../components/navbar";

function Login() {
  return (
    <>
      <Navbar/>
      <Main>
        <FormNew />
      </Main>
    </>
  );
}

export default Login;
