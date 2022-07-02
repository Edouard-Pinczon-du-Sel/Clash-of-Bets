// == Import
import '../styles.scss';
import NavBar from '../../Header/NavBar';

// == Composant
function Login() {
  return (
    <div>
      <NavBar />
      <form action="" method="get">
        <div>
          <input type="text" name="name" id="name" placeholder="Email" required />
        </div>

        <div>
          <input type="surname" name="email" id="surname" placeholder="Mot de passe" required />
        </div>

        <div>
          <input type="submit" value="Connexion" />
        </div>
      </form>
    </div>
  );
}

// == Export
export default Login;
