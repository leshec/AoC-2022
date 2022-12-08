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


//create node
class TreeNode {
  constructor(key, value = key, type, parent = null) {
    this.key = key;
    this.value = value;
    this.type = type; 
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
   }

class Tree {
  constructor(key, value = key, type="dir") {
    this.root = new TreeNode(key, value, type);
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodeKey, key, value = key, type) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, type, node));
        return true;
      }
    }
    return false;
  }

  remove(key) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter(c => c.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }
    }

//create a tree

const tree = new Tree('/', 256, "dir");

tree.insert('/', 'a', 4546464, "dir");
tree.insert('/', 'b', 6565, "dir");
tree.insert('/', 'c', 7676, "dir");
tree.insert('c', 'd', 23, "file"); 
tree.insert('b', 'e', 69, "file");


[...tree.preOrderTraversal()].map(x => x.value);
// ['AB', 'AC', 'BC', 'BCG']

/*
tree.root.value;              // 'AB'
tree.root.hasChildren;        // true

tree.find(2).isLeaf;         // false
tree.find(5).isLeaf;        // true
tree.find(31).parent.value;  // 'BC'
*/
    
//tree.remove('b');


console.log(tree.find('/').value, " is the value of root", tree.find('/').type, " is the type");

console.log(tree.find('a').value, " is the value of a", tree.find('a').type, " is the type");
//console.log(tree.find('b').value, " is the value of b", tree.find('b').type, " is the type");
console.log(tree.find('c').value, " is the value of c", tree.find('c').type, " is the type");
console.log(tree.find('d').value, " is the value of d", tree.find('d').type, " is the type");
//console.log(tree.find('e').value, " is the value of e", tree.find('e').type, " is the type");







//think need this one for search
[...tree.postOrderTraversal()].map(x => x.value);
// ['AC', 'AB']

console.log([...tree.postOrderTraversal()].map(x => x.value));


//need to process the yield node to get values

//process those values to find the 'directories with at most 100_000' then total those
//return that answer

/*
https://www.30secondsofcode.org/articles/s/common-regexp-cheatsheet
https://www.30secondsofcode.org/articles/s/js-data-structures-tree
*/

console.log(tree);

console.log("parent of b is: ", tree.find('b').parent.key);


//parser
//
function parse(current, previous, next){
    
    current = '/';

    data.forEach( line  => { 
     // ... do something with s ...
       const parts = line.split(" "); 
                //console.log("start character is:", parts[0]);
                if(parts[0].match(isFile)){
                    console.log("file", parts[1]);
                }
                if(parts[0].match(isDir)){
                    console.log("dir", parts[1]);
                }
                if(parts[0].match(isRoot)){
                    console.log("root", parts[1]);
                } 
                if(parts[0].match(isLs)){
                    console.log("ls", parts[1]);
                } 
                if(parts[0] === 'cd' && parts[1] === '..'){
                    console.log("cd ..", parts[1]);
                } 
                if(parts[0].match(cd)){
                    console.log("cd to some need to add a field", parts[0]);
                } 
} );
    
}

parse();


