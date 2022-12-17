let currentDirectory = ['root']; //this node
let directories = new Map(); 
let path ='root'; 
directories.set('root', 0);
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const data = contents.split(/\r?\n/).filter(Boolean);
    return data;
}

data = syncReadFile('./input.txt');

data.forEach( string =>  {
    
    let line = string.split(" ");

    if(line[1]=='cd'){
        //is cd /
        if(line[2]=='/'){
            while(currentDirectory.length > 1){
                currentDirectory.pop();
            }
        }
        //if cd ..
        else if(line[2]=='..'){
            currentDirectory.pop();
        }
        //is cd name
        else if(line[2] != '/' || line[2] != '..'){
            let dir = line[2]; 
            currentDirectory.push(dir);
            path = ""; 
            for(let i=0; i<currentDirectory.length; i++){
            path += currentDirectory[i];
            }
            directories.set(path, 0);
        }
    }

    else if(line[1]=='ls'){
    }

    else if(line[0]=='dir'){
    }

    else{
        //is file
        let temp = directories.get(path); 
        let anotherTemp = parseInt(line[0]);
        directories.set(path, temp += anotherTemp);
        populate(currentDirectory, anotherTemp);
    }
});

function populate(currentDirectory, anotherTemp){

let copy = [...currentDirectory];
copy.pop(); 
let tempPath = "";

 for(let i=0; i<copy.length; i++){
            tempPath += copy[i];
            tempValue = directories.get(tempPath);
            directories.set(tempPath, tempValue += anotherTemp);
            }
}

answers = []; 
for(const [key,value] of directories.entries()){
    if(value >= 5174025){
        answers.push(value); 
        console.log(key + ": " +  value); 
    }
}

console.log("the answer you are looking for is ", Math.min(...answers)); 

