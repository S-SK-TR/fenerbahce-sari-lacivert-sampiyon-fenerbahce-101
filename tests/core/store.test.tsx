import { useStore } from '../../src/core/store';
import { act, renderHook } from '@testing-library/react';

const mockActivity = {
  id: '1',
  name: 'Test Activity',
  date: '2023-01-01',
  duration: 60,
  intensity: 'medium'
};

const mockMemory = {
  id: '1',
  title: 'Test Memory',
  date: '2023-01-01',
  images: ['image1.jpg']
};

const mockSunscreen = {
  id: '1',
  name: 'Test Sunscreen',
  spf: 30,
  waterResistant: true,
  expirationDate: '2024-01-01'
};

describe('App Store', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.theme).toBe('dark');
    expect(result.current.activities).toEqual([]);
    expect(result.current.memories).toEqual([]);
    expect(result.current.sunscreens).toEqual([]);
  });

  it('should toggle theme', () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setTheme('light');
    });
    expect(result.current.theme).toBe('light');
  });

  it('should add, update and delete activities', () => {
    const { result } = renderHook(() => useStore());

    // Add activity
    act(() => {
      result.current.addActivity(mockActivity);
    });
    expect(result.current.activities).toHaveLength(1);

    // Update activity
    act(() => {
      result.current.updateActivity('1', { name: 'Updated Activity' });
    });
    expect(result.current.activities[0].name).toBe('Updated Activity');

    // Delete activity
    act(() => {
      result.current.deleteActivity('1');
    });
    expect(result.current.activities).toHaveLength(0);
  });

  it('should add, update and delete memories', () => {
    const { result } = renderHook(() => useStore());

    // Add memory
    act(() => {
      result.current.addMemory(mockMemory);
    });
    expect(result.current.memories).toHaveLength(1);

    // Update memory
    act(() => {
      result.current.updateMemory('1', { title: 'Updated Memory' });
    });
    expect(result.current.memories[0].title).toBe('Updated Memory');

    // Delete memory
    act(() => {
      result.current.deleteMemory('1');
    });
    expect(result.current.memories).toHaveLength(0);
  });

  it('should add, update and delete sunscreens', () => {
    const { result } = renderHook(() => useStore());

    // Add sunscreen
    act(() => {
      result.current.addSunscreen(mockSunscreen);
    });
    expect(result.current.sunscreens).toHaveLength(1);

    // Update sunscreen
    act(() => {
      result.current.updateSunscreen('1', { name: 'Updated Sunscreen' });
    });
    expect(result.current.sunscreens[0].name).toBe('Updated Sunscreen');

    // Delete sunscreen
    act(() => {
      result.current.deleteSunscreen('1');
    });
    expect(result.current.sunscreens).toHaveLength(0);
  });
});