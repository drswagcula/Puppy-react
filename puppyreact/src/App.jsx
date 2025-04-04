import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Players from './components/Players.jsx';
import InvitePlayer from './components/InvitePlayer.jsx';
import PlayerDetails from './components/PlayerDetails.jsx';
import RemovePlayer from './components/RemovePlayer.jsx';
import Teams from './components/Teams.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/players">Players</Link>
            </li>
            <li>
              <Link to="/invite">Invite Player</Link>
            </li>
            <li>
              <Link to="/player-details">Player Details</Link>
            </li>
            <li>
              <Link to="/remove-player">Remove Player</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/players" element={<Players />} />
          <Route path="/invite" element={<InvitePlayer />} />
          <Route path="/player-details" element={<PlayerDetails />} />
          <Route path="/remove-player" element={<RemovePlayer />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;