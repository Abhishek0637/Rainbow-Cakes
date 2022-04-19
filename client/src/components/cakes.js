import React, { useState } from "react";
import {Modal} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {addToCart} from '../actions/cartActions.js';
export default function Cakes({ cake }) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  function add_to_cart(){
      dispatch(addToCart(cake,quantity,varient))
  }
  return (
    <div  className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
      <h1> {cake.name} </h1>
      <img
        src={cake.image}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      ></img>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients 👇</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {cake.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity 👇</p>

          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1} </option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Prices :- {cake.prices[0][varient]*quantity} Rs/-</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={add_to_cart}>Add To Cart🛒</button>
        </div>
      </div>
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{cake.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img
        src={cake.image}
        className="img-fluid"
        style={{ height: "350px" }}
      ></img>

  <p>{cake.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <button variant="secondary" onClick={handleClose}>Close</button>
    
  </Modal.Footer>
 </Modal>
    </div>
  );
}
