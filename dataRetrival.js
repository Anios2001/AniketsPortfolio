const mysql= require('mysql2/promise');
const { Connector } = require("@google-cloud/cloud-sql-connector");

let connection= null;
const MAX_CONNECTION_ATTEMPTS=2;
async function connectToDatabse(){ 
  try{
    const connector = new Connector();
    let clientOpts = await connector.getOptions({
      instanceConnectionName: "micro-spanner-404517:asia-south1:mysqlcloud",
      ipType: "PUBLIC",
    });
    let pool = await mysql.createPool({
      ...clientOpts,
      user: "aniket",
      password: "aniket9644#",
      database: "projects",
    });
    connection = await pool.getConnection();
  console.log("Conneted to the database");
  }
  catch(error){
   console.error(`Error connecting to database ${error}`);
  }
}


async function getProjects(){
  let tryToConnect=0;
  while(connection === null && tryToConnect<MAX_CONNECTION_ATTEMPTS ){
   console.log(`Trying to connect to database iteration (${tryToConnect+1})`); 
   await connectToDatabse();
   tryToConnect++;
  } 
  const query= "Select * from pro_list;"; 
   try{
     const [rows,fields] = await connection.execute(query);
     return rows;
   }
   catch(queryError){
    console.error(`Error executing: ${query} --> ${queryError}`);
    
    return "Error in query Execution";
   }
}
async function getProjectFileName(PROJECT_ID){
 // console.log(`INPUT ${PROJECT_ID}`);
 let tryToConnect=0;
 while(connection === null && tryToConnect<MAX_CONNECTION_ATTEMPTS ){
  console.log(`Trying to connect to database iteration (${tryToConnect+1})`); 
  await connectToDatabse();
  tryToConnect++;
 } 
  const query = `Select project_file_name from pro_list WHERE project_id='${PROJECT_ID}';`;
  try{
     const [rows,fields] = await connection.execute(query);
     
     return rows[0].project_file_name;
   }
   catch(queryError){
    console.error(`Error executing: ${query} --> ${queryError}`);
   
    return "Error in query Execution";
   }
}
async function getProjectDescription(PROJECT_ID){
  // console.log(`INPUT ${PROJECT_ID}`);
  let tryToConnect=0;
  while(connection === null && tryToConnect<MAX_CONNECTION_ATTEMPTS ){
   console.log(`Trying to connect to database iteration (${tryToConnect+1})`); 
   await connectToDatabse();
   tryToConnect++;
  } 
   const query = `Select desc_file from pro_list WHERE project_id='${PROJECT_ID}';`;
   try{
     const [rows,fields] = await connection.execute(query);
     
     return rows[0].desc_file;
   }
   catch(queryError){
    console.error(`Error executing: ${query} --> ${queryError}`);
   
    return "Error in query Execution";
   }
 }
async function getProjectTitle(PROJECT_ID){
  let tryToConnect=0;
  while(connection === null && tryToConnect<MAX_CONNECTION_ATTEMPTS ){
   console.log(`Trying to connect to database iteration (${tryToConnect+1})`); 
   await connectToDatabse();
   tryToConnect++;
  } 
  const query = `Select desc_file from pro_list WHERE project_id='${PROJECT_ID}';`;
   try{
     const [rows,fields] = await connection.execute(query);
     
     return rows[0].project_name;
   }
   catch(queryError){
    console.error(`Error executing: ${query} --> ${queryError}`);
   
    return "Error in query Execution";
   }
} 

module.exports = {getProjects, getProjectFileName, getProjectDescription, getProjectTitle};