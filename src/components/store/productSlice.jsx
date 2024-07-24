import { createSlice } from "@reduxjs/toolkit";


/*in case of thunk we cannot keep state empty we have to keep some object as
we are making api call and api call may not return data but will return something that can be error or anything*/

const initialState={
    data:[],
};

//for thunk/for api call

//slice doesnt know how to handle async operations we will use thunk action creator.

const productSlice=createSlice({
    name:'products',
    initialState:initialState,
    reducers:{
        fetchProducts:(state,action)=>{
            state.data=action.payload
        }
    
    }
});

export default productSlice.reducer;
export const {fetchProducts} = productSlice.actions;

export function getProducts(){
    return async function getProductsThunk(dispatch,state){
       const data = await fetch('https://fakestoreapi.com/products');
        const result=await data.json();
        dispatch(fetchProducts(result))
        
    }
}

