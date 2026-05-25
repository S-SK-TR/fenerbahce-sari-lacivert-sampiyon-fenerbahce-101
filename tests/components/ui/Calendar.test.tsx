import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from '../../../src/components/ui/Calendar';
import { useStore } from '../../../src/core/store';

jest.mock('../../../src/core/store');

describe('Calendar Component', () => {
  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue({
      activities: [
        { id: '1', date: new Date().toISOString().split('T')[0], title: 'Test Activity' }
      ]
    });
  });

  it('renders calendar with current month', () => {
    render(<Calendar />);
    const currentMonth = new Date().toLocaleString('tr-TR', { month: 'long' });
    expect(screen.getByText(new RegExp(currentMonth, 'i'))).toBeInTheDocument();
  });

  it('navigates to previous month', () => {
    render(<Calendar />);
    const prevButton = screen.getByRole('button', { name: /previous month/i });
    fireEvent.click(prevButton);
    const prevMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString('tr-TR', { month: 'long' });
    expect(screen.getByText(new RegExp(prevMonth, 'i'))).toBeInTheDocument();
  });

  it('displays activities for the current day', () => {
    render(<Calendar />);
    const today = new Date().getDate();
    expect(screen.getByText(`${today}`)).toBeInTheDocument();
    expect(screen.getByText('1 etkinlik')).toBeInTheDocument();
  });
});