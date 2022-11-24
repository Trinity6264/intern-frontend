import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    updateFormOne: { status: 'idle' },
    formOne: { status: 'idle', data: null, msg: '' },
    formFive: null,
    userInfo: null
}


// form one slice

// ? get form one
export const fetchFormOne = createAsyncThunk('form/one', async () => {
    try {
        const token = localStorage.getItem("user");
        const { accessToken } = JSON.parse(token);
        const res = await axiosInstance.get('form1/formId', {
            headers: {
                'access_token': `Bearer ${accessToken}`,
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
        return error?.response.data;
    }
})
// ? get form one
export const updateFormOne = createAsyncThunk('form/one/update', async (data) => {
    try {
        const token = localStorage.getItem("user");
        const { accessToken } = JSON.parse(token);
        const res = await axiosInstance.patch('form1/', { ...data }, {
            headers: {
                'access_token': `Bearer ${accessToken}`,
            },
        })
        return res.data;
    } catch (error) {
        console.log(error);
        return error?.response.data;
    }
})





const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchFormOne.pending, (state, action) => {
            state.formOne.status = 'loading'
        })
            .addCase(fetchFormOne.fulfilled, (state, action) => {
                state.formOne.status = 'loaded'
                const { data, msg } = action.payload;
                state.formOne.msg = msg
                state.formOne.data = data[0]
            })
            .addCase(fetchFormOne.rejected, (state, action) => {
                state.formOne.status = 'failed'
                state.formOne.data = {}
            })
            .addCase(updateFormOne.pending, (state, action) => {
                state.updateFormOne.status = 'loading'
            })
            .addCase(updateFormOne.fulfilled, (state, action) => {
                state.updateFormOne.status = 'Done'
            })
            .addCase(updateFormOne.rejected, (state, action) => {
                state.updateFormOne.status = 'Failed'
            })

    }
})

export const selectFormOne = (state) => state.dashboard.formOne;

export const { getFormOne, getFormFive } = dashboardSlice.actions;
export default dashboardSlice.reducer;