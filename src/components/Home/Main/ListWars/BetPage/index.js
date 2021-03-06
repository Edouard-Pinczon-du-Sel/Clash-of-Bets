// == Import

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles.scss';
// == Composant
// import BetForm from './BetForm';

function BetPage() {
  const param = useParams();
  const clan = useSelector(
    (state) => state.wars.list.find((war) => war.id === parseInt(param.id, 10)),
  );
  return (
    <section className="bet">
      <h1 className="bet__title">Misez ici</h1>
      <p>
        !! Attention pour le moment il n'est pas
        possible de modifier son pari une fois
        celui-ci confirmer !!
      </p>
      <form className="bet__form">
        <label htmlFor="bet-select" className="bet__label--select">Choisissez le clan sur lequel vous voulez parier</label>
        <select name="bet-select" className="bet__select">
          <option>----</option>
          {
            clan.clans.map((option) => (
              <option key={option}>{option}</option>
            ))
          }
        </select>
        <label htmlFor="bet" className="bet__label--input">Combien voulez vous miser ?</label>
        <input name="bet" type="number" className="bet__input" placeholder="Entrer votre mise..." />
        <button type="submit" className="bet__btn">Confirmer</button>
      </form>
    </section>
  );
}

// == Export
export default BetPage;
