import React, { useEffect, useState } from "react";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const res = await fetch("https://lichess.org/api/tournament?created=1");
        if (!res.ok) throw new Error("Failed to fetch tournaments");
        const data = await res.json();

        // Save full created array
        setTournaments(data.created || []);
      } catch (err) {
        console.error("Error fetching tournaments:", err);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <div className="container">
      <h2>Upcoming & Ongoing Tournaments</h2>
      {tournaments.length === 0 ? (
        <p>No tournaments found</p>
      ) : (
        <div className="grid">
          {tournaments.map((t) => (
            <div key={t.id} className="card">
              <h3>{t.fullName}</h3>
              <p><strong>Variant:</strong> {t.variant.name}</p>
              <p><strong>Players:</strong> {t.nbPlayers}</p>
              <p>
                <strong>Starts:</strong>{" "}
                {new Date(t.startsAt).toLocaleString()}
              </p>
              <p>
                <strong>Duration:</strong> {t.minutes} minutes
              </p>
              <p>
                <strong>Clock:</strong> {t.clock.limit / 60} + {t.clock.increment}
              </p>
              <p><strong>Status:</strong> {t.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tournaments;
