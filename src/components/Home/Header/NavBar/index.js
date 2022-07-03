// == Import
import '../Nav/styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function NavBar() {
  return (
    <nav className="header__navbar">
      <div className="header__navbar--container">
        <Link className="header__navbar--title" to="/">Clash of Bets</Link>
        <a href="#" className="header__navbar--item">XXXXX : Points</a>
        <div className="header__navbar--logs">
          <Link className="header__navbar--item" to="/sign">Inscription</Link>
          <Link to="/login" className="header__navbar--item">Connexion</Link>
        </div>
      </div>
    </nav>
  );
}

// == Export
export default NavBar;
