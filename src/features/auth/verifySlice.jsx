import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const VerifyBaseURL = 'http://localhost:5000/api/v1/student/verify'

const initialState = {
    status: 'idle',
    data: {},
    err: null
}

export const verifyStudent = createAsyncThunk('auth/verify', async (data) => {
    try {
        const res = await axios.post(VerifyBaseURL, data)
        return res.data;
    } catch (error) {
        return error?.response.data;
    }
})


const verifySlice = createSlice({
    name: 'verify',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(verifyStudent.pending, (state, action) => {
            state.status = 'loading'
        })

            .addCase(verifyStudent.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload
                return state
            })
            .addCase(verifyStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.err = action.error
                return state;
            })
    }

})

// selecting the global state

const selectStatus = (state) => state.verify.status;
const selectData = (state) => state.verify.data;
const selectError = (state) => state.verify.err;

export { selectError, selectStatus, selectData }
export const { } = verifySlice.actions;

export default verifySlice.reducer; 