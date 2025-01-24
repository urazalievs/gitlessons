import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterUserPayload } from "./API/authApi";

interface initialState {
    user: null | IRegisterUserPayload
}

const initialState: initialState = {
    user: null
}

const userSlise = createSlice({
    
    name: "userSlice",
    initialState,
    reducers:{
        changeUser(state,action: PayloadAction<IRegisterUserPayload>){
            state.user = action.payload;
        }
    }
})

export default userSlise.reducer;
export const { changeUser} = userSlise.actions;
