import React, { useEffect, useState } from "react";

function Leaderboards() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const res = await fetch("https://lichess.org/api/player/top/10/blitz");
      const data = await res.json();
      setLeaders(data.users);
    };
    fetchLeaders();
  }, []);

  return (
    <div className="container">
      <h2>Top 10 Blitz Players</h2>
      <ul>
        {leaders.map((player) => (
          <li key={player.id} className="card">
            <h3>{player.username}</h3>
            <p>Rating: {player.perfs.blitz.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboards;
