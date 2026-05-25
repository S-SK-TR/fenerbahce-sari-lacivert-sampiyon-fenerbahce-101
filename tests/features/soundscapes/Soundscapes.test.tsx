import React from 'react';
import { render, screen } from '@testing-library/react';
import Soundscapes from '../../../src/features/soundscapes/Soundscapes';

// Mock child component
jest.mock('../../../src/features/soundscapes/SoundPlayer', () => () => (
  <div>Sound Player</div>
));

describe('Soundscapes Component', () => {
  it('renders without crashing', () => {
    render(<Soundscapes />);
    expect(screen.getByText('Sound Player')).toBeInTheDocument();
  });
});