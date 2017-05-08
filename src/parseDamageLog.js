/**
 * Name: parseDamageLog
 * Created by chris on 5/6/2017.
 * Description:
 */
import Baby from 'babyparse';

/**
 @param data [string] the data a string from a file to parse
 @param path [string] the file they're being parsed from default=''
 @returns Object
 */
function parseDamageLog(data, path = '') {
  return Baby.parse(data).data.map(data => {
    const [others, ...log] = [...data.map(i => i.trim())];
    const [time, type, dash, steamID] = others.split(' '); // trim and split;
    log.push(steamID);
    const retObj = {
      path,
      type,
      time: time.replace('[', '').replace(']', ''),
      targetSteamID: getValue(log, 'targetSteamID'),
      targetName: getValue(log, 'targetName'),
      damage: getValue(log, 'damage'),
      kill: getValue(log, 'kill'),
    };
    // each type has different values extract only what each one needs
    switch (type) {
      case 'explosion':
        return {
          ...retObj,
          shooterSteamID: getValue(log, 'shooterSteamID'),
          shooterName: getValue(log, 'shooterName'),
          weapon: getValue(log, 'weapon'),
        };
      case 'collision':
        return {
          ...retObj,
          driverSteamID: getValue(log, 'driverSteamID'),
          driverName: getValue(log, 'driverName'),
          driverFaction: getValue(log, 'driverFaction'),
          targetFaction: getValue(log, 'targetFaction'),
          vehicle: getValue(log, 'vehicle'),
          relspeedsq: getValue(log, 'relspeedsq'),
          part: getValue(log, 'part'),
        };
      case 'hit' :
        return {
          ...retObj,
          shooterSteamID: getValue(log, 'shooterSteamID'),
          shooterName: getValue(log, 'shooterName'),
          shooterFaction: getValue(log, 'shooterFaction'),
          targetFaction: getValue(log, 'targetFaction'),
          weapon: getValue(log, 'weapon'),
          distance: getValue(log, 'distance'),
          melee: getValue(log, 'melee'),
          headshot: getValue(log, 'headshot'),
          part: getValue(log, 'part'),
          hitType: getValue(log, 'hitType'),
          projectile: getValue(log, 'projectile'),
        };
      default:
        return {
          ...log
        };
    }
  });
}


function getValue(log, key) {
  let retVal = '';
  log.forEach(item => {
    if (item !== undefined) {
      const value = item.replace(`${key}:`, '');
      if (value.length !== item.length) {
        retVal = stripQ(value);
      }
    }
  });
  return retVal;
}

function stripQ(value) {
  return value.replace(/"/g, '');
}

export default parseDamageLog;
