import React from 'react';
import { render, screen } from '@testing-library/react';
import { BentoGrid } from '../../../src/components/ui/BentoGrid';

describe('BentoGrid Component', () => {
  it('renders children content', () => {
    render(
      <BentoGrid>
        <div>Test Item 1</div>
        <div>Test Item 2</div>
      </BentoGrid>
    );
    expect(screen.getByText('Test Item 1')).toBeInTheDocument();
    expect(screen.getByText('Test Item 2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <BentoGrid className="custom-class">
        <div>Test Item</div>
      </BentoGrid>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});