// == Import
import './styles.scss';

// == Composant
function ClansSearched({ id, clan }) {
  return (
    <div>
      <ul className="clans__searched__list">
        <div className="clans__searched__list--item">
          <div>
            <li className="clans__searched__list--link">{clan}</li>
          </div>
          <button type="button" className="clans__searched__list--btn">Ajouter</button>
        </div>
      </ul>
    </div>
  );
}

// == Export
export default ClansSearched;
