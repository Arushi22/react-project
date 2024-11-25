import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

function Cart() {
  const cartItems = useSelector((store)=> store.cart.items);
  console.log("cart page:", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className='text-center m-14 p-4'>
      <h1 className='text-xl font-bold'>Cart page</h1>
      <div className='w-6/12 m-auto'>
      <button className=' mt-10 mb-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-600 transition duration-300'
        onClick={
          handleClearCart
        }
      >Clear cart</button>
      {cartItems.length === 0 && (
        <h1 className='font-bold text-3xl'>cart is empty..!!</h1>
      )}
        <ItemList items={cartItems} />
      </div>
    </div>
  )
}

export default Cart