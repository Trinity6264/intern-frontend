import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../api/axios_api'


const initialState = {
    status: 'idle',
    data: {},
    err: null
}

export const registerStudent = createAsyncThunk('auth/register', async (data) => {
    try {
        const resp = await axiosInstance.post('student/register', data);
        return resp.data;
    } catch (error) {
        return error?.response?.data
    }
})



const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerStudent.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(registerStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.err = action.error.message
                return state;
            })
            .addCase(registerStudent.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload
                return state
            })
    }

})

export default registerSlice.reducer;
