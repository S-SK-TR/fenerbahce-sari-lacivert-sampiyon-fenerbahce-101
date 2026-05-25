import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Play, Pause, Volume2, VolumeX, Music, Plus } from 'lucide-react';

const SoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentSound, setCurrentSound] = useState('Okyanus');
  const audioRef = useRef<HTMLAudioElement>(null);

  const sounds = [
    { name: 'Okyanus', src: 'https://example.com/sounds/ocean.mp3' },
    { name: 'Orman', src: 'https://example.com/sounds/forest.mp3' },
    { name: 'Yağmur', src: 'https://example.com/sounds/rain.mp3' },
    { name: 'Kamp Ateşi', src: 'https://example.com/sounds/campfire.mp3' }
  ];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const changeSound = (soundName: string) => {
    setCurrentSound(soundName);
    if (audioRef.current) {
      audioRef.current.src = sounds.find(s => s.name === soundName)?.src || '';
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Ses Kapsamı</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              <Music className="w-12 h-12 text-[var(--brand-500)]" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Şu an çalan:</span>
              <span className="text-sm text-[var(--brand-500)]">{currentSound}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={togglePlay} className="flex-1">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              <div className="flex items-center gap-2 flex-1">
                {volume > 0 ? (
                  <Volume2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <VolumeX className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={changeVolume}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Sesler</span>
              <Button variant="ghost" size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Yeni Ses
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {sounds.map((sound) => (
                <Button
                  key={sound.name}
                  variant={currentSound === sound.name ? 'default' : 'outline'}
                  className="justify-start h-auto py-2"
                  onClick={() => changeSound(sound.name)}
                >
                  <Music className="w-4 h-4 mr-2" />
                  {sound.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <audio ref={audioRef} loop />
      </CardContent>
    </Card>
  );
};

export default SoundPlayer;