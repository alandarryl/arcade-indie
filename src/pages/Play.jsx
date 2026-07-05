import { useState } from 'react';
import { Link } from 'react-router-dom';
import { gamesData } from "../data/games.js";


export default function Play() {
  const [activeGameUrl, setActiveGameUrl] = useState(null);

  return (
    <div className="play-container">
      
      {/* S'IL Y A UN JEU ACTIF */}
      {activeGameUrl ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            className="back-button" 
            onClick={() => setActiveGameUrl(null)}
            style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '1.1rem' }}
          >
            ← Quitter le jeu et revenir à la liste
          </button>
          
          <div style={{ 
            marginTop: '20px', 
            backgroundColor: '#000', 
            borderRadius: '16px', 
            padding: '10px',
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
            display: 'inline-block'
          }}>
            <iframe 
              src={activeGameUrl} 
              title="Godot Game"
              width="800" 
              height="600" 
              style={{ border: 'none', borderRadius: '8px', display: 'block' }}
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        
        /* S'IL N'Y A PAS DE JEU ACTIF */
        <>
          <Link to="/" className="back-button">
            ← Retour à l'accueil
          </Link>

          <h1 style={{ fontSize: '2rem', marginBottom: '30px' }}>Choisissez votre jeu</h1>

          <div className="games-grid">
            {/* On utilise gamesData qui vient de ton fichier externe désormais */}
            {gamesData.map(game => (
              <div key={game.id} className="game-card">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="game-info">
                  <h2 className="game-title">{game.title}</h2>
                  <p className="game-description">{game.description}</p>
                  
                  {game.url ? (
                    <button 
                      className="play-now-button" 
                      style={{ width: '100%', border: 'none', cursor: 'pointer' }}
                      onClick={() => setActiveGameUrl(game.url)}
                    >
                      LANCER LE JEU
                    </button>
                  ) : (
                    <button 
                      className="play-now-button" 
                      style={{ width: '100%', border: 'none', backgroundColor: '#475569', cursor: 'not-allowed' }}
                      disabled
                    >
                      BIENTÔT DISPONIBLE
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}