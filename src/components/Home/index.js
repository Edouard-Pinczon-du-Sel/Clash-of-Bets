// == Import

import Header from 'src/components/Home/Header';
import News from 'src/components/Home/Main/News';
import ListWars from 'src/components/Home/Main/ListWars';
import Footer from 'src/components/Home/Footer';

// == Composant
function Main() {
  return (
    <div>
      <Header />
      <News />
      <ListWars  /*id={id} clan1={clan1} clan2={clan2} temps={temps}*/ />
      <Footer />
    </div>
  );
}

// == Export
export default Main;
