// == Import
import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FavoriteClans from './FavoriteClans';

// == Composant
function Favorite() {
  const clans = useSelector((state) => state.clans.list);
  return (
    <section className="clans">
      <h1 className="clans__title">Clans favoris :</h1>
      <Link to="/favorites/clans/search" className="clans__btn--search">Rechercher un clan</Link>
      {
        clans.map((clan) => (
          <FavoriteClans key={clan.id} {...clan} />
        ))
      }
    </section>
  );
}

// == Export
export default Favorite;
