/**
 * Name: parseDamageLog
 * Created by chris on 5/6/2017.
 * Description:
 */
const shooterSteamID = /(shooterSteamID:)(.*)(shooterName:)/;
const shooterName = /(shooterName:)(.*)(targetSteamID:)/;
const targetSteamID = /(targetSteamID:)(.*)(targetName:)/;
const targetName = /(targetName:)(.*)(weapon:)/;
const weapon = /(weapon:)(.*)(distance:)/;
const distance = /(distance:)(.*)(damage:)/;
const damage = /(damage:)(.*)(damageMult:)/;
const damageMult = /(damageMult:)(.*)(melee:)/;
const melee = /(melee:)(.*)(headshot:)/;
const headshot = /(headshot:)(.*)(hitType:)/;
const hitType = /(hitType:)(.*)(projectile:)/;
const projectile = /(projectile:)(.*)/;

const parseDamageLog = (log) => {
  return log
    .split('\n') // split it by line
    .map(line => splitLineIntoValues(line)); // split each line into it's values
};

export function splitLineIntoValues(line) {
  return {
    time: getTime(line),
    shooterSteamID: getRegex(shooterSteamID, line),
    shooterName: getRegex(shooterName, line),
    targetSteamID: getRegex(targetSteamID, line),
    targetName: getRegex(targetName, line),
    weapon: getRegex(weapon, line),
    distance: getRegex(distance, line),
    damage: getRegex(damage, line),
    damageMult: getRegex(damageMult, line),
    melee: getRegex(melee, line),
    headshot: getRegex(headshot, line),
    hitType: getRegex(hitType, line),
    projectile: getRegex(projectile, line),
  };
}

function getTime(str) {
  return str.split(' ')[0];
}

function getRegex(regex, str) {
  const match = regex.exec(str);
  while (match != null) {
    return match[2].trim();
  }
}

export default parseDamageLog;
