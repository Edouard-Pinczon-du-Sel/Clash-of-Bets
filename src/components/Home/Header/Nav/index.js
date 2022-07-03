// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function Nav() {
  return (
    <nav className="header__nav">
      <div className="header__nav--container">
        <input type="text" placeholder="Recherche..." className="header__nav--input" />
        <Link to="bets" className="header__nav--item">Paris</Link>
        <Link to="favorites" className="header__nav--item">Favoris</Link>
        <Link to="stats" className="header__nav--item">Statistiques</Link>
        <Link to="#" className="header__nav--item">News</Link>
      </div>
    </nav>
  );
}

// == Export
export default Nav;
