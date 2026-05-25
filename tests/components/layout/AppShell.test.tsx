import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '../../../src/components/layout/AppShell';
import { useStore } from '../../../src/core/store';

// Mock the store
jest.mock('../../../src/core/store', () => ({
  useStore: jest.fn()
}));

// Mock Outlet component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div>Outlet Content</div>
}));

describe('AppShell Component', () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    // Mock store implementation
    (useStore as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme
    });
  });

  it('renders desktop sidebar with navigation items', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
    expect(screen.getByText('Memories')).toBeInTheDocument();
    expect(screen.getByText('SunSafe')).toBeInTheDocument();
    expect(screen.getByText('Soundscapes')).toBeInTheDocument();
  });

  it('renders mobile bottom navigation', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    const themeButton = screen.getByText('Light Mode');
    fireEvent.click(themeButton);
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('renders Outlet content', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Outlet Content')).toBeInTheDocument();
  });
});