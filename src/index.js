import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/global.css";
import App from "./pages/App";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById("root")
);
