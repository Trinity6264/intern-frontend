import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    mentorInfo: { status: 'idle', data: null, msg: '' }
}

// get Mentor info from db
export const getMentor = createAsyncThunk('mentor/one', async (id) => {
    try {
        const res = await axiosInstance.get(`mentor/${id}`)
        return res.data;
    } catch (error) {
        return error?.response.data;
    }
})

const mentorSlice = createSlice({
    name: 'mentor',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMentor.pending, (state, action) => {
            state.mentorInfo.status = 'loading';
        })
            .addCase(getMentor.fulfilled, (state, action) => {
                state.mentorInfo.status = 'loaded';
                state.mentorInfo.data = action?.payload;
                return state
            })
            .addCase(getMentor.rejected, (state, action) => {
                state.mentorInfo.status = 'failed';
                state.mentorInfo.msg = action?.error?.message;
                return state
            })
    }
})


export const mentorInfo = (state) => state.mentor.mentorInfo;

export default mentorSlice.reducer;