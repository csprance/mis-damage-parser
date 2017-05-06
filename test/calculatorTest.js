/* global it, describe, before, after, expect */
import damageLog from './mockDamageLog';


describe('Tests integrity', () => {
  it('should pass', () => {
    expect(7).toBe(7);
  });

  it('should fail', () => {
    expect(3).toBe(3);
  });
});
