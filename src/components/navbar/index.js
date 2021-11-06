import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <span className="navbar-title"><Link to="/">Listagem de filmes</Link></span>
        <ul className="navbar-list">
          <li><Link to="/animes">Animes</Link></li>
          <li><Link to="/mangas">Mangás</Link></li>
          <li><Link to="/">Notícias</Link></li>
        </ul>
        <span><Link to="/">Entrar</Link></span>
      </div>
    </nav>
  );
};

export default Navbar;
