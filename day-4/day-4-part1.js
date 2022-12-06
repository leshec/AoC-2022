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
        //use better names than 'words' more relevant to context
        //This is splitting clean up zones for example
        const words = s.split(',');
        //console.log(words);

      if( words !== undefined){
        const numbers1 = words[0].split("-");
        const numbers2 = words[1].split("-");
      
        //alternatively, can i destructure array [a,b] = slice(0,1)...worth it?
        let a = parseInt(numbers1[0]);
        let b = parseInt(numbers1[1]);
        let c = parseInt(numbers2[0]);
        let d = parseInt(numbers2[1]);

        if((a <= c && b >= d) || (a >= c && b <= d)){
	        counter++; 
        }
      }
       
    }
} );


        console.log("final is: ", counter);
       
