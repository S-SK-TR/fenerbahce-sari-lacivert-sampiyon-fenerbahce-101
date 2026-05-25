import React from 'react';
import { render, screen } from '@testing-library/react';
import SunSafe from '../../../src/features/sun-safe/SunSafe';

// Mock child components
jest.mock('../../../src/features/sun-safe/UVIndex', () => () => (
  <div>UV Index</div>
));

jest.mock('../../../src/features/sun-safe/SunscreenTracker', () => () => (
  <div>Sunscreen Tracker</div>
));

describe('SunSafe Component', () => {
  it('renders without crashing', () => {
    render(<SunSafe />);
    expect(screen.getByText('UV Index')).toBeInTheDocument();
    expect(screen.getByText('Sunscreen Tracker')).toBeInTheDocument();
  });
});