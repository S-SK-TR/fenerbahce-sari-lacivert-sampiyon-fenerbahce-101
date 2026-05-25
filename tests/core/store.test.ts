import { useStore } from '../../src/core/store';
import { act } from 'react';

describe('Zustand Store', () => {
  it('should initialize with default values', () => {
    const { theme, activities, memories, sunscreens } = useStore.getState();
    expect(theme).toBe('dark');
    expect(activities).toEqual([]);
    expect(memories).toEqual([]);
    expect(sunscreens).toEqual([]);
  });

  it('should toggle theme', () => {
    act(() => {
      useStore.getState().setTheme('light');
    });
    expect(useStore.getState().theme).toBe('light');

    act(() => {
      useStore.getState().setTheme('dark');
    });
    expect(useStore.getState().theme).toBe('dark');
  });

  it('should manage activities', () => {
    const testActivity = {
      id: '1',
      name: 'Test Activity',
      date: '2023-01-01',
      duration: 60,
      intensity: 'medium'
    };

    // Add activity
    act(() => {
      useStore.getState().addActivity(testActivity);
    });
    expect(useStore.getState().activities).toHaveLength(1);

    // Update activity
    act(() => {
      useStore.getState().updateActivity('1', { name: 'Updated Activity' });
    });
    expect(useStore.getState().activities[0].name).toBe('Updated Activity');

    // Delete activity
    act(() => {
      useStore.getState().deleteActivity('1');
    });
    expect(useStore.getState().activities).toHaveLength(0);
  });

  it('should manage memories', () => {
    const testMemory = {
      id: '1',
      title: 'Test Memory',
      date: '2023-01-01',
      images: ['image1.jpg']
    };

    // Add memory
    act(() => {
      useStore.getState().addMemory(testMemory);
    });
    expect(useStore.getState().memories).toHaveLength(1);

    // Update memory
    act(() => {
      useStore.getState().updateMemory('1', { title: 'Updated Memory' });
    });
    expect(useStore.getState().memories[0].title).toBe('Updated Memory');

    // Delete memory
    act(() => {
      useStore.getState().deleteMemory('1');
    });
    expect(useStore.getState().memories).toHaveLength(0);
  });

  it('should manage sunscreens', () => {
    const testSunscreen = {
      id: '1',
      name: 'Test Sunscreen',
      spf: 50,
      waterResistant: true,
      expirationDate: '2024-01-01'
    };

    // Add sunscreen
    act(() => {
      useStore.getState().addSunscreen(testSunscreen);
    });
    expect(useStore.getState().sunscreens).toHaveLength(1);

    // Update sunscreen
    act(() => {
      useStore.getState().updateSunscreen('1', { name: 'Updated Sunscreen' });
    });
    expect(useStore.getState().sunscreens[0].name).toBe('Updated Sunscreen');

    // Delete sunscreen
    act(() => {
      useStore.getState().deleteSunscreen('1');
    });
    expect(useStore.getState().sunscreens).toHaveLength(0);
  });
});