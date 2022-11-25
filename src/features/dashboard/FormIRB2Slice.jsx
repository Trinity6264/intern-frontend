import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    updateFormTwo: { status: 'idle' },
    formTwo: { status: 'idle', data: null, msg: '' },
}

export const fetchFormTwo = createAsyncThunk('form/two', async () => {
    try {

        const res = await axiosInstance.get('form2/formId')
        return res.data;
    } catch (error) {
        return error?.response?.data;
    }
})
export const updateFormTwo = createAsyncThunk('form/two/update', async (data) => {
    try {
        const res = await axiosInstance.patch('form2/', { ...data })
        return res.data;
    } catch (error) {
        return error?.response?.data;
    }
})


const formIRB2Slice = createSlice({
    name: 'form2',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFormTwo.pending, (state, action) => {
            state.formTwo.status = 'loading'
        })
            .addCase(fetchFormTwo.fulfilled, (state, action) => {
                state.formTwo.status = 'loaded'
                const { data } = action.payload;
                state.formTwo.data = data[0]
            })
            .addCase(updateFormTwo.fulfilled, (state, action) => {
                // const { data } = action.payload;
                // // state.formTwo.data = data[0]
            })
    }
})
export const selectFormTwo = (state) => state.form2.formTwo;
export default formIRB2Slice.reducer;




