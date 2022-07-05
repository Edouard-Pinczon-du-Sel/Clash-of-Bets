// == Import
import './styles.scss';

// == Composant
function Bet() {
  return (
    <section className="bets">
      <h1 className="bets__title">Paris en cours :</h1>
      <ul className="bets__list">
        <div className="bets__list--item">
          <li className="bets__list--link">#1/XX</li>
          <li className="bets__list--link">Paris sur : XXXX</li>
          <li className="bets__list--link">Adversaire : XXXX</li>
          <li className="bets__list--link">Mise : XXXX</li>
          <li className="bets__list--link">Temps restant : XXXX</li>
        </div>
      </ul>
    </section>
  );
}

// == Export
export default Bet;
