import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../../src/features/dashboard/Dashboard';

// Mock child components
jest.mock('../../../src/components/ui/BentoGrid', () => ({ children }: { children: React.ReactNode }) => (
  <div data-testid="bento-grid">{children}</div>
));

jest.mock('../../../src/features/dashboard/ActivityChart', () => () => (
  <div>Activity Chart</div>
));

jest.mock('../../../src/features/dashboard/RecentMemories', () => () => (
  <div>Recent Memories</div>
));

jest.mock('../../../src/features/dashboard/SunProtection', () => () => (
  <div>Sun Protection</div>
));

jest.mock('../../../src/features/dashboard/QuickActions', () => () => (
  <div>Quick Actions</div>
));

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('bento-grid')).toBeInTheDocument();
  });

  it('renders all dashboard sections', () => {
    render(<Dashboard />);
    expect(screen.getByText('Activity Chart')).toBeInTheDocument();
    expect(screen.getByText('Recent Memories')).toBeInTheDocument();
    expect(screen.getByText('Sun Protection')).toBeInTheDocument();
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
  });
});