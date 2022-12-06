//day5 part b
//
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    let data = contents.split(/\r?\n/).filter(Boolean);
    return data; 
}

data = syncReadFile('./input.txt');

let answer = []; 


const arr = [   ["N", "D", "M", "Q", "B", "P", "Z"],
                ["C", "L", "Z", "Q", "M", "D", "H", "V"],
                ["Q", "H", "R", "D", "V", "F", "Z", "G"],
                ["H", "G", "D", "F", "N"],
                ["N", "F", "Q"],
                ["D", "Q", "V", "Z", "F", "B", "T"],
                ["Q", "M", "T", "Z", "D", "V", "S", "H"],
                ["M", "G", "F", "P", "N", "Q"],
                ["B", "W", "R", "M"]
            ]; 


data.forEach ( s => {
                
        const line = s.split(" ");
    
        let move = parseInt(line[1]);
        let source = parseInt(line[3]); 
        let dest = parseInt(line[5]);
              
        arr[dest-1] = arr[dest-1]
                                .concat(arr[source-1]
                                .splice(arr[source-1]
                                .length-move, move));
                    }); 

for(let i=0; i < arr.length; i++){
    answer.push(arr[i].pop());
}

console.log("Part two answer is: ", answer);


//test arrays
//
/*
const arr = [   ["N", "Z"],
                ["M", "C", "D"],
                ["P"]
            ];
*/


