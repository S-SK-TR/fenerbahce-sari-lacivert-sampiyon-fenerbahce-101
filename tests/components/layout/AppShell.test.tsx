import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '../../../src/components/layout/AppShell';
import { useStore } from '../../../src/core/store';

// Mock the useStore hook
vi.mock('../../../src/core/store', () => ({
  useStore: vi.fn()
}));

describe('AppShell Component', () => {
  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: vi.fn()
    });
  });

  it('renders the sidebar with navigation items', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planner')).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', () => {
    const setTheme = vi.fn();
    (useStore as jest.Mock).mockReturnValueOnce({
      theme: 'dark',
      setTheme
    });

    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );

    const themeButton = screen.getByText('Light Mode');
    fireEvent.click(themeButton);
    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('renders mobile navigation items', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});