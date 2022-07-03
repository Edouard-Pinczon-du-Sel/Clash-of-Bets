// == Import
import '../styles.scss';
import NavBar from '../../Home/Header/NavBar';

// == Composant
function Sign() {
  return (
    <div>
      <NavBar />
      <form action="" method="get">
        <div>
          <input type="text" name="name" id="name" placeholder="Prénom **" required />
        </div>

        <div>
          <input type="surname" name="email" id="surname" placeholder="Nom **" required />
        </div>

        <div>
          <input type="email" name="email" id="email" placeholder="Email **" required />
        </div>
        <div>
          <input type="submit" value="S'inscrire" />
        </div>
      </form>
    </div>
  );
}

// == Export
export default Sign;
