import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppShell } from '../../../src/components/layout/AppShell';
import { MemoryRouter } from 'react-router-dom';
import { useStore } from '../../../src/core/store';

jest.mock('../../../src/core/store');

describe('AppShell Component', () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
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
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Light Mode'));
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('renders mobile bottom navigation', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});