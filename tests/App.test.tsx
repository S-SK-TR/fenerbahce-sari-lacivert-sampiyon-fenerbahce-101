import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import { useStore } from '../../src/core/store';

// Mock the store
jest.mock('../../src/core/store', () => ({
  useStore: jest.fn()
}));

// Mock feature components
jest.mock('../../src/features/dashboard/Dashboard', () => () => <div>Dashboard</div>);
jest.mock('../../src/features/planner/Planner', () => () => <div>Planner</div>);
jest.mock('../../src/features/memories/Memories', () => () => <div>Memories</div>);
jest.mock('../../src/features/sun-safe/SunSafe', () => () => <div>SunSafe</div>);
jest.mock('../../src/features/soundscapes/Soundscapes', () => () => <div>Soundscapes</div>);

describe('App Component', () => {
  beforeEach(() => {
    // Mock store implementation
    (useStore as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: jest.fn()
    });
  });

  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('applies dark theme class to document element', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(document.documentElement).toHaveClass('dark');
  });

  it('renders all feature routes', () => {
    render(
      <MemoryRouter initialEntries={[ '/planner', '/memories', '/sun-safe', '/soundscapes' ]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Planner')).toBeInTheDocument();
  });
});