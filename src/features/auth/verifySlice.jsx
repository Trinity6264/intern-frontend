import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../api/axios_api'



const initialState = {
    status: 'idle',
    data: {},
    err: null
}

export const verifyStudent = createAsyncThunk('auth/verify', async (data) => {
    try {
        const res = await axiosInstance.post('student/verify', data)
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


export default verifySlice.reducer; 