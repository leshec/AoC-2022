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

path =[]; 

const {readFileSync, promises: fsPromises} = require('fs');
const { endianness } = require('os');
const { abort } = require('process');
const { rootCertificates } = require('tls');
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const data = contents.split(/\r?\n/).filter(Boolean);
    return data;
}

data = syncReadFile('./test_data.txt');

data.forEach( string =>  {
    
    line = string.split(" ");
    //console.log(line); 

});


console.log(structure);







/*
- / (dir)
  - a (dir)
    - e (dir)
      - i (file, size=584)
    - f (file, size=29116)
    - g (file, size=2557)
    - h.lst (file, size=62596)
  - b.txt (file, size=14848514)
  - c.dat (file, size=8504156)
  - d (dir)
    - j (file, size=4060174)
    - d.log (file, size=8033020)
    - d.ext (file, size=5626152)
    - k (file, size=7214296)
*/

/*
record:
current
previous 
present working directory as an array you can scale back...

****don't add a value append the value (+=)
****make the path the key, make the value the size 
e.g. key: 'root/a/e/i' value: 584
Question can I make an array the key?
Problem would need to take the key and iterate over the string. could keey it as a string and split on /.


current /
previous null
    root/14848514+8504156
    
current a
previous /
    root/a/29116, 2557, 62596

current e
previous a
    root/a/e/584
    
current a
previous e 

current /root 
previous a 

{build current, previous, new directory}
/a/d/406, 803, 562

for each string (which are the keys):
    create a dictionary with each array element, 
    if array element does not exist create it with value 0.
    add the value (+=) 

to delete a directory iterate through the strings and locate its index in the array and delete from there to the end 
*/



/*
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
*/


