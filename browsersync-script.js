let fs = require('fs');
let spawn = require('child_process').spawn;
let path = require('path');
let yaml = require('js-yaml');
var browserSync = require('browser-sync').create();

let configFilePath = path.join(process.cwd(), 'config.yml');
let shopifyConfig = shopifyData(configFilePath);



//const browserSyncProcess = spawn('browser-sync', ['https://' + shopifyConfig.store + '/?preview_theme_id=' + shopifyConfig.theme_id, '/tmp/somefile', '-w']);
//browserSyncProcess.stdout.on('data', function (buffer) {
//    process.stdout.write(buffer);
//});

var bs = require("browser-sync").create();
// Start a Browsersync proxy
bs.init(
  {
    proxy: 'https://' + shopifyConfig.store + '/?preview_theme_id=' + shopifyConfig.theme_id,
    files: ["/tmp/somefile", "assets/index.js", "assets/styles.css"],
    snippetOptions: {
      rule: {
          match: /<\/body>/i,
          fn: function (snippet, match) {
              return snippet + match;
          }
      }
  }
  }
 );




//-----

function shopifyData(configPath) {
  let config;

  try {
    config = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
  } catch (e) {
    return null;
  }

  return {
    store: config.development.store,
    theme_id: config.development.theme_id
  };
}