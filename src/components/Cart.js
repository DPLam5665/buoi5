import React, {useEffect} from 'react'
import {useDispatch, useSelector} from'react-redux'
import {fetchProducts} from'../redux/ProductsSlice'
import { deleteProduct, clearCart} from '../redux/cartSlice'

    const Cart = () =>{
        const dispatch = useDispatch()
        const {product} = useSelector(state=>state.cart) 


        return (
            <div>
                <h2>Cart</h2>
                {product.length=== 0 && <p>Your cart is empty</p>}
                {
                    product.map(item => (
                        <div key={item.id}>
                            <h3>{item.product}</h3>
                            <p>{item.price}</p>
                            <button onClick={()=>dispatch(deleteProduct(product))}>Remove</button>
                        </div>
                    ))
                }
                {product.length > 0 &&(
                    <button onClick={()=>dispatch(clearCart())}>Clear cart</button>
                )}
            </div>
          )
    }
export default Cart
