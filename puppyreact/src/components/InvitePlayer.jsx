import React, { useState } from 'react';

function InvitePlayer() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [error, setError] = useState(null);
  const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES/players';

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, breed }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Player invited!');
      setName('');
      setBreed('');
    } catch (err) {
      setError(err.message);
      console.error('Error inviting player:', err);
      alert('Failed to invite player.');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Invite a New Player</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
        <button type="submit">Invite</button>
      </form>
    </div>
  );
}

export default InvitePlayer;