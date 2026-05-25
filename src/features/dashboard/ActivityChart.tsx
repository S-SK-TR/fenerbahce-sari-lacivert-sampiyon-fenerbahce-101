import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useStore } from '../../core/store';

const ActivityChart = () => {
  const { activities } = useStore();

  // Etkinlik verilerini dönüştür
  const chartData = activities.reduce((acc, activity) => {
    const date = new Date(activity.date);
    const month = date.toLocaleString('tr-TR', { month: 'short' });
    const existing = acc.find(item => item.name === month);

    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: month, value: 1 });
    }

    return acc;
  }, []);

  return (
    <Card className="glass-card col-span-2 row-span-2">
      <CardHeader>
        <CardTitle>Etkinlik Analizi</CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="var(--brand-500)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-[300px] text-gray-500 dark:text-gray-400">
            Henüz etkinlik verisi yok
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivityChart;