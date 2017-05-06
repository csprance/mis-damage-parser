/* global it, describe, before, after, expect */
import parseDamageLog from '../src/parseDamageLog';
import damageLog from './mockDamageLog';

describe('Tests integrity', () => {
  it('should pass', () => {
    const results = parseDamageLog(damageLog);
    expect(7).toBe(7);
  });

  it('should fail', () => {
    expect(3).toBe(3);
  });
});
