import './style.css'

const Navbar = ()=> {
  return (
    <nav>
      <div>
        <span className="navbar-title">Listagem de filmes</span>
        <ul className="navbar-list">
          <li>Animes</li>
          <li>Mangás</li>
          <li>Notícias</li>
        </ul>
        <span>Entrar</span>
      </div>
    </nav>
  )
}

export default Navbar;