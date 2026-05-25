import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { useStore } from '../../core/store';
import { Button } from '../../components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';

const ActivityList = () => {
  const { activities, addActivity, updateActivity, deleteActivity } = useStore();

  const handleAddActivity = () => {
    const newActivity = {
      id: Date.now().toString(),
      name: 'Yeni Etkinlik',
      date: new Date().toISOString().split('T')[0],
      duration: 60,
      intensity: 'medium'
    };
    addActivity(newActivity);
  };

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Etkinlikler</CardTitle>
        <Button size="sm" onClick={handleAddActivity}>
          <Plus className="w-4 h-4 mr-2" />
          Yeni Etkinlik
        </Button>
      </CardHeader>
      <CardContent>
        {activities.length > 0 ? (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                <div>
                  <h3 className="font-medium">{activity.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.date} • {activity.duration} dakika • {activity.intensity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteActivity(activity.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">Henüz etkinlik yok</p>
            <Button variant="outline" className="mt-4" onClick={handleAddActivity}>
              <Plus className="w-4 h-4 mr-2" />
              İlk Etkinliği Ekle
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivityList;