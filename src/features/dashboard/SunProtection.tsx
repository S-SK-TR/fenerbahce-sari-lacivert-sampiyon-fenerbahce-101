import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { useStore } from '../../core/store';
import { Sun, HelpCircle } from 'lucide-react';

const SunProtection = () => {
  const { sunscreens } = useStore();

  // Basit UV indeksi hesaplama
  const uvIndex = Math.floor(Math.random() * 11);
  const uvLevel = getUVLevel(uvIndex);

  function getUVLevel(index) {
    if (index <= 2) return { name: 'Düşük', color: 'text-green-500' };
    if (index <= 5) return { name: 'Orta', color: 'text-yellow-500' };
    if (index <= 7) return { name: 'Yüksek', color: 'text-orange-500' };
    if (index <= 10) return { name: 'Çok Yüksek', color: 'text-red-500' };
    return { name: 'Aşırı', color: 'text-purple-500' };
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Gün Koruma</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Sun className={`w-5 h-5 ${uvLevel.color}`} />
              <span className="font-medium">UV İndeksi: {uvIndex}</span>
            </div>
            <div className="mt-2">
              <div className={`text-sm font-medium ${uvLevel.color}`}>{uvLevel.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Gün Koruma</div>
              {sunscreens.length > 0 ? (
                <div className="flex items-center gap-2 mt-1">
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{sunscreens[0].name} (SPF {sunscreens[0].spf})</span>
                </div>
              ) : (
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Koruma yok</div>
              )}
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

export default SunProtection;