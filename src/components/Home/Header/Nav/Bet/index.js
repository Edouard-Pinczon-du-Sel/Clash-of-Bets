// == Import
import './styles.scss';
import NavBar from '../../NavBar';

// == Composant
function Bet() {
  return (
    <div>
      <NavBar />
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
    </div>
  );
}

// == Export
export default Bet;
