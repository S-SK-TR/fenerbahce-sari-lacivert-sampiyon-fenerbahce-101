import React from 'react';
import { render, screen } from '@testing-library/react';
import Memories from '../../../src/features/memories/Memories';

// Mock child component
jest.mock('../../../src/features/memories/MemoryGallery', () => () => (
  <div>Memory Gallery</div>
));

describe('Memories Component', () => {
  it('renders without crashing', () => {
    render(<Memories />);
    expect(screen.getByText('Memory Gallery')).toBeInTheDocument();
  });
});