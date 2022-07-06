// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function FavoriteSearch() {
  return (
    <section className="clans">
      <div className="clans__search--container">
        <h1 className="clans__search--title">Rechercher des clans :</h1>
        <input type="text" placeholder="Recherche..." className="clans__search--input" />
        <Link to="/favorites/clans" className="clans__search">Mes Favoris</Link>
      </div>
    </section>
  );
}

// == Export
export default FavoriteSearch;
