// == Import
import './styles.css';

import Header from 'src/components/Header';
import News from 'src/components/News';
import ListWars from 'src/components/ListWars';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <News />
      <ListWars />
    </div>
  );
}

// == Export
export default App;
