import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.user = { accessToken, refreshToken }
            return state;
        }
    }
})


export const userCredentials = (state) => state.user.user;

export const { userLogin } = userSlice.actions
export default userSlice.reducer;