


function GameCard({ game }) {
    return (
        <div className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />
            <h3 className="game-title">{game.title}</h3>
            <p className="game-description">{game.description}</p>
            <a href={game.link} className="play-button">Play Now</a>
        </div>
    );
}

export default GameCard;