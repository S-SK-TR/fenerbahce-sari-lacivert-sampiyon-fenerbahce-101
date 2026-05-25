import React from 'react';
import { render, screen } from '@testing-library/react';
import Planner from '../../../src/features/planner/Planner';

// Mock child components
jest.mock('../../../src/components/ui/Calendar', () => () => (
  <div>Calendar</div>
));

jest.mock('../../../src/features/planner/ActivityList', () => () => (
  <div>Activity List</div>
));

describe('Planner Component', () => {
  it('renders without crashing', () => {
    render(<Planner />);
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('Activity List')).toBeInTheDocument();
  });
});