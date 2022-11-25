import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    updateFormFive: { status: 'idle' },
    postFormFive: { status: 'idle', data: null, msg: '' },
    formFive: { status: 'idle', data: null, msg: '' },
}

export const fetchFormFive = createAsyncThunk('form/five', async () => {
    try {
        const res = await axiosInstance.get('form5/formId')
        return res.data;
    } catch (error) {
        return error?.response?.data;
    }
})
export const postFormFive = createAsyncThunk('form/five/post', async (data) => {
    try {
        const res = await axiosInstance.post('form5/', { ...data })
        return res.data;
    } catch (error) {
        return error?.response?.data;
    }
})
export const updateFormFive = createAsyncThunk('form/five/update', async (data) => {
    try {
        const res = await axiosInstance.patch('form5/', { ...data })
        return res.data;
    } catch (error) {
        return error?.response?.data;
    }
})


const formIRB5Slice = createSlice({
    name: 'form5',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFormFive.pending, (state, action) => {
            state.formFive.status = 'loading'
        })
            .addCase(fetchFormFive.fulfilled, (state, action) => {
                state.formFive.status = 'loaded'
                const { data } = action.payload;
                state.formFive.data = data[0]
            })
            .addCase(updateFormFive.fulfilled, (state, action) => {
              
            })
            .addCase(postFormFive.fulfilled, (state, action) => {
                state.postFormFive.status = 'posted'
            })
            .addCase(postFormFive.pending, (state, action) => {
                state.postFormFive.status = 'loading'
            })
            .addCase(postFormFive.rejected, (state, action) => {
                state.postFormFive.status = 'failed'
            })

    }
})
export const selectFormFive = (state) => state.form5.formFive;
export const postFormFiveState = (state) => state.form5.postFormFive;
export default formIRB5Slice.reducer;




