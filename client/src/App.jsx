import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Leaderboards from "./components/Leaderboards";
import Tournaments from "./components/Tournaments";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
    </div>
  );
}

export default App;
