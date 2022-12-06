let counter = 0; 

const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const data = contents.split(/\r?\n/);
    return data;
}

data = syncReadFile('./input.txt');
//data = syncReadFile('./test_data.txt');

data.forEach( s => { 

    if(s !== ""){
        const words = s.split(',');
        console.log(words);

      if( words !== undefined){
        const numbers1 = words[0].split("-");
        const numbers2 = words[1].split("-");
      
        let a = parseInt(numbers1[0]);
        let b = parseInt(numbers1[1]);
        let c = parseInt(numbers2[0]);
        let d = parseInt(numbers2[1]);

        if((c <= b) && (d >=a)){
	        counter++; 
        }
      }
        console.log("final is: ", counter);
       
    }
} );

