import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { useStore } from '../../core/store';
import { Button } from '../../components/ui/Button';
import { Plus, Edit, Trash2, Image } from 'lucide-react';

const MemoryGallery = () => {
  const { memories, addMemory, updateMemory, deleteMemory } = useStore();

  const handleAddMemory = () => {
    const newMemory = {
      id: Date.now().toString(),
      title: 'Yeni Hatıra',
      date: new Date().toISOString().split('T')[0],
      images: []
    };
    addMemory(newMemory);
  };

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Hatıralar</CardTitle>
        <Button size="sm" onClick={handleAddMemory}>
          <Plus className="w-4 h-4 mr-2" />
          Yeni Hatıra
        </Button>
      </CardHeader>
      <CardContent>
        {memories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {memories.map((memory) => (
              <div key={memory.id} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden">
                  {memory.images.length > 0 ? (
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
                <div className="mt-2">
                  <h3 className="font-medium truncate">{memory.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{memory.date}</p>
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <Button variant="secondary" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="h-8 w-8" onClick={() => deleteMemory(memory.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">Henüz hatıra yok</p>
            <Button variant="outline" className="mt-4" onClick={handleAddMemory}>
              <Plus className="w-4 h-4 mr-2" />
              İlk Hatırayı Ekle
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MemoryGallery;