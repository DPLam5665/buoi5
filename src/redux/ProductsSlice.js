import axios from 'axios'
import { createSlice, asyncThunkCreator, createAsyncThunk } from '@reduxjs/toolkit'
const url = 'https://66a07c777053166bcabb9364.mockapi.io/Products'



const initialState={
    
        product:[],
        price: 0,
        status:'start',
        error: null,
      
}
export const fetchProducts = createAsyncThunk('products/fectchProducts', async ()=>{
    const response = await axios.get(url)
    return response.data
})
const ProductsSlice=createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state,action)=>{
            state.status = 'loading'
        
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.product = action.payload
        }).addCase(fetchProducts.rejected, (state,action)=>{
            state.status = 'failed'
            state.error =action.error.message
        })
    }

})

export default ProductsSlice.reducer