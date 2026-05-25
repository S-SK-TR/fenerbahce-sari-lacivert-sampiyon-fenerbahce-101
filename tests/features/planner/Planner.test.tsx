import React from 'react';
import { render, screen } from '@testing-library/react';
import Planner from '../../../src/features/planner/Planner';

describe('Planner Component', () => {
  it('renders the Calendar and ActivityList components', () => {
    render(<Planner />);
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('Activity List')).toBeInTheDocument();
  });
});