

let answer = 0; 

let score = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
}

//I have no idea how this line work
//I just grabbed it off internet to get a file handle
//look up best way to do this
const {readFileSync, promises: fsPromises} = require('fs');

// read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const data = contents.split(/\r?\n/);

    return data;

}

data = syncReadFile('./input.txt');

data.forEach( s => { 
     // ... do something with s ...
        if(s in score){
            //console.log(score[s]); 
            answer += score[s];

        }
} );

console.log(answer);
