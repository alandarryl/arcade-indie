import { Link } from 'react-router-dom';

export default function Play() {
  // C'est ici que tu ajouteras d'autres jeux dans le futur !
  const games = [
    {
      id: "mon-jeu-godot",
      title: "Mon Premier Jeu Godot",
      description: "Un super jeu d'arcade fait maison avec Godot Engine. Prêt à relever le défi et battre le meilleur score ?",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60" 
    },
    {
      id: "futur-jeu-2",
      title: "Prochain Projet (Bientôt)",
      description: "Un espace réservé pour mon prochain jeu. En cours de développement...",
      image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="play-container">
      {/* Bouton retour en arrière */}
      <Link to="/" className="back-button">
        ← Retour à l'accueil
      </Link>

      <h1 style={{ fontSize: '2rem', marginBottom: '30px' }}>Choisissez votre jeu</h1>

      {/* Grille des cartes */}
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />
            <div className="game-info">
              <h2 className="game-title">{game.title}</h2>
              <p className="game-description">{game.description}</p>
              
              <button className="play-now-button" onClick={() => alert("Étape suivante : lancer le jeu !")}>
                LANCER LE JEU
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}