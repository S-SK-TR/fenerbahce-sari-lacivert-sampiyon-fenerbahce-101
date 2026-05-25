import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { useStore } from '../../core/store';
import { Button } from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const { activities } = useStore();
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getDayActivities = (day: number) => {
    const dayDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    ).toISOString().split('T')[0];

    return activities.filter(activity => activity.date === dayDate);
  };

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Takvim</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={prevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="font-medium">
            {currentDate.toLocaleString('tr-TR', { month: 'long', year: 'numeric' })}
          </span>
          <Button variant="ghost" size="icon" onClick={nextMonth}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
              {day}
            </div>
          ))}
          {[...Array(firstDayOfMonth).keys()].map((_, i) => (
            <div key={`empty-${i}`} className="border border-transparent"></div>
          ))}
          {[...Array(daysInMonth).keys()].map(day => {
            const dayNumber = day + 1;
            const dayActivities = getDayActivities(dayNumber);
            const isToday = new Date().toDateString() === new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              dayNumber
            ).toDateString();

            return (
              <div
                key={dayNumber}
                className={`p-2 border rounded-lg ${isToday ? 'bg-blue-500/10 border-blue-500' : 'border-gray-200 dark:border-gray-700'}`}
              >
                <div className={`text-sm ${isToday ? 'font-medium text-blue-500' : 'text-gray-900 dark:text-gray-100'}`}>
                  {dayNumber}
                </div>
                {dayActivities.length > 0 && (
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {dayActivities.length} etkinlik
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calendar;