const mongoose = require('mongoose')


const ProjectSchema = {

    name:{
        type: String,
        // required:true,
    
    },

    projectname:{
        type: String,
        // required:true,
    
    },

    description:{
        type: String,
        // required:true,
    
    },
    
    password:{
  type: String,
        // required:true,
    
    },


}

const project = mongoose.model('projectschema',ProjectSchema)
module.exports = project