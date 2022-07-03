// == Import
import './styles.scss';

// == Composant
function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list--link">
        <li className="footer__list--link--item"><a href="#">Plan du site</a></li>
        <li className="footer__list--link--item"><a href="#">Mentions Légales</a></li>
        <li className="footer__list--link--item"><a href="#">Explications</a></li>
        <li className="footer__list--link--item"><a href="#">Remerciements</a></li>
      </ul>

      <ul className="footer__list--media">
        <li className="footer__list--media--item"><a href="#">Github</a></li>
        <li className="footer__list--media--item"><a href="#">Twitter</a></li>
        <li className="footer__list--media--item"><a href="#">Instagram</a></li>
      </ul>

      <h4 className="footer__author">@Edouard Pinczon du Sel</h4>
    </footer>
  );
}

// == Export
export default Footer;
