// == Import
import { Link } from 'react-router-dom';
import './styles.scss';
import NavBar from '../../Home/Header/NavBar';

// == Composant
function Sign() {
  return (
    <div>
      <NavBar />
      <form action="" method="get" className="sign">
        <h1 className="sign__title">Inscrivez vous</h1>
        <div>
          <input type="text" name="name" id="name" placeholder="Prénom **" className="sign__input" required />
        </div>

        <div>
          <input type="surname" name="email" id="surname" placeholder="Nom **" className="sign__input" required />
        </div>

        <div>
          <input type="email" name="email" id="email" placeholder="Email **" className="sign__input" required />
        </div>
        <p className="sign__login--text">
          Déjà un compte ? Vous pouvez vous connecter ici :
          <Link to="/login" className="sign__login--btn">S'inscire</Link>
        </p>
        <div>
          <input type="submit" value="S'inscrire" className="sign__btn" />
        </div>
      </form>
    </div>
  );
}

// == Export
export default Sign;
