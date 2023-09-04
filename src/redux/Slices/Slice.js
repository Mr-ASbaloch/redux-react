import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice (
    {
        name: 'cart', 
        initialState: [],
        reducers :{
            addItem : ( state , action)=>{
                state =[...state , action.payload]
            }
        }
    }
)
export default cartSlice.reducer