const fs= require('fs');

function getFileContent(file_name){
//console.log('Reached then '+file_name);    
const filePath= "./description repository/"+ file_name;
return new Promise((resolve,reject)=>{
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
             console.log(err);
             reject(`Error Reading the file at ${filePath}`);
        }
        //console.log(data);
        resolve(data);
    });
}); 
}
module.exports = {getFileContent};