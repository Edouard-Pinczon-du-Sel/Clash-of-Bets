// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function ListWars({ id, clan1, clan2, temps}) {
  return (
    <Link to="bets/page:id" className="wars__list--link">
      <ul className="wars__list">
        <div className="wars__list--item">
          <div>
            <li className="wars__list--li">{clan1} contre {clan2}</li>
            <li className="wars__list--li">Temps retant : {temps}</li>
          </div>
          <button type="button" className="wars__list--btn">Parier</button>
        </div>
      </ul>
    </Link>
  );
}

// == Export
export default ListWars;
