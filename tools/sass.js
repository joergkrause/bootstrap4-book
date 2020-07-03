const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

function compileSass(file) {
  console.log('Converting file ', file)
  sass.render({
    file: `./src/sass/${file}.scss`,
    sourceMap: true,
    outFile: `./dist/css/${file}.css`
  }, function (err, result) {
    if (err) {
      console.error(err);
    }
    if (!err) {
      // No errors during the compilation, write this result on the disk
      fs.writeFile(`./dist/css/${file}.css`, result.css, (err) => {
        if (!err) {
          console.log('Done css');
        }
      });
      fs.writeFile(`./dist/css/${file}.css.map`, result.map, (err) => {
        if (!err) {
          console.log('Done map');
        }
      });
    }

  });
}

fs.readdir('./src/sass', (err, files) => {
  files
    .filter(f => /\.scss$/.test(f))
    .forEach(file => compileSass(path.basename(file, '.scss')));
});
