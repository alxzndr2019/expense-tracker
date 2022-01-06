import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {
    balance: 3000,
    inflow: 300,
    outflow:2700,
    history:[]

}

export const userSlice = createSlice({
    name: "testuser",
    initialState:{value:initialStateValue},
    reducers:{
        addTransaction: (state, action)=>{
            state.value=action.payload;
        },
     

    }
});
export const {addTransaction} = userSlice.actions;
export default userSlice.reducer;