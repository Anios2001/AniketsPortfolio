const mysql= require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"server_cmp_1",
    database:"projects"
});

connection.connect((error)=>{
    if(error)
     console.err(error);
    console.log("Connection Success");
});
function getProjects(){
   const query= "Select * from pro_list;"; 
   return new Promise(function (resolve,reject){
      connection.query(query, function(error,results){
        //Error string on failiure
        if(error)
         reject(`Error executing query :${query}:`);
        //Array of database objects {project_id:String,project_name:String,languages_used:String,
        //project_file_name:String,short_desc:String,desc_file:String}
        // console.log(results.constructor);
        resolve(results);
      });
   });
}
function getProjectFileName(PROJECT_ID){
 // console.log(`INPUT ${PROJECT_ID}`);
  const query = `Select project_file_name from pro_list WHERE project_id='${PROJECT_ID}';`;
  return new Promise(function (resolve, reject){
    connection.query(query, function(error,results){
      if(error)
       reject(`Error executing query: ${query}`);
      console.log(results);
      resolve(results[0].project_file_name);
    })
  });
}
function getProjectDescription(PROJECT_ID){
  // console.log(`INPUT ${PROJECT_ID}`);
   const query = `Select desc_file from pro_list WHERE project_id='${PROJECT_ID}';`;
   return new Promise(function (resolve, reject){
     connection.query(query, function(error,results){
       if(error)
        reject(`Error executing query: ${query}`);
       //console.log(results);
       resolve(results[0].desc_file);
     })
   });
 }
function getProjectTitle(PROJECT_ID){
  const query = `Select project_name from pro_list WHERE project_id='${PROJECT_ID}';`;
   return new Promise(function (resolve, reject){
     connection.query(query, function(error,results){
       if(error)
        reject(`Error executing query: ${query}`);
       //console.log(results);
       resolve(results[0].project_name);
     })
   });
} 
module.exports = {getProjects, getProjectFileName, getProjectDescription, getProjectTitle};