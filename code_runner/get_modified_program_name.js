//level 3 
//take PROGRAM_NAME as argument and extract the corresponding actual /program_name 
//with static modifications 
// file_interface.readFile(file_path,'utf8',(err,data)=>{
//     if(err){
//         console.error('Error while reading the file '+err.message);
//         return Map();
//     }
//     console.log(data);
//     const lines= data.split('\n');
    
//     const dataMap= new Map();
//     lines.forEach((line)=>{
//         const input= line.split(' ');
//         dataMap.set(input[0],input[1]); 
//     });
//     return dataMap;
// });

const { error } = require('console');
const file_interface = require('fs');
const dataSource= require('../dataRetrival');


const file_path= 'code_runner/MAP.txt';

function getDataMap(){
 return new Promise((resolve,reject)=>{
    file_interface.readFile(file_path,'utf8',(err,data)=>{
        if(err){
            console.error('Error while reading the file '+err.message);
            reject(new Map());
        }
        console.log(data);
        const lines= data.split('\n');
        
        const dataMap= new Map();
        lines.forEach((line)=>{
            const input= line.split(' ');
            
            dataMap.set(input[0],input[1]); 
        });
        resolve(dataMap);
    });
 });
}    

module.exports= {getDataMap};
