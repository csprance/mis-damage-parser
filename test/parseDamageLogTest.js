/* global it, describe, before, after, expect */
import parseDamageLog from '../src/parseDamageLog';
import mockDamageLog from './mockDamageLog';

describe('parseDamageLog', () => {

  const results = parseDamageLog(mockDamageLog);

  it('normal test', () => {
    expect(results[42].shooterName).toBe('KrisPbacon');
  });

  it('weird spaces', () => {
    expect(results[43].shooterName).toBe('V            306');
  });

  it('projectile', () => {
    expect(results[85].projectile).toBe('ammo_5_56x45');
  });

  it('weird characters', () => {
    expect(results[0].shooterName).toBe('Survivor(1)');
  });

});
