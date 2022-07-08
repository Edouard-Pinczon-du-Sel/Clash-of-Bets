// == Import
import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ClansSearched from './ClansSearched';

// == Composant
function FavoriteSearch() {
  const clans = useSelector((state) => state.clans.list);

  return (
    <section className="clans">
      <div className="clans__search--container">
        <h1 className="clans__search--title">Rechercher des clans :</h1>
        <input type="text" placeholder="Recherche..." className="clans__search--input" />
        <Link to="/favorites/clans" className="clans__search">Mes Favoris</Link>
      </div>
      {
        clans.map((clan) => (
          <ClansSearched key={clan.id} {...clan} />
        ))
      }
    </section>
  );
}

// == Export
export default FavoriteSearch;
