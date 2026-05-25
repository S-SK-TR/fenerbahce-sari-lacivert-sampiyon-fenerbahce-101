import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, Calendar, Image, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Hızlı Eylemler</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="secondary"
            className="h-auto py-3 flex flex-col items-center gap-1"
            onClick={() => navigate('/planner')}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Etkinlik Ekle</span>
          </Button>
          <Button
            variant="secondary"
            className="h-auto py-3 flex flex-col items-center gap-1"
            onClick={() => navigate('/memories')}
          >
            <Image className="w-5 h-5" />
            <span className="text-xs">Hatıra Ekle</span>
          </Button>
          <Button
            variant="secondary"
            className="h-auto py-3 flex flex-col items-center gap-1"
            onClick={() => navigate('/sun-safe')}
          >
            <Sun className="w-5 h-5" />
            <span className="text-xs">Gün Koruma</span>
          </Button>
          <Button
            variant="secondary"
            className="h-auto py-3 flex flex-col items-center gap-1"
            onClick={() => navigate('/soundscapes')}
          >
            <Plus className="w-5 h-5" />
            <span className="text-xs">Ses Kapsamı</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;