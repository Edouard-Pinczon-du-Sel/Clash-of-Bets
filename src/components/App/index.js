// == Import
import './styles.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Home from 'src/components/Home';
import Sign from 'src/components/Logs/Sign';
import Login from 'src/components/Logs/Login';
import Bet from 'src/components/Home/Header/Nav/Bet';
import Favorite from 'src/components/Home/Header/Nav/Favorite';
import FavoriteSearch from 'src/components/Home/Header/Nav/Favorite/FavoriteSearch';
import Stat from 'src/components/Home/Header/Nav/Stat';
import NewsLetter from 'src/components/Home/Main/News/NewsLetter';
import BetPage from 'src/components/Home/Main/ListWars/BetPage';
import Header from '../Home/Header';

import { fetchWars } from '../../actions/wars';

// == Composant
function App() {
  const dispatch = useDispatch();
  // Lors du chargement initial de composant
  useEffect(
    () => {
      // On veut recup la liste des recette depuis l'API
      // Pour ça, on va dispatcher une action (émettre l'intention de charger les recettes)
      dispatch(fetchWars());
    },
    [],
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bets" element={<Bet />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/favorites/clans" element={<Favorite />} />
        <Route path="/favorites/clans/search" element={<FavoriteSearch />} />
        <Route path="/stats" element={<Stat />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/bets/page/:id" element={<BetPage />} />
      </Routes>
    </div>

  );
}

// == Export
export default App;
