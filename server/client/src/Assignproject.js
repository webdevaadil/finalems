import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Assignproject = () => {
  const [assignvalues, setAssignvalues] = useState({
    projectname: "",
    assignto: "",
    description: "",
    deadline: "",
  });
  const [assignarr ,setAssignarr] = useState([])

  const[editassign,setEditassign] = useState({
    projectname:"",
    assignto:"",
    description:"",
    deadline:"",
  })
  const inputhandler = (event) => {
    const { name, value } = event.target;
    setAssignvalues({ ...assignvalues, [name]: value });
    console.log(assignvalues);
  };
  const formsubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:4000/assign", {
      method: "POST",
      body: JSON.stringify(assignvalues),
      headers: {
        "Content-Type": "Application/json",
      },
    }).then((error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }
    });
    setAssignvalues({
      projectname: "",
      assignto: "",
      description: "",
      date: "",
    });
  };

  const showdata = async () => {
    let result = await fetch("http://localhost:4000/showassign")
    let data = await result.json()
    setAssignarr(data)
    console.log(assignarr)
  };

  const DeleteAssign = async(id)=>{

    let res = await fetch(`http://localhost:4000/deleteassign/${id}`)
    let data = await res.json()
    showdata();
  }

  const EditInputhandle = (event)=>{
    const{name,value} = event.target
  setEditassign({...editassign,[name]:value})

  }
const Edit = async(id)=>{
let res = await fetch(`http://localhost:4000/editassign/${id}`)
let data = await res.json()
setEditassign(data)
}

 const update = async(event)=>{
   event.preventDefault();
await fetch("http://localhost:4000/updateassign",{
  method:'POST',
  body:JSON.stringify(editassign),
  headers:{
    "Content-Type":"Application/json"
  }
}).then((error,data)=>{
  if(error){
    console.log(error)
  }else{
    console.log(data)
  }
})
showdata()
setEditassign({
  projectname: "",
  assignto: "",
  description: "",
  date: "",
})
 }
  return (
    <>
      <Navbar />
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
                  name="projectname"
                  type="text"
                  placeholder="projectname"
                  required
                  className="form-control"
                  id="pname"
                  value={assignvalues.projectname}
                />
              </div>

              <div className="d-flex align-items-center input-field my-1">
                <span className="fa fa-user p-2"></span>
                <input
                  onChange={inputhandler}
                  name="assignto"
                  type="text"
                  placeholder="assignto"
                  required
                  className="form-control"
                  id="designation"
                  value={assignvalues.assignto}
                />
              </div>
              <div className="d-flex align-items-center input-field my-1">
                <span className="fa fa-user p-2"></span>
                <input
                  onChange={inputhandler}
                  name="description"
                  type="text"
                  placeholder="description"
                  required
                  className="form-control"
                  id="desc"
                  value={assignvalues.description}
                />
              </div>
              <div className="d-flex align-items-center input-field my-1">
                <span className="fa fa-user p-2"></span>
                <input
                  onChange={inputhandler}
                  name="deadline"
                  type="date"
                  placeholder="deadline"
                  required
                  className="form-control"
                  id="deadline"
                  value={assignvalues.deadline}
                />
              </div>

              <div className=" mb-1">
                <input type="submit" value="Add" className="btn btn-primary" />
              </div>
              <div className="mb-1"></div>
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
                  <label htmlFor="name">ProjectName:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    id="ename"
                    name="projectname"
                    onChange={EditInputhandle}
                    value={editassign.projectname ??""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">assignto:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="assignto"
                    id="eassign"
                    name="assignto"
                    onChange={EditInputhandle}
                    value={editassign.assignto ??""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">description:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    id="ecno"
                    name="description"
                    onChange={EditInputhandle}
                    value={editassign.description ??""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">deadline:</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter deadline"
                    id="deadline"
                    name="date"
                    onChange={EditInputhandle}
                    value={editassign.date ??""}
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
            <button className="btn btn-warning" onClick={showdata}>
              Show data
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th>projectname</th>
                  <th>assignto</th>
                  <th>description</th>
                  <th>deadline</th>
                 
                </tr>
              </thead>

              <tbody>{
assignarr.map((items,index)=>{
return(

  <tr key={index}>
    <td>{items.projectname}</td>
    <td>{items.assignto}</td>
    <td>{items.description}</td>
    <td>{items.date}</td>
    <td><button className='btn btn-danger' onClick={()=>{DeleteAssign(items._id)}}>delete</button>
    <button onClick={()=>{Edit(items._id)}} className='btn btn-success'  data-toggle="modal" data-target="#myModal">Edit</button>
    </td>
  
  </tr>
)

})

}</tbody>
            </table>
          </div>

</div>

    </>
  );
};
