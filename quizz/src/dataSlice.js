import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const scoreSlice = createSlice({
    name:"scoreSlice",
    initialState,
    reducers:{
        incrementByAnswers:(state,action) =>{
            state.value += action.payload
        },
    }
})

export const {incrementByAnswers} = scoreSlice.actions;
export default scoreSlice.reducer;