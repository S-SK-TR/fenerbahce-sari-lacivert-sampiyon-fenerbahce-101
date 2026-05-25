import React from 'react';
import { render, screen } from '@testing-library/react';
import { BentoGrid } from '../../../src/components/ui/BentoGrid';

describe('BentoGrid Component', () => {
  it('renders without crashing', () => {
    render(
      <BentoGrid>
        <div>Test Child</div>
      </BentoGrid>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies correct grid classes', () => {
    const { container } = render(
      <BentoGrid>
        <div>Test Child</div>
      </BentoGrid>
    );
    expect(container.firstChild).toHaveClass('grid');
    expect(container.firstChild).toHaveClass('grid-cols-1');
    expect(container.firstChild).toHaveClass('md:grid-cols-2');
    expect(container.firstChild).toHaveClass('lg:grid-cols-4');
  });
});