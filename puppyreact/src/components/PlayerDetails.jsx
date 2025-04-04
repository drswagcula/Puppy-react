import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PlayerDetails() {
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const playerId = searchParams.get('id');
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES/players/${playerId}`;

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlayer(data.success);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching player details:', err);
      }
    }
    fetchPlayer();
  }, [playerId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Player Details</h2>
      <p>Name: {player.name}</p>
      <p>Breed: {player.breed}</p>
      {player.teamId && <p>Team ID: {player.teamId}</p>}
    </div>
  );
}

export default PlayerDetails;