// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function News() {
  return (
    <section className="news news__visible">
      <p className="news__text">
        C'est ici qu'apparaîtront les news
        de l'application. Cette partie pourra
        être masquée en cliquant sur news
        dans la barre de navigation.
      </p>
      <Link to="newsletter" className="news__link">Lire plus</Link>
    </section>
  );
}

// == Export
export default News;
