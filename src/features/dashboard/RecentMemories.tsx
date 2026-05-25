import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { useStore } from '../../core/store';
import { Image } from 'lucide-react';

const RecentMemories = () => {
  const { memories } = useStore();

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Son Hatıralar</CardTitle>
      </CardHeader>
      <CardContent>
        {memories.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {memories.slice(0, 3).map((memory) => (
              <div key={memory.id} className="relative aspect-square rounded-lg overflow-hidden">
                {memory.images[0] ? (
                  <img
                    src={memory.images[0]}
                    alt={memory.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <Image className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">Henüz hatıra yok</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentMemories;