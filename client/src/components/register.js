import React from "react";
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { registerUser } from "../actions/userActions";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });
 const dispatch=useDispatch();
  function createUser(){
      console.log(user);
      dispatch(registerUser(user))
      window.location.href='/login'
  }

  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <div className="REGISTER">
      <div className="row justify-content-center mt-5">
        <h2 className="m-2 text-center" style={{ fontSize: "40px" }}>
          {" "}
          REGISTRATION{" "}
        </h2>
        <div className="col-md-5 mt-5 text-left">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="form-control m-2"
            value={user.name}
            onChange={handleChange}
          ></input>
          <input
            name="email"
            type="text"
            placeholder="E-mail"
            className="form-control m-2"
            value={user.email}
           onChange={handleChange}
          ></input>
          <input
            name="password"
            type="text"
            placeholder="Password"
            className="form-control m-2"
            value={user.password}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="form-control  m-2"
            value={user.address}
        onChange={handleChange}
          ></input>
          <button type='submit' onClick={createUser}  className="mt-3 text-center btn"> Register</button>
        </div>
      </div>
    </div>
  );
}
