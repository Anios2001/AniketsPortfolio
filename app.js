// Server Side Script 

const express= require('express');
const path = require('path');
const http = require('http');
const socketIO= require('socket.io');
const dataSource= require('./dataRetrival.js');
const level2= require('./code_runner/satisfy_request');
const app= express();
const realTimeService= http.createServer(app);
const socket= socketIO(realTimeService);
const port= 80;

//Static Files 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
//Express WebApp Configuration code 
app.set('views','./views');
app.set('view engine','ejs');
//Register the route files 
const mainPage= require('./routes/main');

const { assert } = require('console');
 app.use('',mainPage);
 
//Listen on the port
socket.on('connection', (connectionThread) => {
  console.log('A user connected');

  connectionThread.on('runner', async (data) => {
    console.log('Received request:', data);
    try{
    const JSONObject= JSON.parse(data);
    console.log(JSONObject);
     level2.satisfyRequest(JSONObject["PRG_NM"],JSONObject["ARGS"],true).then((result)=>{
       socket.emit('server_response',result);
     }).catch((error)=>{
       socket.emit('server_response',error); 
     });
    // console.log('Generated response:', response);
    }
    catch(error){
      console.error(error);
    }
  });
  connectionThread.on('get_data', async(data)=>{
      try{
        const JSONObject= JSON.parse(data);
        level2.satisfyRequest(JSONObject["PRG_NM"],'',false).then((result)=>{
          const m= {'NAME':result.get('NAME'),'DESC':result.get('DESC')};
          socket.emit('constant_output',m);
        }).catch((error)=>{
          socket.emit('constant_output',error);
        });
      } 
      catch(e){
       console.error(e);
      }
  });
  connectionThread.on('get_all_projects',()=>{
    dataSource.getProjects().then((success)=>{
      socket.emit('project_list',success);
    },(rejected)=>{
      socket.emit('project_list',rejected);
    });
  });
  connectionThread.on('disconnect', () => {
    console.log('User disconnected');
  });
});


// app.get('/getProjectData',(request,response)=>{
//   dataSource.getProjects().then((success)=>{
//      assert(success.constructor.toString().includes("Array")!=-1);
//      response.json(success);
//   },(rejected)=>{
//      assert(rejected.constructor.toString().includes("String")!=-1);
//      response.json(rejected);
//   });
  
// });
// Not implemnted 
// app.get('/getSpecificProjectData',(request,response)=>{
//     dataSource.getProjects().then((success)=>{
     
//     },(rejected)=>{
         
//     });
// });
realTimeService.listen(port, ()=>{
    const addressOb= realTimeService.address();
    console.log(`Server is running on port: ${addressOb.address} ${addressOb.port}`);
});