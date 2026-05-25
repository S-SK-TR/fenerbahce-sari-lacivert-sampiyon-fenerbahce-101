import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'dark' | 'light';
  activities: Activity[];
  memories: Memory[];
  sunscreens: Sunscreen[];
}

interface AppActions {
  setTheme: (theme: 'dark' | 'light') => void;
  addActivity: (activity: Activity) => void;
  updateActivity: (id: string, updates: Partial<Activity>) => void;
  deleteActivity: (id: string) => void;
  addMemory: (memory: Memory) => void;
  updateMemory: (id: string, updates: Partial<Memory>) => void;
  deleteMemory: (id: string) => void;
  addSunscreen: (sunscreen: Sunscreen) => void;
  updateSunscreen: (id: string, updates: Partial<Sunscreen>) => void;
  deleteSunscreen: (id: string) => void;
}

export const useStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      theme: 'dark',
      activities: [],
      memories: [],
      sunscreens: [],

      setTheme: (theme) => set({ theme }),

      addActivity: (activity) => set((state) => ({
        activities: [...state.activities, activity]
      })),

      updateActivity: (id, updates) => set((state) => ({
        activities: state.activities.map((activity) =>
          activity.id === id ? { ...activity, ...updates } : activity
        )
      })),

      deleteActivity: (id) => set((state) => ({
        activities: state.activities.filter((activity) => activity.id !== id)
      })),

      addMemory: (memory) => set((state) => ({
        memories: [...state.memories, memory]
      })),

      updateMemory: (id, updates) => set((state) => ({
        memories: state.memories.map((memory) =>
          memory.id === id ? { ...memory, ...updates } : memory
        )
      })),

      deleteMemory: (id) => set((state) => ({
        memories: state.memories.filter((memory) => memory.id !== id)
      })),

      addSunscreen: (sunscreen) => set((state) => ({
        sunscreens: [...state.sunscreens, sunscreen]
      })),

      updateSunscreen: (id, updates) => set((state) => ({
        sunscreens: state.sunscreens.map((sunscreen) =>
          sunscreen.id === id ? { ...sunscreen, ...updates } : sunscreen
        )
      })),

      deleteSunscreen: (id) => set((state) => ({
        sunscreens: state.sunscreens.filter((sunscreen) => sunscreen.id !== id)
      }))
    }),
    {
      name: 'fenerbahce-store',
      partialize: (state) => ({ theme: state.theme })
    }
  )
);