// == Import
import './Nav/styles.scss';
import Nav from './Nav';

// == Composant
function Header() {
  return (
    <header className="header">
      <Nav />
    </header>
  );
}

// == Export
export default Header;
