// == Import
import './styles.css';
import { Routes, Route } from 'react-router-dom';

import Home from 'src/components/Home';
import Sign from 'src/components/Logs/Sign';
import Login from 'src/components/Logs/Login';
import Bet from 'src/components/Home/Header/Nav/Bet';
import Favorite from 'src/components/Home/Header/Nav/Favorite';
import Stat from 'src/components/Home/Header/Nav/Stat';
import NewsLetter from 'src/components/Home/Main/News/NewsLetter';
import BetPage from 'src/components/Home/Main/ListWars/BetPage';







// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bets" element={<Bet />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/stats" element={<Stat />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/bets/page" element={<BetPage />} />
      </Routes>
    </div>

  );
}

// == Export
export default App;
