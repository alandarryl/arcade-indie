import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Play from './pages/Play';
import './styles.css'; // On importe le CSS ici pour tout le site

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jouer" element={<Play />} />
      </Routes>
    </Router>
  );
}