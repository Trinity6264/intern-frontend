import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";
const initialState = {
    status: 'idle',
    data: {},
    err: null
}




export const loginStudent = createAsyncThunk('auth/login', async (data) => {
    try {
        const res = await axiosInstance.post('student/login', data)
        return res.data;
    } catch (error) {
        console.log(error);
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

