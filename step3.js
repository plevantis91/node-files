const fs = require('fs');
const process = require('process');
const axios = require('axios');


function createText (text,output = null){
    if (output){
        fs.writeFile(output,text,'utf8',function(err){
            if (err){
                console.error(err);
                process.exit(1);
            }
        });
    }
    else{
        console.log(text);
    }
}

function cat(path,output = null){
    fs.readFile(path,'utf8',function(err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        else{
            createText(data,output);
        }
    });
}

async function webCat(url,output = null){
    try{
        let response = await axios.get(url);
        createText(response.data,output);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

let path;
let output;

if (process.argv[2] === '--out'){
    output = process.argv[3];
    path = process.argv[4];
}
else{
    path = process.argv[2];
}

if (path.slice(0,4) === 'http'){
    webCat(path,output);
}
else{
    cat(path,output);
}


