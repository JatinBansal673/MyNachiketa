import React, { useState } from "react";

function Profile() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await fetch(`https://lichess.org/api/user/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      alert(err.message);
      setProfile(null);
    }
  };

  return (
    <div className="container">
      <h2>Search Player Profile</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Search</button>

      {profile && (
        <div className="card">
          <h3>{profile.username}</h3>
          <p>{profile.profile.bio}</p>
          <p>Games Played: {profile.count.all}</p>
          <p>Blitz Rating: {profile.perfs.blitz?.rating || "N/A"}</p>
          <p>Bullet Rating: {profile.perfs.bullet?.rating || "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
