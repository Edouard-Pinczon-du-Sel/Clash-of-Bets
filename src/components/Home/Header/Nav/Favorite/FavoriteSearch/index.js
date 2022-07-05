// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function FavoriteSearch() {
  return (
    <section className="clans">
      <Link to="/favorites/clans" className="clans__search">Mes Favoris</Link>
    </section>

  );
}

// == Export
export default FavoriteSearch;
