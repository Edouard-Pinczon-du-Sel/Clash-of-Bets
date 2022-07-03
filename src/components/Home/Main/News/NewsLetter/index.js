// == Import
import './styles.scss';
import NavBar from '../../../Header/NavBar';

// == Composant
function NewsLetter() {
  return (
    <div>
      <NavBar />
      <section className="newsletter">
        <h1 className="newsletter__title">News</h1>
        <ul className="newsletter__list">
          <p>Voici l'endroit ou vous pourez consulter les news en entières et passées</p>
          <div className="newsletter__list--item">
            <li className="newsletter__list--link">News 1</li>
            <button type="button" className="newsletter__list--btn">Consulter</button>
          </div>
        </ul>
      </section>
    </div>
  );
}

// == Export
export default NewsLetter;
