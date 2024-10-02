import {createSlice} from '@reduxjs/toolkit'
const initialState={ items:[]}
import { userService } from '../../service/userservice/userservice'

let service=new userService()


const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{

        productlist:(state,action)=>{
            state.items=action.payload
        }

    },
    extraReducers:(builder)=>{

        builder.addCase()

    }

})
export const {productlist}=productsSlice.actions

export default productsSlice.reducer;