/**
 * Name: parseDamageLog
 * Created by chris on 5/6/2017.
 * Description:
 */
import Baby from 'babyparse';
//TODO: Handle different types hit, collision, explosion

const parseDamageLog = (data) => {
  const config = {
    delimiter: ',',	// auto-detect
    newline: '\r\n',	// auto-detect
    quoteChar: '"'
  };

  return Baby.parse(data, config).data.map(data => {
    const dataArray = [...data.map(i => i.trim())];
    const [time, type, garbage, shooterSteamId] = data[0].split(' ');
    dataArray[0] = time.replace('[', '').replace(']', ''); // replace the bad time with the good one
    dataArray.splice(1, 0, type); // add in the type
    dataArray.splice(2, 0, shooterSteamId); // add in the shooterSteamId

    return dataArray.map(item => {
      if (typeof item === 'string') {
        return removeLabels(item);
      }
    });
  })
    .map(log => ({
      time: log[0] !== undefined ? log[0] : '',
      type: log[1] !== undefined ? log[1] : '',
      shooterSteamID: log[2] !== undefined ? log[2] : '',
      shooterName: log[3] !== undefined ? log[3] : '',
      shooterFaction: log[4] !== undefined ? log[4] : '',
      targetSteamID: log[5] !== undefined ? log[5] : '',
      targetName: log[6] !== undefined ? log[6] : '',
      targetFaction: log[7] !== undefined ? log[7] : '',
      weapon: log[8] !== undefined ? log[8] : '',
      distance: log[9] !== undefined ? log[9] : '',
      damage: log[10] !== undefined ? log[10] : '',
      melee: log[11] !== undefined ? log[11] : '',
      headshot: log[12] !== undefined ? log[12] : '',
      kill: log[13] !== undefined ? log[13] : '',
      part: log[14] !== undefined ? log[14] : '',
      hitType: log[15] !== undefined ? log[15] : '',
      projectile: log[16] !== undefined ? log[16] : '',
    }))
    .filter(i => i.time !== '');
};

function removeLabels(value) {
  return value
    .replace('shooterSteamID:', '')
    .replace('shooterName:', '')
    .replace('shooterFaction:', '')
    .replace('targetSteamID:', '')
    .replace('targetName:', '')
    .replace('targetFaction:', '')
    .replace('weapon:', '')
    .replace('distance:', '')
    .replace('damage:', '')
    .replace('damageMult:', '')
    .replace('melee:', '')
    .replace('headshot:', '')
    .replace('kill:', '')
    .replace('part:', '')
    .replace('hitType:', '')
    .replace('projectile:', '')
    .replace(/"/g, '');
}

export default parseDamageLog;
