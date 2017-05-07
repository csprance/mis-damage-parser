import fs from 'fs';
import path from 'path';
/**
 * Promise all
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 */
function promiseAllP(items, block) {
  const promises = [];
  items.forEach((item, index) => {
    promises.push(function getPromise(item, i) {
      return new Promise((resolve, reject) => {
        return block.apply(this, [item, index, resolve, reject]);
      });

    }(item, index));
  });
  return Promise.all(promises);
}

/**
 * read files
 * @param dirname string
 * @return Promise
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 * @see http://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
 */
export function readFiles(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, filenames) => {
      if (err) return reject(err);
      promiseAllP(filenames,
        (filename, index, resolve, reject) => {
          // TODO: only read what we want here
          fs.readFile(path.resolve(dirname, filename), 'utf-8', (err, contents) => {
            if (err) return reject(err);
            return resolve({filename, contents});
          });

        })
        .then(results => {
          return resolve(results);
        })
        .catch(error => {
          return reject(error);
        });
    });
  });
}
