import React, { useEffect, useState } from "react";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const res = await fetch("https://lichess.org/api/tournament");
      const data = await res.json();
      setTournaments(data);
    };
    fetchTournaments();
  }, []);

  return (
    <div className="container">
      <h2>Ongoing Tournaments</h2>
      <ul>
        {tournaments.map((t) => (
          <li key={t.id} className="card">
            <h3>{t.fullName}</h3>
            <p>Starts: {new Date(t.startsAt).toLocaleString()}</p>
            <p>Players: {t.nbPlayers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tournaments;
