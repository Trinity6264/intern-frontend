import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    status: 'idle',
    data: {},
    err: null
}
const BaseURL = 'http://localhost:5000/api/v1/student/login'

export const loginStudent = createAsyncThunk('auth/login', async (data) => {
    try {
        const res = await axios.post(BaseURL, data)
        return res.data;
    } catch (error) {
        return error?.response.data;
    }
})
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginStudent.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(loginStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.err = action.error.message
                return state;
            })
            .addCase(loginStudent.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload
                return state
            })

    }
})

export default loginSlice.reducer;

