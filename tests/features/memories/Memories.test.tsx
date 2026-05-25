import React from 'react';
import { render, screen } from '@testing-library/react';
import Memories from '../../../src/features/memories/Memories';

describe('Memories Component', () => {
  it('renders the MemoryGallery component', () => {
    render(<Memories />);
    expect(screen.getByText('Memory Gallery')).toBeInTheDocument();
  });
});