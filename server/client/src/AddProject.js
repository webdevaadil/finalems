import axios from "axios";
import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const AddProject = () => {
  const [inputvalues, setInputvalues] = useState({
    name: "",
    projectname: "",
    description: "",
    password: "",
  });
  const [inputdata, setInputdata] = useState([]);
  const [EditInputdata, setEditInputdata] = useState({
    name: "",
    projectname: "",
    description: "",
    password: "",
  });
  const[show,setShow] = useState(true)

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setInputvalues({ ...inputvalues, [name]: value });
    console.log(inputvalues);
  };

  const SubmitData = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/addproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputvalues),
    }).then((error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log("data submitted succesfully");
      }
    });

    setInputvalues({
      name: "",
      projectname: "",
      description: "",
      password: "",
    });
  };
  
  const DeleteProject = async (id) => {
    let res = await fetch(`http://localhost:4000/deleteproject/${id}`);
    let data = await res.json();
    // ShowProject();
  };

  axios.get("http://localhost:4000/showproject").then((Response)=>{
    let data = Response.data;
    setInputdata(data)
  })

  // const ShowProject = async () => {
  //   setShow(!show)
 
  //   // let result = await fetch("http://localhost:4000/showproject");
  //   // let data = await result.json();
  //   // setInputdata(data);
  //   console.log(inputdata);
  // };


  const EditInputHandle = (event) => {
    const { name, value } = event.target;
    setEditInputdata({ ...EditInputdata, [name]: value });
    console.log(EditInputdata);
  };

  const EditProject = async (id) => {
    console.log(id);
    let res = await fetch(`http://localhost:4000/editproject/${id}`);
    let data = await res.json();
    setEditInputdata(data);
    console.log(EditInputdata);
  };
  
  const update = async (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/updateproject", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(EditInputdata),
    }).then((res) => {
      res.json("data updated succesfully");
    });
    
    // ShowProject();
    console.log(EditInputdata);
    setEditInputdata({
      name: "",
      projectname: "",
      description: "",
      password: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="wrapper wrap col-md-6">
          <div className="card top">
            <form
              onSubmit={SubmitData}
              method="post"
              className="d-flex flex-column mt-5"
            >
              <div className="h3 text-center text-white"> Add Project</div>
              <div className="d-flex align-items-center input-field mb-2">
                <span className="fa fa-user p-2"></span>
                <input
                  onChange={InputHandler}
                  name="name"
                  type="text"
                  placeholder="name"
                  required
                  className="form-control "
                  id="name"
                  value={inputvalues.name}
                />
              </div>
              <div className="d-flex align-items-center input-field mb-2">
                <span className="fa fa-lock p-2"></span>
                <input
                  onChange={InputHandler}
                  name="projectname"
                  type="text"
                  placeholder="project name"
                  required
                  className="form-control"
                  id="projectname"
                  value={inputvalues.projectname}
                />
              </div>
              <div className="d-flex align-items-center input-field mb-2">
                <span className="fa fa-lock p-2"></span>
                <input
                  onChange={InputHandler}
                  name="description"
                  type="text"
                  placeholder="project description"
                  required
                  className="form-control"
                  id="pdesc"
                  value={inputvalues.description}
                />
              </div>
              <div className="d-flex align-items-center input-field mb-2">
                <span className="fa fa-lock p-2"></span>
                <input
                  onChange={InputHandler}
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="form-control"
                  id="password"
                  value={inputvalues.password}
                />
                <a className="btn" id="pw-btn">
                  <span className="fa fa-eye-slash"></span>
                </a>
              </div>

              <div className="my-3">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <form action="" method="post" onSubmit={update}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                      id="ename"
                      name="name"
                      onChange={EditInputHandle}
                      value={EditInputdata.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Projectname:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      id="epname"
                      name="projectname"
                      onChange={EditInputHandle}
                      value={EditInputdata.projectname}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">description:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      id="epdesc"
                      name="description"
                      onChange={EditInputHandle}
                      value={EditInputdata.description}
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
                      onChange={EditInputHandle}
                      value={EditInputdata.password}
                    />
                  </div>
                  <div className="form-group form-check"></div>
                  <button type="submit" className="btn btn-primary">
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
          <button onClick={()=>setShow(!show)} className="btn btn-warning">
            {show?"Hide detail":"Show Details"}
          </button>
         <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>project name</th>
                <th>description</th>
                <th>password</th>
                <th>Actions</th>
              </tr>
            </thead>
            {show&&   <tbody>
              {inputdata.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{items.name}</td>
                    <td>{items.projectname}</td>
                    <td>{items.description}</td>
                    <td>{items.password}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          DeleteProject(items._id);
                        }}
                      >
                        Delete
                      </button>{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          EditProject(items._id);
                        }}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>}
          </table>
         
        </div>
      </div>
    </>
  );
};
