import React, { useState } from "react";

export const Adminsignup = () => {
  const [inputdata, setInputdata] = useState({
    
    email: "",
   password:""
  });


  

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputdata({ ...inputdata, [name]: value });
    console.log(inputdata);
  };

  const formSubmit =(event) => {
    event.preventDefault();

     fetch("http://localhost:4000/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputdata),
    }).then((error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log("data submitted succesfully");
      }
    });
    console.log(inputdata)
    setInputdata({

      email: "",
      password: "",
    });
  };
  //Show Data

//   const showData = async () => {
//     let result = await fetch("http://localhost:4000/showuser");
//     let data = await result.json();
//     setUserdata(data);
//     console.log(Userdata);
//   };
//   //deleteuser
//   const DeleteData = async (id) => {
//     let res = await fetch(`http://localhost:4000/deleteuser/${id}`);
//     let data = await res.json();
//     showData();
//   };

//   //edituser

//   const EditData = async (uid) => {
//     let res = await fetch(`http://localhost:4000/edituser/${uid}`);
//     let data = await res.json();
//     console.log(data);
//     setEditInputdata(data);
//     console.log(EditInputdata);
//   };

//   const EditInputHandle = (event) => {
//     let name = event.target.name;
//     let value = event.target.value;
//     setEditInputdata({ ...EditInputdata, [name]: value });
//   };

//   const Update = async (event) => {
//     event.preventDefault();
//     fetch(`http://localhost:4000/updateuser`,{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body:JSON.stringify(EditInputdata)
//     }).then((res)=>{
//         res.json();
//      })
//      //.then((data)=>{
//     //     console.log(data.succes)
//     // })
//     showData()
//   };

  return (
    <>
      <div className="container wrapper">
      <div className="card">
        <form action="" method="post" onSubmit={formSubmit}>
    
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={inputHandler}
              value={inputdata.email}
              placeholder="Enter email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={inputdata.password}
              placeholder="Enter password"
              onChange={inputHandler}
              id="pwd"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        
      </div>
    </div>


      {/* model box */}

  

   
    </>
  );
};
