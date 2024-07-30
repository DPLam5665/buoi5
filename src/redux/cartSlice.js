import {createSlice} from '@reduxjs/toolkit'

const initialState={

    product:[],
    price: 0,
    status:'idle',
    error: null,
 
}


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.product.push(action.payload)
        },
        deleteProduct: (state,action)=>{
            state.product = state.product.filter(item => item.id !== action.payload)
        },
        clearCart: (state, action)=>{
            state.product=[]
        },
        setLoading: (state)=>{
            state.status='loading'
        },
        setLoaded: (state)=>{
            state.status='succeeded'
        }
    }
})

export const{addProduct,deleteProduct,clearCart,setLoading,setLoaded} = cartSlice.actions
export default cartSlice.reducer