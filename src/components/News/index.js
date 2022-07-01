// == Import
import './styles.scss';

// == Composant
function News() {
  return (
    <section className="news news__visible">
      <p className="news__text">
        C'est ici qu'apparaîtront les news
        de l'application. Cette parti pourra
        être masquée en cliquant sur news
        dans la barre de navigation
      </p>
    </section>
  );
}

// == Export
export default News;
