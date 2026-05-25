import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { useStore } from './core/store';

// Feature pages
const Dashboard = React.lazy(() => import('./features/dashboard/Dashboard'));
const Planner = React.lazy(() => import('./features/planner/Planner'));
const Memories = React.lazy(() => import('./features/memories/Memories'));
const SunSafe = React.lazy(() => import('./features/sun-safe/SunSafe'));
const Soundscapes = React.lazy(() => import('./features/soundscapes/Soundscapes'));

function App() {
  const { theme } = useStore();

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/sun-safe" element={<SunSafe />} />
          <Route path="/soundscapes" element={<Soundscapes />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;