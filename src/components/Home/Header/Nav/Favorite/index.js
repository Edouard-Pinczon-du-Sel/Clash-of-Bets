// == Import
import './styles.scss';
import Nav from '../../NavBar';

// == Composant
function Favorite() {
  return (
    <div>
      <Nav />
      <section className="clans">
        <h1 className="clans__title">Clans favoris :</h1>
        <ul className="clans__list">
          <div className="clans__list--item">
            <div>
              <li className="clans__list--link">CLAN</li>
            </div>
            <button type="button" className="clans__list--btn">Supprimer</button>
          </div>
        </ul>
      </section>
    </div>
  );
}

// == Export
export default Favorite;
