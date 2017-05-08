/* global it, describe, before, after, expect */
import { expect } from 'chai';
import fs from 'fs';
import parseDamageLog from '../src/parseDamageLog';


describe('parseDamageLog', () => {
  const results = parseDamageLog(fs.readFileSync('./test/damagelog.txt').toString());

  it('name test', () => {
    expect(results[3].shooterName).to.equal('Survivor');
  });


  it('explosion test', () => {
    expect(results[0]).to.deep.equal({
      path: '',
      type: 'explosion',
      time: '01:24:02.567',
      targetSteamID: '76561197989298229',
      targetName: 'Ritter',
      damage: '2.00',
      kill: '0',
      shooterSteamID: '76561198344728053',
      shooterName: 'Bounce',
      weapon: 'hk45'
    });
  });

  it('collision test', () => {
    expect(results[1].driverSteamID).to.equal('<unknown>');
  });

  it('comma in the name', () => {
    // [02:07:51.221] hit - shooterSteamID:76561198002854092, shooterName:"Survi,vor", shooterFaction:"",
    // targetSteamID:76561198002854092, targetName:"Survivor", targetFaction:"", weapon:<unknown>, distance:0.00,
    // damage:0.20*1.00x*1.00x=0.20, melee:0, headshot:0, kill:0, part:-1(unknown part), hitType:bleed, projectile:
    expect(results[2].shooterName).to.equal('Survi,vor');
  });


});
