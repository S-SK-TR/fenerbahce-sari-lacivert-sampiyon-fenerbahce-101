import React from 'react';
import { render, screen } from '@testing-library/react';
import SunSafe from '../../../src/features/sun-safe/SunSafe';

describe('SunSafe Component', () => {
  it('renders the UVIndex and SunscreenTracker components', () => {
    render(<SunSafe />);
    expect(screen.getByText('UV Index')).toBeInTheDocument();
    expect(screen.getByText('Sunscreen Tracker')).toBeInTheDocument();
  });
});