/**
 * Created by thanhhuyen on 5/4/17.
 */
const prog = require('caporal');
const fs= require('fs')
const path = require('path')
const color = require('colors')
prog
    .version('1.0.0')
    .command('Tree')
    .argument('<dir1>', 'dir1 param')
    .action(function (args) {
        let tem = '   '
        let count_folder = 0;
        let count_file = 0;
        let dir = args.dir1;
        let test2 = (dir) => {
            let files = fs.readdirSync(dir);
            for (let i = 0; i < files.length; i++) {
                let name = dir + '/' + files[i];
                if (fs.statSync(name).isFile()) {
                    count_file += 1
                } else if (fs.statSync(name).isDirectory()) {
                    count_folder += 1
                }
                if (i === files.length - 1) {
                    if (fs.statSync(name).isDirectory()) {
                        console.log(tem + '└── ' + files[i].red)
                    } else {
                        console.log(tem + '└── ' + files[i])
                    }

                } else {
                    if (fs.statSync(name).isDirectory()) {
                        console.log(tem + '├── ' + files[i].red)
                    } else {
                        console.log(tem + '├── ' + files[i])
                    }
                }
                if (fs.statSync(name).isDirectory()) {
                    if (i === files.length - 1) {
                        tem += '    '
                    } else {
                        tem += '│   '
                    }
                    test2(name)
                    tem = tem.substr(0, tem.length - 4)
                }
            }
        }
        test2(dir)
        console.log("---------------------------------------------")
        console.log(count_folder + ' directories' + ' , ' + count_file + ' files')
    });
prog.parse(process.argv);