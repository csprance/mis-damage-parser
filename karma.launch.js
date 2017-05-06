/**
 * Name: karma.luanch
 * Created by chris on 5/6/2017.
 * Description:
 */
var opn = require('opn');
var path = require('path');
var KarmaServer = require('karma').Server;
var exit = 0;
var karmaServer = new KarmaServer({
  configFile: path.resolve('./karma.conf.js'),
}, (exitCode) => {
  exit = exitCode;
});

karmaServer.on('run_complete', (browsers, runResult) => {
  opn(path.resolve('./report/units.html'), {app: 'chrome'}).then(() => {
    process.exit(exit);
  });
});

karmaServer.start();
