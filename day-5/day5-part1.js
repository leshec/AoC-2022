const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    let data = contents.split(/\r?\n/).filter(Boolean);
    return data; 
}

data = syncReadFile('./input.txt');

/*
    [V] [G]             [H]        
[Z] [H] [Z]         [T] [S]        
[P] [D] [F]         [B] [V] [Q]    
[B] [M] [V] [N]     [F] [D] [N]    
[Q] [Q] [D] [F]     [Z] [Z] [P] [M]
[M] [Z] [R] [D] [Q] [V] [T] [F] [R]
[D] [L] [H] [G] [F] [Q] [M] [G] [W]
[N] [C] [Q] [H] [N] [D] [Q] [M] [B]
 1   2   3   4   5   6   7   8   9 
 */
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
    
        let iter = parseInt(line[1]);
        let source = parseInt(line[3]); 
        let destination = parseInt(line[5]);
              
        for(let i = 0; i < iter; i++){
                arr[destination-1].push(arr[source-1].pop());
            }
       }); 


for(let i=0; i < arr.length; i++){

    answer.push(arr[i].pop());
}

console.log("answer is: ", answer);



