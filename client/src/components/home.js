import React, { useEffect, useState } from "react";
// import cakes from "../CakeData.json";
import Cake from "./cakes.js";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllCakes } from "../actions/cakeActions";
// import { getAllCakesReducer } from "../reducers/cakeReducers";

export default function Home() {
  // const [cakess, setCakes] = useState([]);
  const dispatch = useDispatch();
  const cakesstate = useSelector((state) => state.getAllCakesReducer);
  const { cakes, error, loading } = cakesstate;
  useEffect(() => {
    dispatch(getAllCakes());
  }, []);
  // console.log(cakess)
  // JSON.parse(cakess)
  return (
    <div className="Home">
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something Went Wrong</h1>
        ) : (
          cakes.map((cake) => {
            return (
              <div className="col-md-3 m-3" key={cake._id}>
                <div>
                  <Cake cake={cake} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
