import React from 'react';
import { render, screen } from '@testing-library/react';
import { BentoGrid } from '../../../src/components/ui/BentoGrid';

describe('BentoGrid Component', () => {
  it('renders children correctly', () => {
    render(
      <BentoGrid>
        <div>Test Child</div>
      </BentoGrid>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <BentoGrid className="custom-class">
        <div>Test Child</div>
      </BentoGrid>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});