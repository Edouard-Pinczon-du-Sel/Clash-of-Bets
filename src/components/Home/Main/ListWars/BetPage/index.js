// == Import
import './styles.scss';
import NavBar from '../../../Header/NavBar';
// == Composant
function BetPage() {
  return (
    <div>
      <NavBar />
      <section className="bet">
        <h1 className="bet__title">Misez ici</h1>
        <p>
          !! Attention pour le moment il n'est pas
          possible de modifier son paris une fois
          celui-ci confirmer !!
        </p>
        <form className="bet__form">
          <label for="bet-select" className="bet__label--select">Choisissez le clan sur lequel vous voulez parier</label>
          <select name="bet-select" className="bet__select">
            <option>----</option>
            <option>CLAN1</option>
            <option>CLAN2</option>
          </select>
          <label for="bet" className="bet__label--input">Combien voulez vous miser ?</label>
          <input name="bet" type="number" className="bet__input" placeholder="Entrer votre mise..." />
          <button type="submit" className="bet__btn">Confirmer</button>
        </form>
      </section>
    </div>
  );
}

// == Export
export default BetPage;
