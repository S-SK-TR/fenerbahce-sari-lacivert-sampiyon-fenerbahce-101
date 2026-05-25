import { cn } from '../../src/lib/utils';

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('handles conditional classes', () => {
    expect(cn('bg-red-500', false && 'text-white')).toBe('bg-red-500');
  });
});