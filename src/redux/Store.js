import {configureStore} from '@reduxjs/toolkit'
 import cartReducer from './Slices/Slice.js'
export const store = configureStore (
    {
        cart  :cartReducer ,
     }
)