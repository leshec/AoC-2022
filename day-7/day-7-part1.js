//globals
//
let current; //this node
let previous; //parent node
let next; //child node
const isFile = /^[0-9]/;
const isDir = 'dir';
const isRoot = '/';
const isLs = 'ls';
const cd = 'cd';
const dotDot= '..'


const {readFileSync, promises: fsPromises} = require('fs');
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const data = contents.split(/\r?\n/).filter(Boolean);
    return data;
}

data = syncReadFile('./test_data.txt');



