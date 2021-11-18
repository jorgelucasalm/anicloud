import React, { useContext } from "react";
import { Context } from "../../Context/Authenticate";
import "./style.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const list = useRef(null);
  const button = useRef(null);
  const { authenticate, authenticateLogin } = useContext(Context);
  const user = JSON.parse(localStorage.getItem("data"));
  
  const history = useHistory();

  const onClick = () => {
    const span = list.current; // corresponding DOM node
    const btn = button.current; // corresponding DOM node
    var css = span.className === "navbar-list active" ? "none" : "active";
    var cssBtn = btn.className === "active" ? "" : "active";
    span.className = "navbar-list " + css;
    btn.className = cssBtn;

  };

  const logout = () => {
    authenticateLogin();
    history.push("/");

  }

  return (
    <nav>
      <div>
        <span className="navbar-title">
          <Link to="/">AniCloud</Link>
        </span>
        <ul className="navbar-list" ref={list}>
          {/* Caso esteja logado o menu hamburguer deve mostrar apenas o valor Sair */}
          {authenticate ? (
            <>
              <Link to="/animes">
                <li>Animes</li>
              </Link>
              <Link to="/mangas">
                <li>Mangás</li>
              </Link>
              <Link to="/noticias">
                <li>Notícias</li>
              </Link>

              <li className="hidden" style={{ cursor: "pointer" }} onClick={logout}>
                Sair
              </li>
            </>
          ) : (
            <Link to="/login">
              <li className="hidden">Entrar</li>
            </Link>
          )}
        </ul>
        <span>
          {authenticate ? (
            <>
              <span style={{ marginRight: "2rem", cursor: "pointer" }}>Olá, {user.name}</span>
              <span className="logout" style={{  }} onClick={logout}>
                Sair
              </span>
            </>
          ) : (
            <Link to="/login">Entrar</Link>
          )}
        </span>
        <button onClick={onClick}>
          <span id="hamburguer" ref={button}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
