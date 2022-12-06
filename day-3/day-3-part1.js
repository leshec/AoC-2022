let answer = 0; 

const score = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const data = contents.split(/\r?\n/);
    return data;
}

data = syncReadFile('./input.txt');

data.forEach( s => { 
            let middle = Math.floor(s.length / 2);
            let s1 = s.substr(0, middle);
            let s2 = s.substr(middle);
            let result = duplicate(s1, s2);
            if(result !== null){
                answer += score.indexOf(result[0]);
            }
} );

function duplicate(str1, str2, str3){
        reg = new RegExp("["+ str1 +"]", 'g');
        twin = str2.match(reg);
    return twin;
}

console.log(answer);
