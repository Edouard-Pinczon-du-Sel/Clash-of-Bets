// == Import
import './styles.scss';

// == Composant
function FavoriteClans({ id, clan }) {
  return (
    <div>
      <ul className="clans__list">
        <div className="clans__list--item">
          <div>
            <li className="clans__list--link">{clan}</li>
          </div>
          <button type="button" className="clans__list--btn">Supprimer</button>
        </div>
      </ul>
    </div>
  );
}

// == Export
export default FavoriteClans;
