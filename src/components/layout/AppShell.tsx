import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../core/store';
import { cn } from '../../lib/utils';
import { LayoutDashboard, Calendar, Image, Sun, Music, Bell, Settings, LogOut, Moon, Sun as SunIcon } from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/planner', icon: Calendar, label: 'Planner' },
  { to: '/memories', icon: Image, label: 'Memories' },
  { to: '/sun-safe', icon: Sun, label: 'SunSafe' },
  { to: '/soundscapes', icon: Music, label: 'Soundscapes' }
];

const mobileNavItems = [...navItems, { to: '/settings', icon: Settings, label: 'Settings' }];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

export function AppShell() {
  const { theme, setTheme } = useStore();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex h-dvh bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[var(--border)] bg-[var(--bg-surface)] shrink-0">
        <div className="h-16 flex items-center px-5 border-b border-[var(--border)]">
          <span className="font-bold text-lg tracking-tight">Fenerbahçe</span>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-500/10 text-blue-500"
                  : "text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              )}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-[var(--border)]">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors"
          >
            {theme === 'dark' ? (
              <SunIcon size={18} className="text-[var(--text-muted)]" />
            ) : (
              <Moon size={18} className="text-[var(--text-muted)]" />
            )}
            <span className="text-sm font-medium text-[var(--text-muted)]">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 shrink-0 flex items-center justify-between px-4 md:px-6 border-b border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur-xl sticky top-0 z-30">
          <h1 className="font-semibold text-[var(--text-primary)]">Dashboard</h1>
          <button className="relative p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[var(--bg-surface)]/90 backdrop-blur-xl border-t border-[var(--border)] pb-[env(safe-area-inset-bottom)]">
        <div className="flex h-16">
          {mobileNavItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) => cn(
                "flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
                isActive ? "text-blue-500" : "text-[var(--text-muted)]"
              )}
            >
              <Icon size={22} />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}