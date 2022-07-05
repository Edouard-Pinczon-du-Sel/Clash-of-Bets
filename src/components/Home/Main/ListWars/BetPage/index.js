// == Import
import { useSelector } from 'react-redux';
import './styles.scss';
// == Composant
import BetForm from './BetForm';

function BetPage() {
  const wars = useSelector((state) => state.wars.list);
  return (
    <div>
      {
        wars.map((war) => (
          <BetForm key={war.id} {...war} />
        ))
      }
    </div>
  );
}

// == Export
export default BetPage;
