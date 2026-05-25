import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { useStore } from '../../core/store';
import { Sun, HelpCircle } from 'lucide-react';

const SunProtection = () => {
  const { sunscreens } = useStore();

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Gün Koruma</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">UV İndeksi: 7</span>
            </div>
            <div className="mt-2">
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