import React from 'react'
import { deleteFromCart } from '../actions/cartActions';
import {useDispatch,useSelector} from 'react-redux';
export default function CartPage() {
  const cartstate=useSelector(state=>state.cartReducer)
  const cartItems=cartstate.cartItems
  var Total=cartItems.reduce((x,item)=> x+item.price,0)
  const dispatch=useDispatch()
  return (
    <div className='CARTPAGE'>
        <div className='row justify-content-center'>
         <div className='col-md-6'>
            <h2 style={{fontSize:'40px'}}>MY CART</h2>
            {cartItems.map(item=>{
              return <div className='flex-container'>
                 <div className='text-left m-1 w-100'>
                   <h1>{item.name}[{item.varient}]</h1>
                   <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                  <h1>Quantity : <b>{item.quantity}</b></h1>
                  <hr/>
                 </div>
                 <div className='m-1 w-100'>
                   <img src={item.image} style={{height:'80px', weight:'80px'}}></img>
                 </div>
                 <div className='m-1 w-100'>
                   <i className='fa fa-trash mt-5' area-hidden='true' onClick={()=>dispatch(deleteFromCart(item))}></i>
                 </div>
                </div>
            })}
            
         </div>
         <div className='col-md-4'>
           <h2 style={{fontSize:'45px'}}>Total : {Total} /-</h2>
           <button className='btn text-right'>PAY NOW</button>
         </div>

        </div>
    </div>
  )
}
