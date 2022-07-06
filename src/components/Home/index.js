// == Import
import News from 'src/components/Home/Main/News';
import ListWars from 'src/components/Home/Main/ListWars';
import Footer from 'src/components/Home/Footer';
import { useSelector } from 'react-redux';

// == Composant
function Main() {
  const wars = useSelector((state) => state.wars.list);
  return (
    <div>
      <News />
      <section className="wars">
        {wars.map((war) => (
          <ListWars key={war.id} {...war} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

// == Export
export default Main;
