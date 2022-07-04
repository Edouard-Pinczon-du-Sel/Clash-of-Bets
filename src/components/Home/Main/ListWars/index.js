// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function ListWars({ clan1, clan2, temps}) {
  return (
    <section className="wars">
      <Link to="bets/page" className="wars__list--link">
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
    </section>
  );
}

// == Export
export default ListWars;
