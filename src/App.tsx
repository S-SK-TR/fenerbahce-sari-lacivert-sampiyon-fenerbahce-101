import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import Dashboard from './features/dashboard/Dashboard';
import Planner from './features/planner/Planner';
import Memories from './features/memories/Memories';
import SunSafe from './features/sun-safe/SunSafe';
import Soundscapes from './features/soundscapes/Soundscapes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="planner" element={<Planner />} />
          <Route path="memories" element={<Memories />} />
          <Route path="sun-safe" element={<SunSafe />} />
          <Route path="soundscapes" element={<Soundscapes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;