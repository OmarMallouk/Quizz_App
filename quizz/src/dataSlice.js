import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const scoreSlice = createSlice({
    name:"scoreCount",
    initialState,
    reducers:{
        incrementByAnswers:(state,action) =>{
            state.value += action.payload
        },
        resetScore:(state)=>{
            state.value = 0
        },
    }
})

export const {incrementByAnswers,resetScore} = scoreSlice.actions;
export default scoreSlice.reducer;