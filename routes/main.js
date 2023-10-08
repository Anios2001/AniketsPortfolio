const express= require('express');


const router= express.Router();

router.get('/',(req,res)=>{
    res.render('pages/main-page');
});
router.post('/project', (req, res) => {
    // Access the posted data from req.body
    console.log(req);
    const postData = req.body;
    console.log(`${postData} ${postData.constructor.toString()??"null or undefined"}`);
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send('Bad Request: Request body is empty or data is not correctly formatted.');
    }
  //   crown jewel of every thing 
    // const pro_id= JSON.parse(Object.getOwnPropertyNames(postData)[0]).project_id;
    
    // Respond to the client
    res.render('pages/program_page',{data : postData.project_id});
  });
  
module.exports= router;