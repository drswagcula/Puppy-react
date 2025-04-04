import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES/teams';

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTeams(data.success);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching teams:', err);
      }
    }
    fetchTeams();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;