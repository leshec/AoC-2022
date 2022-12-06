//Globals
let biggest = new Array();

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const data = contents.split(/\r?\n/);

    sum(data);
}

syncReadFile('./input.txt');

function sum(data){
    let sum = 0;
    for(let i=0; i < data.length; i++){

        if(data[i]==""){
             biggest.push(sum);
            sum = 0;
        }
        else {
            value = parseInt(data[i]); 
            sum += value;
             }
    }
    biggest.sort(function(a, b){return b - a});
    return console.log(biggest[0]+biggest[1]+biggest[2]);
}


