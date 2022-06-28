const mongoose = require('mongoose')

const loginschema =  new mongoose.Schema({

  
    email:{
        type: String,
        // required:true,
    
    },
    password:{
        type: String,
        // required:true,
    
    },
}) 



const user =mongoose.model('adminlogin',loginschema)
module.exports = user