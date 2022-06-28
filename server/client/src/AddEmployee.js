import React,{useState} from 'react'
import { Navbar } from './Navbar'

export const AddEmployee = () => {
const[inputvalues,setInputvalues] =  useState({
  name:"",
  designation:"",
  cno:"",
  eid:"",
  gender:"",
  password:""
  
})
const[employee,setEmployee] = useState([])
const[editdata,setEditdata] = useState({
  name:"",
  designation:"",
  cno:"",
  eid:"",
  gender:"",
  password:""
})


  const inputhandler = (event)=>{
const{name,value} = event.target;
setInputvalues({...inputvalues,[name]:value})
console.log(inputvalues)
  }
  const formsubmit = async(event)=>{
    event.preventDefault()
await fetch("http://localhost:4000/addemployee",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(inputvalues)

}).then((error,data)=>{
  if(error){
    console.log(error)
  }
  else{
    console.log('data submitted succesfully')
  }
})

setInputvalues({
  name:"",
  designation:"",
  cno:"",
  eid:"",
  gender:"",
  password:""
})
  }
  const showdata = async()=>{
   
const res =await fetch("http://localhost:4000/showemployee")
const data =await res.json()
setEmployee(data)
  }

  const DeleteEmployee = async(id)=>{

    let res = await fetch(`http://localhost:4000/deletemployee/${id}`)
    let data = await res.json()
    showdata();
  }
  
  const EditInputhandle = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
    setEditdata({...editdata,[name]:value})
    console.log(editdata)
  }
  
    const EditEmployee = async(id)=>{
      let res = await fetch(`http://localhost:4000/editemployee/${id}`)
      let data = await res.json();
      setEditdata(data);
  
    }
  
  const update  = async(event)=>{
    event.preventDefault();
    await fetch("http://localhost:4000/updatemployee",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(editdata)
    }).then((res)=>{
      res.json("data updated succesfully")
    })

    showdata();
    setEditdata({
      name:"",
      designation:"",
      cno:"",
      eid:"",
      gender:"",
      password:""
    })
  }
  return (
    <>
    <Navbar/>
<div className="row">

    <div className=" wrapper wrap col-md-6 ">
      <div className="card mt-0" id="dashboard-card">
        <form 
          method="post"
          onSubmit={formsubmit}
          className="d-flex flex-column mt-5"
        >
          <div className="h3 text-center text-white"> Employee Signup</div>
          <div className="d-flex align-items-center input-field my-1">
            <span className="fa fa-user p-2"></span>
            <input
              onChange={inputhandler}
              name="name"
              type="text"
              placeholder="employee name"
              required
              className="form-control"
              id="name"
              value={inputvalues.name}
            />
          </div>
       
         
          <div className="d-flex align-items-center input-field my-1">
            <span className="fa fa-user p-2"></span>
            <input
              onChange={inputhandler}
              name="designation"
              type="text"
              placeholder="Designation"
              required
              className="form-control"
              id="designation"
              value={inputvalues.designation}
       
              />
          </div>
          <div className="d-flex align-items-center input-field my-1">
            <span className="fa fa-user p-2"></span>
            <input
              onChange={inputhandler}
              name="cno"
              type="text"
              placeholder="contact no"
              required
              className="form-control"
              id="cno"
              value={inputvalues.cno}
              />
          </div>
          <div className="d-flex align-items-center input-field my-1">
            <span className="fa fa-user p-2"></span>
            <input
              onChange={inputhandler}
              name="eid"
              type="text"
              placeholder="email id"
              required
              className="form-control"
              id="eid"
              value={inputvalues.eid}
              />
          </div>
          <div className="d-flex align-items-center input-field my-1">
            <span className="fa fa-user p-2"></span>
            <input
              onChange={inputhandler}
              name="gender"
              type="text"
              placeholder="gender"
              required
              className="form-control"
              id="gender"
            value={inputvalues.gender}
            />
          </div>
          <div className="d-flex align-items-center input-field mb-4">
            <span className="fa fa-lock p-2"></span>{" "}
            <input
              onChange={inputhandler}
              name="password"
              type="password"
              placeholder="Password"
              required
              className="form-control"
              id="pwd"
              value={inputvalues.password}
            />
            <a className="btn" id="pw-btn">
              <span className="fa fa-eye-slash"></span>
            </a>
          </div>

          <div className=" mb-1">
            <input type="submit" value="Add" className="btn btn-primary" />
          </div>
          <div className="mb-1">
        
          </div>
        </form>
      </div>
    

  </div>

 

  <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Edit Employee</h4>
            </div>
            <div className="modal-body">
              <form action="" method="post" onSubmit={update}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    id="ename"
                    name="name"
                    onChange={EditInputhandle}
                    value={editdata.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Designation:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter designation"
                    id="edeg"
                    name="designation"
                    onChange={EditInputhandle}
                    value={editdata.designation}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Contact:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter contact"
                    id="ecno"
                    name="cno"
                    onChange={EditInputhandle}
                    value={editdata.cno}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    id="eeid"
                    name="eid"
                    onChange={EditInputhandle}
                    value={editdata.eid}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Gender:</label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter email"
                    id="egender"
                    name="gender"
                    onChange={EditInputhandle}
                    value={editdata.gender}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    id="epwd"
                    name="password"
                    onChange={EditInputhandle}
                    value={editdata.password}
                  />
                </div>
                <div className="form-group form-check"></div>
                <button type="submit" className="btn btn-primary"  >
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
        
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>


<div className="col-md-6">
  <button className='btn btn-warning' onClick={showdata}>Show data</button>
 <table className="table">
   <thead>
     <tr>
       <th>name</th>
       <th>designation</th>
       <th>contact</th>
       <th>email</th>
       <th>gender</th>
       <th>password</th>
     </tr>
   </thead>

 <tbody>{
employee.map((items,index)=>{
return(

  <tr key={index}>
    <td>{items.name}</td>
    <td>{items.designation}</td>
    <td>{items.cno}</td>
    <td>{items.eid}</td>
    <td>{items.gender}</td>
    <td>{items.password}</td>
    <td><button className='btn btn-danger' onClick={()=>{DeleteEmployee(items._id)}}>delete</button>
    <button onClick={()=>{EditEmployee(items._id)}} className='btn btn-success'  data-toggle="modal" data-target="#myModal">Edit</button>
    </td>
  
  </tr>
)

})

}</tbody>
 </table>
</div>
</div>
    </>
  )
}
