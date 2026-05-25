import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../src/components/ui/Card';

describe('Card Components', () => {
  it('renders Card with children', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders CardHeader with children', () => {
    render(
      <CardHeader>
        <div>Header Content</div>
      </CardHeader>
    );
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('renders CardTitle with children', () => {
    render(<CardTitle>Test Title</CardTitle>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders CardContent with children', () => {
    render(
      <CardContent>
        <div>Content</div>
      </CardContent>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});