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
        let x = parseDamageLog(item.contents);
        console.log(x);
      });
    })
    .catch(e => {
      console.log(e);
    });
};

parseAllDamageLogs('C:/Users/chris/Downloads/damageLogs');
export default parseAllDamageLogs;
