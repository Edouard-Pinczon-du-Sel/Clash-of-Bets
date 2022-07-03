// == Import
import { Link } from 'react-router-dom';
import './styles.scss';
import NavBar from '../../Home/Header/NavBar';

// == Composant
function Login() {
  return (
    <div>
      <NavBar />
      <div className="login">
        <h1 className="login__title">Veuillez vous connecter</h1>
        <form action="" method="get" className="login__form">
          <div>
            <input type="text" name="name" id="name" placeholder="Email" className="login__input" required />
          </div>

          <div>
            <input type="surname" name="email" id="surname" placeholder="Mot de passe" className="login__input" required />
          </div>
          <p className="login__sign--text">
            Pas de compte ? Vous pouvez vous inscrire ici :
            <Link to="/sign" className="login__sign--btn">S'inscire</Link>
          </p>
          <div>
            <button type="submit" className="login__btn">Connexion</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// == Export
export default Login;
