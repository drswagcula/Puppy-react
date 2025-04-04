// src/components/Players.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Players() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES/players';

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlayers(data.success.players);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching players:', err);
      }
    }
    fetchPlayers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.breed}
            <Link to={`/player-details?id=${player.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Players;