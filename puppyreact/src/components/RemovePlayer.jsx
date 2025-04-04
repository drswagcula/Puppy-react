import React, { useState } from 'react';

function RemovePlayer() {
  const [playerId, setPlayerId] = useState('');
  const [error, setError] = useState(null);
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES/players/${playerId}`;

  const handleDelete = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Player removed!');
      setPlayerId('');
    } catch (err) {
      setError(err.message);
      console.error('Error removing player:', err);
      alert('Failed to remove player.');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Remove Player</h2>
      <input type="text" placeholder="Player ID" value={playerId} onChange={(e) => setPlayerId(e.target.value)} />
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
}

export default RemovePlayer;