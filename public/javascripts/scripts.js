//FrontEnd JavaScript 

const socket= io();
function extractInput(view_id){
    const element_ref= document.getElementById(view_id);
    if(element_ref!=null)
     return element_ref.value;
    else
     return '';
}
function runcode(PRG_ID){
    const REQUEST= new Map();
   
    REQUEST.set('PRG_NM',PRG_ID);
    REQUEST.set('ARGS',extractInput('input_args'));
    const jsonData= JSON.stringify(Object.fromEntries(REQUEST));
    console.log("DATA" + jsonData);
    socket.emit('runner',jsonData);
}
function runStaticCode(PRG_ID){
    const REQUEST= new Map();
    REQUEST.set('PRG_NM',PRG_ID);
    REQUEST.set('ARGS','');
    const jsonData= JSON.stringify(Object.fromEntries(REQUEST));
    console.log(jsonData);
    socket.emit('get_data',jsonData);
}
function buildFetchAndExecute(PROJECT_ID){
    
    const form= document.getElementById('dataForm');
    console.log(`FORM CONTENT ${form.elements['project_id'].value}`)
    form.submit();
   
}
socket.on('server_response', (message) => {
    //console.log(message);
    startTyping(document.getElementById('code_box'),message);
  });
socket.on('enter_heading',(title)=>{
    document.getElementById('side_container').innerText= title;
});  
socket.on('constant_output',(message)=>{
    //console.log(message);
    document.getElementById('database_output').innerText= message['DESC'];
    document.getElementById('heading').innerText= message['NAME'];
});  



