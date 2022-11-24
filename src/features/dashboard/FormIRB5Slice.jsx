import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    updateFormFive: { status: 'idle' },
    formFive: { status: 'idle', data: null, msg: '' },
}

export const fetchFormFive = createAsyncThunk('form/five', async () => {
    try {
        const token = localStorage.getItem("user");
        const { accessToken } = JSON.parse(token);
        const res = await axiosInstance.get('form5/formId', {
            headers: {
                'access_token': `Bearer ${accessToken}`,
            }
        })
        return res.data;
    } catch (error) {
        return error?.response?.data;
    }
})
export const updateFormFive = createAsyncThunk('form/five/update', async (data) => {
    try {
        const token = localStorage.getItem("user");
        const { accessToken } = JSON.parse(token);
        const res = await axiosInstance.patch('form5/', { ...data }, {
            headers: {
                'access_token': `Bearer ${accessToken}`,
            }
        })
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
            state.formTwo.status = 'loading'
        })
            .addCase(fetchFormFive.fulfilled, (state, action) => {
                state.formTwo.status = 'loaded'
                const { data } = action.payload;
                state.formTwo.data = data[0]
            })
            .addCase(updateFormFive.fulfilled, (state, action) => {
                const { data } = action.payload;
                // state.formTwo.data = data[0]
            })
    }
})
export const selectFormTwo = (state) => state.form5.formFive;
export default formIRB5Slice.reducer;




