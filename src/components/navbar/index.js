import "./style.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const list = useRef(null);

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
          <Link to="/login">
            <li className="hidden">Entrar</li>
          </Link>
        </ul>
        <span>
          <Link to="/login">Entrar</Link>
        </span>
        <button onClick={onClick}>
          <span id="hamburguer"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
