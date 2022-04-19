export const addToCart=(cake,quantity,varient)=>(dispatch,getstate)=>{
    var cartItem={
        name:cake.name,
        _id:cake._id,
        image:cake.image,
        varient:varient,
        quantity:quantity,
        prices:cake.prices,
        price:cake.prices[0][varient]*quantity

    }

    dispatch({type:'ADD_TO_CART',payload:cartItem})
    const cartItems=getstate().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

export const deleteFromCart=(cake)=>(dispatch,getstate)=>{
    dispatch({type:'DELETE_FROM_CART',payload:cake})
    const cartItems=getstate().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}