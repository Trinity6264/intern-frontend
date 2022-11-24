import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    updateFormTwo: { status: 'idle' },
    formTwo: { status: 'idle', data: null, msg: '' },
}

export const fetchFormTwo = createAsyncThunk('form/two', async () => {
    try {
        const token = localStorage.getItem("user");
        const { accessToken } = JSON.parse(token);
        const res = await axiosInstance.get('form2/formId', {
            headers: {
                'access_token': `Bearer ${accessToken}`,
            }
        })
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
        builder.addCase(fetchFormTwo.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.formTwo.data = data[0]
        })
    }
})
export const selectFormTwo = (state) => state.form2.formTwo;
export default formIRB2Slice.reducer;




