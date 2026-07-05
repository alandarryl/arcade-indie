import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="main-title">🕹️ Ma Salle d'Arcade</h1>
      <p className="subtitle">
        Bienvenue sur mon espace gaming personnel. J'y regroupe mes créations et mes prototypes de jeux vidéo. Installe-toi confortablement et viens tester mes jeux directement sur ton navigateur !
      </p>
      
      {/* Gros bouton centré */}
      <Link to="/jouer" className="enter-button">
        Entrer dans la Salle
      </Link>
    </div>
  );
}