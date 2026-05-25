import React from 'react';
import { render, screen } from '@testing-library/react';
import Soundscapes from '../../../src/features/soundscapes/Soundscapes';

describe('Soundscapes Component', () => {
  it('renders the SoundPlayer component', () => {
    render(<Soundscapes />);
    expect(screen.getByText('Sound Player')).toBeInTheDocument();
  });
});