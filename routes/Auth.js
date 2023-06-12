const router = require('express').Router()
const list = require('../model/product')

router.get('/brand' ,async(req,res)=>{
    try{
        const allbrands  = await list.find()
        return res.json(allbrands)

    }catch(err){
        console.log(err.message,'getreq error')
    }
})

router.get('/brand/:id' ,async(req,res)=>{
    try{
        const allbrands  = await list.findById(req.params.id)
        return res.json(allbrands)

    }catch(err){
        console.log(err.message,'getreq error')
    }
})

module.exports = router