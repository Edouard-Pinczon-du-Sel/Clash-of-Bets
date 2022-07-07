// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function ListWars({ id, clans, temps}) {
  return (
    <Link to={`bets/page/${id}`} className="wars__list--link">
      <ul className="wars__list">
        <div className="wars__list--item">
          <div>
            {id}
            <li className="wars__list--li">{clans[0]} contre {clans[1]}</li>
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
