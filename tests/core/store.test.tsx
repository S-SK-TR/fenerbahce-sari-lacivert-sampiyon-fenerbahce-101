import { useStore } from '../../src/core/store';

describe('Zustand Store', () => {
  it('initializes with dark theme', () => {
    const { theme } = useStore.getState();
    expect(theme).toBe('dark');
  });

  it('toggles theme correctly', () => {
    const { setTheme } = useStore.getState();
    setTheme('light');
    expect(useStore.getState().theme).toBe('light');
  });

  it('adds and deletes activities', () => {
    const { addActivity, deleteActivity } = useStore.getState();
    const testActivity = { id: '1', name: 'Test Activity', date: '2023-01-01', duration: 60, intensity: 'medium' };

    addActivity(testActivity);
    expect(useStore.getState().activities).toContainEqual(testActivity);

    deleteActivity('1');
    expect(useStore.getState().activities).not.toContainEqual(testActivity);
  });

  it('updates activities correctly', () => {
    const { addActivity, updateActivity } = useStore.getState();
    const testActivity = { id: '2', name: 'Test Activity', date: '2023-01-01', duration: 60, intensity: 'medium' };

    addActivity(testActivity);
    updateActivity('2', { name: 'Updated Activity' });
    expect(useStore.getState().activities[0].name).toBe('Updated Activity');
  });
});