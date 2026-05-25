import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../../src/features/dashboard/Dashboard';

describe('Dashboard Component', () => {
  it('renders all dashboard components', () => {
    render(<Dashboard />);
    expect(screen.getByText('Etkinlik Analizi')).toBeInTheDocument();
    expect(screen.getByText('Son Hatıralar')).toBeInTheDocument();
    expect(screen.getByText('Sun Protection')).toBeInTheDocument();
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
  });
});