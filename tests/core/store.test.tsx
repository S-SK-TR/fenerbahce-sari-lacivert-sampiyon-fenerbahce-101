import { useStore } from '../../src/core/store';

describe('Zustand Store', () => {
  it('initializes with default values', () => {
    const state = useStore.getState();
    expect(state.theme).toBe('dark');
    expect(state.activities).toEqual([]);
    expect(state.memories).toEqual([]);
    expect(state.sunscreens).toEqual([]);
  });

  it('sets theme correctly', () => {
    useStore.getState().setTheme('light');
    expect(useStore.getState().theme).toBe('light');
  });

  it('adds, updates, and deletes activities', () => {
    const activity = { id: '1', title: 'Test Activity', date: '2023-01-01' };

    // Add activity
    useStore.getState().addActivity(activity);
    expect(useStore.getState().activities).toHaveLength(1);

    // Update activity
    useStore.getState().updateActivity('1', { title: 'Updated Activity' });
    expect(useStore.getState().activities[0].title).toBe('Updated Activity');

    // Delete activity
    useStore.getState().deleteActivity('1');
    expect(useStore.getState().activities).toHaveLength(0);
  });

  it('adds, updates, and deletes memories', () => {
    const memory = { id: '1', title: 'Test Memory', date: '2023-01-01' };

    // Add memory
    useStore.getState().addMemory(memory);
    expect(useStore.getState().memories).toHaveLength(1);

    // Update memory
    useStore.getState().updateMemory('1', { title: 'Updated Memory' });
    expect(useStore.getState().memories[0].title).toBe('Updated Memory');

    // Delete memory
    useStore.getState().deleteMemory('1');
    expect(useStore.getState().memories).toHaveLength(0);
  });

  it('adds, updates, and deletes sunscreens', () => {
    const sunscreen = { id: '1', name: 'Test Sunscreen', spf: 50 };

    // Add sunscreen
    useStore.getState().addSunscreen(sunscreen);
    expect(useStore.getState().sunscreens).toHaveLength(1);

    // Update sunscreen
    useStore.getState().updateSunscreen('1', { name: 'Updated Sunscreen' });
    expect(useStore.getState().sunscreens[0].name).toBe('Updated Sunscreen');

    // Delete sunscreen
    useStore.getState().deleteSunscreen('1');
    expect(useStore.getState().sunscreens).toHaveLength(0);
  });
});