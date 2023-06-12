const express = require('express');
const mongose  = require("mongoose")

const list = require('./model/product')
const auth = require('./routes/Auth')

const app = express()

const mongo = 'mongodb+srv://Rayala:prasad333@prasad.lterq.mongodb.net/Ecommerce'

mongose.connect(mongo).then((res)=>{
    console.log('db-connect')
},(err)=>{
    console.log(err.message,"db connection fail")
})



app.use('/',auth)


app.listen(8080,()=>{
    console.log("server running port on http://localhost:8080")
})