const { error } = require('console');
const level3 = require('../dataRetrival');
const level4= require('./python_code_runner');
const level4_2= require('./file_reader');
//level 2 
//call level 3 and level 4 in a sequence to generatie output
 async function satisfyRequest(PROGRAM_NAME="CHE",ARGUMENTS="-c",runProgram=true){
  if(runProgram){
    const dataFileName= await level3.getProjectFileName(PROGRAM_NAME);
    console.log(`File name ${dataFileName}`);
  answer = await level4.runPythonScript(dataFileName,ARGUMENTS);
  
  return answer;
  }
  else{
  const dataFileName= await level3.getProjectDescription(PROGRAM_NAME);
  answer= await level4_2.getFileContent(dataFileName);
  const project_name= await level3.getProjectTitle(PROGRAM_NAME);
  const answer_map= new Map();
  answer_map.set('NAME',project_name);
  answer_map.set('DESC',answer);
  
  //any conversion at this stage 
  return answer_map;
  }
}

module.exports= {satisfyRequest};

