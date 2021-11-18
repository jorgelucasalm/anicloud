import React, { useContext } from "react";
import { Context } from "../../Context/Authenticate";
import "./style.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const list = useRef(null);
  const { authenticate, authenticateLogin } = useContext(Context);
  const user = JSON.parse(localStorage.getItem("data"));
  console.log(user);

  const onClick = () => {
    const span = list.current; // corresponding DOM node
    var css = span.className === "navbar-list active" ? "none" : "active";
    span.className = "navbar-list " + css;
  };

  return (
    <nav>
      <div>
        <span className="navbar-title">
          <Link to="/">AniCloud</Link>
        </span>
        <ul className="navbar-list" ref={list}>
          <Link to="/animes">
            <li>Animes</li>
          </Link>
          <Link to="/mangas">
            <li>Mangás</li>
          </Link>
          <Link to="/noticias">
            <li>Notícias</li>
          </Link>

          {/* Caso esteja logado o menu hamburguer deve mostrar apenas o valor Sair */}
          {authenticate ? (
            <li style={{ cursor: "pointer" }} onClick={authenticateLogin}>
              Sair
            </li>
          ) : (
          <Link to="/login">
            <li className="hidden">Entrar</li>
          </Link>
          )}

        </ul>
        <span>
          {authenticate ? (
            <>
              <span style={{ marginRight: "2rem" }}>Olá, {user.name}</span>
              <span style={{ cursor: "pointer" }} onClick={authenticateLogin}>
                Sair
              </span>
            </>
          ) : (
            <Link to="/login">Entrar</Link>
          )}
        </span>
        <button onClick={onClick}>
          <span id="hamburguer"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
