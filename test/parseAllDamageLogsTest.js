/* global it, describe, before, after, expect */
import { expect } from 'chai';
import parseAllDamageLogs from '../src/parseAllDamageLogs';


describe('parseAllDamageLogs', () => {

  it('parseAll works on the correct file', () => {
    return parseAllDamageLogs('./test')
      .then(res => {
        expect(res[0][0].path).to.equal('damagelog.txt');
      });
  });

  it('parseAll returns the correct first log object', () => {
    return parseAllDamageLogs('./test')
      .then(res => {
        expect(res[0][0]).to.deep.equal({ path: 'damagelog.txt',
          type: 'explosion',
          time: '01:24:02.567',
          targetSteamID: '76561197989298229',
          targetName: 'Ritter',
          damage: '2.00',
          kill: '0',
          shooterSteamID: '76561198344728053',
          shooterName: 'Bounce',
          weapon: 'hk45' });
      });
  });


});
