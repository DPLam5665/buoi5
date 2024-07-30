import {configureStore} from '@reduxjs/toolkit'
// import countSlice from './countSlice'
// import userSlice from './userSlice'
// import studentSlice from './studentSlice'
// import listSlice from './listSlice'
 import ProductsSlice from './ProductsSlice'
import cartSlice from './cartSlice'


const store=configureStore({
    reducer:{
        // count:countSlice,
        // user:userSlice,
        // student:studentSlice,
        // students:listSlice,
        products:ProductsSlice,
        cart:cartSlice

    }
})
export default store