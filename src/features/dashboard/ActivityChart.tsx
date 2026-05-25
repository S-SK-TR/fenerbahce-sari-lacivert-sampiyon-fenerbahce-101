import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ocak', value: 4000 },
  { name: 'Şubat', value: 3000 },
  { name: 'Mart', value: 2000 },
  { name: 'Nisan', value: 2780 },
  { name: 'Mayıs', value: 1890 },
  { name: 'Haziran', value: 2390 },
];

const ActivityChart = () => {
  return (
    <Card className="glass-card col-span-2 row-span-2">
      <CardHeader>
        <CardTitle>Etkinlik Analizi</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="var(--brand-500)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;