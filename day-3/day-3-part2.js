let answer = 0; 

const score = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

let counter = 0;

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const data = contents.split(/\r?\n/);
    return data;
}

data = syncReadFile('./input.txt');

function duplicate(s1, s2, s3){
     for(let i in s1) {
             if(s2.includes(s1[i]) && s3.includes(s1[i])){
                    return s1[i];
                }
            }
        }

//alternative priority.slice(0,3).sum() or similar
function checker(data){
    while(counter < data.length -3){
        priority = duplicate(data[counter], data[counter+1], data[counter+2]);
        //console.log(priority);
        if(priority !==null){
            answer += score.indexOf(priority[0]);
            counter +=3;
            }
        }
    }

checker(data); 
console.log("answer is: ",answer);
