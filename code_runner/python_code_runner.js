//level 1
//listen for incoming connections on a port using socket.io 
//once connected then start listening for a request from the client 
//level 2 entered 
//satisfy the request 
  // extract the strings naming PROGRAM_NAME ARGUMENTS 
  //use the strings to compute the answer
    //level 3 
    //get the exact name for the program using the static Map mantained using word processor 
  //return to level 2
    //level 4
    //run the python program recieve answer
  //compose the string in the response format
//return to level 1   
//send the response  
//get a link to a file containing the map 
//read the map
//search for appropiate file according to the argument recieved
const { spawn } = require('child_process');
function runPythonScript(file_name,args){
//Built a command structure 
  const command = 'C:\\Python27\\python.exe';
  const final_url= "code repository/" + file_name ;
  const ARGS= args.split('-');
  const newARGS= ARGS.map((data)=>{
     return (data=="")?data:''.concat('-',data).trim();
  });
  // console.log(newARGS);
  const FINAL_ARGUMENT = [final_url];
  newARGS.forEach(element => {
    FINAL_ARGUMENT.push(element);  
  });
  
  // console.log(FINAL_ARGUMENT);
//use a Promise to return to the calling function 
    return new Promise((resolve, reject)=>{
      const childProcess = spawn(command, FINAL_ARGUMENT);
      let output='';
      childProcess.stdout.on('data', (data) => {
        
        output+=data;
      });
      
      childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        reject(data);
      });
      
      childProcess.on('close', (code) => {
       // output = output.replace(/\n/g, '<br>')
        console.log(output);
        console.log(`Child process exited with code ${code}`);
        resolve(output);
      });
      childProcess.on('error',(error)=>{
        console.log(error);
        reject(error);
      });
    });
}
//level 4
  //run the python program recieve answer
// const { exec } = require('child_process');  
//  function runPythonScript(file_name, args){
//    return new Promise((resolve, reject)=>{
//     const command= file_name;
    
//     //args.unshift(file_name);
    
//     const process= exec(command,args);
//     console.log(command + args[0]);
//     let outPut= '';
//     //
//     process.stdout.on('data',(data)=>{
//       outPut+=data.toString();
//     });
//     process.stderr.on('data',(data)=>{
//       console.log(data);
//       reject(data);
//     });
//     process.on('close',(code)=>{
//      if(code==0){
//       console.log("Process exited successfully");
//       resolve(outPut);
//      }
//      else{
//       console.log("Process exited with code $code");
//       reject("$code");
//      }
//     });
//    });
  
// }
module.exports = {runPythonScript};
