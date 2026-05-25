import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Sun } from 'lucide-react';

const UVIndex = () => {
  const uvIndex = 7;
  const uvLevel = getUVLevel(uvIndex);

  function getUVLevel(index: number) {
    if (index <= 2) return { name: 'Düşük', color: 'text-green-500' };
    if (index <= 5) return { name: 'Orta', color: 'text-yellow-500' };
    if (index <= 7) return { name: 'Yüksek', color: 'text-orange-500' };
    if (index <= 10) return { name: 'Çok Yüksek', color: 'text-red-500' };
    return { name: 'Aşırı', color: 'text-purple-500' };
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>UV İndeksi</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Sun className={`w-6 h-6 ${uvLevel.color}`} />
              <span className="text-4xl font-bold">{uvIndex}</span>
            </div>
            <div className="mt-2">
              <div className={`text-sm font-medium ${uvLevel.color}`}>{uvLevel.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Güneş koruma tavsiyesi: Güneş gözlüğü kullanın</div>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
            <Sun className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UVIndex;