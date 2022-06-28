import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from './Navbar'
import axios from 'axios'

export const Dashboard = () => {
  const [empdata, setEmpData] = useState([]);
  const [pdata, setpData] = useState([]);

  axios.get("http://localhost:4000/showproject").then((Response) => {
    let projectdata = Response.data;
    setpData(projectdata);
  });
  axios.get("http://localhost:4000/showemployee").then((Response) => {
    let data = Response.data;
    setEmpData(data);
  });
  return (
<>
<Navbar/>

<div className="row">
        <div className="col-md-6  wrap ">
          <Link to="/addemployee">
          <div className="card" id='dash'>
            <h1 to="/addemployee" className="card-title">No.of Employees</h1>

            <div className="card-body">
              <h1>{empdata.length}</h1>
            </div>
          </div>
          </Link>
        </div>

        <div className="col-md-6 wrap " >
<Link className="font" to= "/addproject">

          <div className="card" id='dash'>
            <h1 className="card-title">No.of Projects</h1>

            <div className="card-body">
              <h1>{pdata.length}</h1>
            </div>
          </div>
</Link>
        </div>
      </div>
</>
  )
}
