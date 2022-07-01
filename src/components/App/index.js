// == Import
import './styles.css';

import Header from 'src/components/Header';
import News from 'src/components/News';


// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <News />
    </div>
  );
}

// == Export
export default App;
