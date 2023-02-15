const express = require('express');
const data = require('../data/data');
const Data = require('../data/data')
const router = express.Router()



router.post('/post',async(req,res)=>{
    const info = Data({
        name:req.body.name,
        phone:req.body.phone,
        fathername:req.body.fathername,
        email:req.body.email,
        Dob:req.body.Dob
    })
    try
    {
        const init = await info.save();
        res.status(200).json(init)
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})


router.get('/get',async(req,res)=>{
    try{
       const data=await Data.find();
       res.status(200).json({"message":data})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})

router.get('/getid/:id',async(req,res)=>
{
    try
    {
        const data=await Data.findById(req.params.id)
        res.status(200).json({"message":data})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})
router.put('/update/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const update=req.body;
        const data= await Data.findOneAndUpdate(id,update)
        res.status(200).json({"message":data})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const  del =  await data.findByIdAndDelete(id)
        res.status(200).json({"message":`${del.name} is deleted`})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})

module.exports=router