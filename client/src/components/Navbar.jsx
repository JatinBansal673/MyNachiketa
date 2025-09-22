import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Lichess Explorer</h2>
      <div>
        <Link to="/profile">Profile</Link>
        <Link to="/leaderboards">Leaderboard</Link>
        <Link to="/tournaments">Tournaments</Link>
      </div>
    </nav>
  );
}

export default Navbar;
