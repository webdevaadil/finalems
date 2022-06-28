const mongoose = require('mongoose')
const AssignSchema = new mongoose.Schema({
projectname:{
    type:String
},
assignto:{
    type:String
},
description:{
    type:String
},
date:{
    type:Date,
    default:Date.now()
}

})

const assign  = mongoose.model("assignproject",AssignSchema)
module.exports = assign