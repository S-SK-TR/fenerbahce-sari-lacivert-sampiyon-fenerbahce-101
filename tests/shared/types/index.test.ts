import { Activity, Memory, Sunscreen } from '../../src/shared/types';

describe('Type Definitions', () => {
  it('should validate Activity type', () => {
    const activity: Activity = {
      id: '1',
      name: 'Test Activity',
      date: '2023-01-01',
      duration: 60,
      intensity: 'medium'
    };
    expect(activity).toBeDefined();
  });

  it('should validate Memory type', () => {
    const memory: Memory = {
      id: '1',
      title: 'Test Memory',
      date: '2023-01-01',
      images: ['image1.jpg']
    };
    expect(memory).toBeDefined();
  });

  it('should validate Sunscreen type', () => {
    const sunscreen: Sunscreen = {
      id: '1',
      name: 'Test Sunscreen',
      spf: 30,
      waterResistant: true,
      expirationDate: '2024-01-01'
    };
    expect(sunscreen).toBeDefined();
  });
});