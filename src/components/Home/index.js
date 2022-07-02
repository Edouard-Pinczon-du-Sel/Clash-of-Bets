// == Import
import Header from 'src/components/Header';
import News from 'src/components/News';
import ListWars from 'src/components/ListWars';
import Footer from 'src/components/Footer';

// == Composant
function Nav() {
  return (
    <div>
      <Header />
      <News />
      <ListWars />
      <Footer />
    </div>
  );
}

// == Export
export default Nav;
