// == Import
import Header from 'src/components/Home/Header';
import News from 'src/components/Home/Main/News';
import ListWars from 'src/components/Home/Main/ListWars';
import Footer from 'src/components/Home/Footer';

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
