import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    headTeacherInfo: { status: 'idle', data: null, msg: '' }
}

// get headmaster info from db
export const getHeadMaster = createAsyncThunk('headmaster/one', async (id) => {
    try {
        const res = await axiosInstance.get(`headmaster/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
        return error?.response.data;
    }
})

const headMasterSlice = createSlice({
    name: 'headmaster',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getHeadMaster.pending, (state, action) => {
            state.headTeacherInfo.status = 'loading';
        })
            .addCase(getHeadMaster.fulfilled, (state, action) => {
                state.headTeacherInfo.status = 'loaded';
                state.headTeacherInfo.data = action?.payload;
                return state
            })
            .addCase(getHeadMaster.rejected, (state, action) => {
                state.headTeacherInfo.status = 'failed';
                state.headTeacherInfo.msg = action?.error?.message;
                return state
            })
    }
})


export const headMasterInfo = (state) => state.headMaster.headTeacherInfo;

export default headMasterSlice.reducer;