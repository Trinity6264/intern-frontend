import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    supervisorInfo: { status: 'idle', data: null, msg: '' }
}

// get Supervisor info from db
export const getSupervisor = createAsyncThunk('Supervisor/one', async (id) => {
    try {
        const res = await axiosInstance.get(`supervisor/${id}`)
        return res.data;
    } catch (error) {
        return error?.response.data;
    }
})

const supervisorSlice = createSlice({
    name: 'supervisor',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getSupervisor.pending, (state, action) => {
            state.supervisorInfo.status = 'loading';
        })
            .addCase(getSupervisor.fulfilled, (state, action) => {
                state.supervisorInfo.status = 'loaded';
                state.supervisorInfo.data = action?.payload;
                return state
            })
            .addCase(getSupervisor.rejected, (state, action) => {
                state.supervisorInfo.status = 'failed';
                state.supervisorInfo.msg = action?.error?.message;
                return state
            })
    }
})


export const supervisorInfo = (state) => state.supervisor.supervisorInfo;

export default supervisorSlice.reducer;