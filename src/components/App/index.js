// == Import
import './styles.css';
import { Routes, Route } from 'react-router-dom';

import Home from 'src/components/Home';
import Sign from 'src/components/Logs/Sign';
import Login from 'src/components/Logs/Login';


// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

// == Export
export default App;
