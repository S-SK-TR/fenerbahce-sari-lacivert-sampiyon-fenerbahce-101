import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import { MemoryRouter } from 'react-router-dom';

describe('App Component', () => {
  it('renders the AppShell component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Fenerbahçe')).toBeInTheDocument();
  });

  it('renders all routes', () => {
    render(
      <MemoryRouter initialEntries={['/planner']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Planner')).toBeInTheDocument();
  });
});