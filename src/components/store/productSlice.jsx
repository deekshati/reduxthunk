import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../../utils/StatusCode";


/*in case of thunk we cannot keep state empty we have to keep some object as
we are making api call and api call may not return data but will return something that can be error or anything*/

const initialState={
    data:[],
    status:StatusCode.IDLE
};

//for thunk/for api call

//slice doesnt know how to handle async operations we will use thunk action creator.
//reducer handles synchronus tasks to handle async tasks we have extra reducers.

const productSlice=createSlice({
    name:'products',
    initialState:initialState,
    reducers:{
        /*fetchProducts:(state,action)=>{
            state.data=action.payload
        },*/
        },
        extraReducers:(builder)=>{
            //here we deal with async calls 
            builder
            .addCase(getProducts.pending, (state,action)=>{
                state.status=StatusCode.LOADING

            })
            .addCase(getProducts.fulfilled, (state,action)=>{
                state.data=action.payload;
                state.status=StatusCode.IDLE
            })
            .addCase(getProducts.rejected, (state,action)=>{
                state.status=StatusCode.ERROR
            })

        }
    
    }
);

export default productSlice.reducer;
export const {fetchProducts} = productSlice.actions;

export const getProducts=createAsyncThunk('products/get',async () => {
    const data = await fetch('https://fakestoreapi.com/products');
        const result=await data.json();
        //no dispatch just return 
        return result;

})
/*export function getProducts(){
    return async function getProductsThunk(dispatch,state){
       const data = await fetch('https://fakestoreapi.com/products');
        const result=await data.json();
        dispatch(fetchProducts(result))
        
    }
}
    */

