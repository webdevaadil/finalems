const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/adminlogin");
const Project = require("./models/projectschema");
const Employee = require("./models/employeeschema");
const Assign = require("./models/assignproject")
const mongo = require("mongodb");
const cors = require("cors");
const app = express();
const path  =require("path")
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"./client/build")))
const PORT = process.env.PORT || 4000;



mongoose.connect("mongodb+srv://XGq6fu1bbsbLkTiE:qcSjRRqcXdtqiGv5@cluster0.2ctmc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("connection succesfull")
}).catch((error)=>{
  console.log("Error:",error)
})
app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.post("/adduser", (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  user.save();
  return res.json({ success: "data Submitted Succesfully" });
});

app.post("/addproject", async(req, res) => {
  const project = new Project({
    name: req.body.name,
    projectname: req.body.projectname,
    description: req.body.description,
    password: req.body.password,
  });
  project.save();
  return res.json({ success: "project Data Added" });
});

  app.post("/addemployee", async(req, res) => {
    const employee = new Employee({
      name: req.body.name,
      designation: req.body.designation,
      cno: req.body.cno,
      eid: req.body.eid,
      gender: req.body.gender,
      password: req.body.password,
    });
    employee.save();
    return res.json({success:"data added succesfully"})
  });
  
  app.post("/updateproject",async(req,res)=>{
    let updateid = req.body._id;
    let updatedata = await Project.findByIdAndUpdate(updateid,{   name:req.body.name,    projectname:req.body.projectname,  description:req.body.description, password:req.body.password })
    res.json({success:"updated"})
  })
  
  app.get("/login", async (req, res) => {
  const data = await User.find();
  console.log(data);
  return res.json(data);
});

app.get("/showproject", async (req, res) => {
  const projectdata = await Project.find();
  console.log(projectdata);
  return res.json(projectdata);
});


app.get("/deleteproject/:id", async (req, res) => {
  let uid = req.params.id;
  let deletedata = await Project.deleteOne({ _id: new mongo.ObjectId(uid) });
  return res.json(deletedata);
});

app.get("/editproject/:id",async(req,res)=>{
  let id = req.params.id;
  let editdata  = await Project.findById({_id:id})
  return res.json(editdata)
})


app.get("/showemployee",async(req,res)=>{
  let employeedata = await Employee.find()
  return res.json(employeedata)
})
app.get("/deletemployee/:id",async(req,res)=>{
 let uid = req.params.id;
  let deletedata = await Employee.deleteOne({_id:new mongo.ObjectId(uid)})
  return res.json(deletedata)
})

app.get("/editemployee/:id",async(req,res)=>{
  let editid = req.params.id;
  let editdata = await Employee.findById({_id:editid})
  return res.json(editdata)

})

app.post("/updatemployee",async(req,res)=>{
  let updateid =  req.body._id
  let updatedata = await Employee.findByIdAndUpdate(updateid,{ name: req.body.name,
    designation: req.body.designation,
    cno: req.body.cno, 
    eid: req.body.eid,
    gender: req.body.gender,
    password: req.body.password,})
    return res.json({success:"updated"})
})

app.post("/assign",async(req,res)=>{
  console.log(req.body.deadline)
 const assigned = await new Assign({
   projectname:req.body.projectname,
   assignto:req.body.assignto,
   description:req.body.description,
   deadline:req.body.deadline,
 })

 assigned.save();
 return res.json("sucess")

})

app.get("/showassign",async(req,res)=>{
  let data = await Assign.find()
  return res.json(data);
})

app.get("/deleteassign/:id",async(req,res)=>{
  let id = req.params.id
  let data = await Assign.deleteOne({_id:new mongo.ObjectId(id)})
  return res.json(data)
})

app.get("/editassign/:id",async(req,res)=>{
  let editid = req.params.id
  let data =await Assign.findById({_id:editid})
  return res.json(data)
})

app.post("/updateassign",async(req,res)=>{
  let uid =req.body._id
  let data =await Assign.findByIdAndUpdate(uid,{
    projectname:req.body.projectname,
    assignto:req.body.assignto,
    description:req.body.description,
    deadline:req.body.date
  })
  return res.json({success:"success"})
})


app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"./client/build/index.html"))
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
});
