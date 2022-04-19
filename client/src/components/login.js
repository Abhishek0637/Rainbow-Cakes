import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser } from "../actions/userActions";

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  function LoginUser() {
    console.log(user);
    dispatch(loginUser(user));
  }

  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <div className="LOGIN">
      <div className="row justify-content-center mt-5">
        <h2 className="m-2 text-center" style={{ fontSize: "40px" }}>
          {" "}
          LOGIN{" "}
        </h2>
        <div className="col-md-5 mt-5 text-left">
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

          <button
            type="submit"
            onClick={LoginUser}
            className="mt-3 text-center btn"
          >
            Login
          </button>

          <a className="nav-link Register" style={{ color: "brown",textAlign:'right' }} href="/Register">
             ...(Register Now)
          </a>
        </div>
      </div>
    </div>
  );
}
