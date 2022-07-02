// == Import
import './styles.scss';

// == Composant
function Nav() {
  return (
    <nav className="header__nav">
      <div className="header__nav--container">
        <input type="text" placeholder="Recherche..." className="header__nav--input" />
        <a href="#" className="header__nav--item">Paris</a>
        <a href="#" className="header__nav--item">Favoris</a>
        <a href="#" className="header__nav--item">Statistiques</a>
        <a href="#" className="header__nav--item">News</a>
      </div>
    </nav>
  );
}

// == Export
export default Nav;
