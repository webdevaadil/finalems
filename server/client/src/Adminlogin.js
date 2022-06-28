import React, { useEffect, useState,createContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import App from "./App"
export const Adminlogin = () => {
  let navigate  = useNavigate()
    const [inputvalue, setInputvalue] = useState({
        email:"",
        password:""
    })
    const[inputdata,setInputdata] = useState([])
  

  
    const onchangeHandler = async(event) => {
     const{name,value} =  event.target
      setInputvalue({ ...inputvalue, [name]: value });
    };

    axios
  .get( `http://localhost:4000/login`
  )
  .then((Response) => {
    const data = Response.data
    setInputdata(data)
  });
  
    const formSubmit = async(event)=>{
      event.preventDefault()

      const validate = inputdata.filter((items,index)=>{
       return items.email == inputvalue.email,items.password ==inputvalue.password
       })
 
    if(validate.length>0){
      console.log("login successfull")
      navigate("/dashboard")
    }
else{
 
  alert("invalid user")
}
    }
    const showPassword =()=>{

    }
  return (
  <>
   <div className="wrapper">
        <div className="card">
          <form
          method="post"
            onSubmit={formSubmit}
            className="d-flex flex-column mt-5"
          >
            <div className="h3 text-center text-white"> Admin Login</div>
            <div className="d-flex align-items-center input-field my-3">
              {" "}
              <span className="fa fa-user p-2"></span>{" "}
              <input
                value={inputvalue.email}
                name="email"
                type="email"
                placeholder=" Email"
                required
                className="form-control"
                id="nm"
                onChange={onchangeHandler}
              />
            </div>
            <div className="d-flex align-items-center input-field mb-4">
            
              <span className="fa fa-lock p-2"></span>{" "}
              <input
                value={inputvalue.password ?? ""}
                name="password"
                type="password"
                placeholder="Password"
                required
                className="form-control"
                id="pwd"
              onChange={onchangeHandler}
            
              />
              <a onClick={()=>{showPassword(Event)}} className="btn" id="pw-btn">
        
                <span className="fa fa-eye-slash"></span>
              </a>
            </div>

            <div className="my-3">
              
              <input  type="submit" value="Login" className="btn btn-primary" />
            </div>
         
          </form>
        </div>
      </div>
 
  </>
  )
}
