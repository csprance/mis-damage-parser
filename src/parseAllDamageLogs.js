/**
 * Name: parseAllDamageLogs
 * Created by chris on 5/6/2017.
 * Description:
 */
import parseDamageLog from './parseDamageLog';
import { readFiles } from './logReader';

const parseAllDamageLogs = (folder) => {
  return new Promise((resolve, reject) => {

    readFiles(folder)
      .then(files => {
        resolve(files.map((item, index) => parseDamageLog(item.contents, item.filename)));
      })
      .catch(e => {
        reject(e);
      });

  });
};

export default parseAllDamageLogs;
