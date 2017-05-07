/**
 * Name: parseAllDamageLogs
 * Created by chris on 5/6/2017.
 * Description:
 */
import parseDamageLog from './parseDamageLog';
import { readFiles } from './logReader';

const parseAllDamageLogs = (folder) => {
  readFiles(folder)
    .then(files => {
      files.forEach((item, index) => {
        console.log(parseDamageLog(item.contents)[0]);
      });
    })
    .catch(e => {
      console.log(e);
    });
};

parseAllDamageLogs('C:/Users/chris/Downloads/damageLogs');
export default parseAllDamageLogs;
