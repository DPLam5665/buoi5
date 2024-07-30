import React, {useEffect} from 'react'
import {useDispatch, useSelector} from'react-redux'
import {fetchProducts} from'../redux/ProductsSlice'
import { addProduct } from '../redux/cartSlice'
import Cart from './Cart'

    const ProductsList = () =>{
        const dispatch = useDispatch()
        const { product, price, status, error, id} = useSelector(state=>state.products) 
        useEffect(()=>{
            if(status === 'start'){
                dispatch(fetchProducts())
            }
        },[])

        if (status === 'loading') return <div>Loading...</div>
        if (status === 'failed') return <div>{error}</div>
        return (
            <div>
                {
                    product.map(item => (
                        <div key={item.id}>
                            <h3>{item.product}</h3>
                            <p>{item.price}</p>
                            <button onClick={()=>dispatch(addProduct(item))}>Add to Cart</button>
                        </div>
                    ))
                }
                <Cart/>
            </div>
            
          )
    }
export default ProductsList

