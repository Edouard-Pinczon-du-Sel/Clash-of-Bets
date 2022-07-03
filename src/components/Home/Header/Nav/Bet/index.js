// == Import
import './styles.scss';
import Nav from '../../NavBar';

// == Composant
function Bet() {
  return (
    <div>
      <Nav />
      <section className="bets">
        <h1 className="bets__title">Paris en cours :</h1>
        <ul className="bets__list">
          <div className="bets__list--item">
            <li className="bets__list--li">Paris sur : XXXX</li>
            <li className="bets__list--li">Adversaire : XXXX</li>
            <li className="bets__list--li">Mise : XXXX</li>
            <li className="bets__list--li">Temps restant : XXXX</li>
          </div>
        </ul>
      </section>
    </div>
  );
}

// == Export
export default Bet;
