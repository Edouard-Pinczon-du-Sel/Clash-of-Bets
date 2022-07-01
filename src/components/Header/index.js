// == Import
import './Nav/styles.scss';
import Nav from './Nav';
import NavBar from './NavBar';

// == Composant
function Header() {
  return (
    <header className="header">
      <NavBar />
      <Nav />
    </header>
  );
}

// == Export
export default Header;
