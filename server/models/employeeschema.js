const mongoose = require('mongoose')
const EmployeeSchema ={
     name:{
type:String,
required:true
     },
     designation:{
type:String,
required:true
     },
     cno:{
type:String,
required:true
     },
     eid:{
type:String,
required:true
     },
     gender:{
type:String,
required:true
     },
     password:{
       type:String,  
       required:true
     }
}

const employee = mongoose.model('employeeschema',EmployeeSchema)
module.exports = employee