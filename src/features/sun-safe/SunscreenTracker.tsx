import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { useStore } from '../../core/store';
import { Button } from '../../components/ui/Button';
import { Plus, Edit, Trash2, HelpCircle } from 'lucide-react';

const SunscreenTracker = () => {
  const { sunscreens, addSunscreen, updateSunscreen, deleteSunscreen } = useStore();

  const handleAddSunscreen = () => {
    const newSunscreen = {
      id: Date.now().toString(),
      name: 'Yeni Güneş Koruyucu',
      spf: 30,
      waterResistant: true,
      expirationDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
    addSunscreen(newSunscreen);
  };

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Güneş Koruyucu Takibi</CardTitle>
        <Button size="sm" onClick={handleAddSunscreen}>
          <Plus className="w-4 h-4 mr-2" />
          Yeni Güneş Koruyucu
        </Button>
      </CardHeader>
      <CardContent>
        {sunscreens.length > 0 ? (
          <div className="space-y-4">
            {sunscreens.map((sunscreen) => (
              <div key={sunscreen.id} className="flex items-center justify-between p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                <div>
                  <h3 className="font-medium">{sunscreen.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    SPF {sunscreen.spf} • {sunscreen.waterResistant ? 'Su Dayanıklı' : 'Su Dışı'} • Son Kullanma: {sunscreen.expirationDate}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteSunscreen(sunscreen.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">Henüz güneş koruyucu yok</p>
            <Button variant="outline" className="mt-4" onClick={handleAddSunscreen}>
              <Plus className="w-4 h-4 mr-2" />
              İlk Güneş Koruyucuyu Ekle
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SunscreenTracker;