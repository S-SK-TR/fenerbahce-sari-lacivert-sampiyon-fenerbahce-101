export interface Activity {
  id: string;
  name: string;
  date: string;
  duration: number;
  intensity: 'low' | 'medium' | 'high';
  notes?: string;
}

export interface Memory {
  id: string;
  title: string;
  date: string;
  images: string[];
  description?: string;
}

export interface Sunscreen {
  id: string;
  name: string;
  spf: number;
  waterResistant: boolean;
  expirationDate: string;
  notes?: string;
}