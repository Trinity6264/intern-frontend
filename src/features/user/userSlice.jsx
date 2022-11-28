import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    user: null,
    allUsersInfo: {
        isLoaded: false,
        status: 'idle',
        data: {
            student: null,
            mentor: null,
            headmaster: null,
            supervisor: null
        },
        msg: ''
    },
}

// get user info from db

export const getAllUsersInfo = createAsyncThunk('users/info', async () => {
    try {
        const res = await axiosInstance.get('student/all-info')
        return res.data;
    } catch (error) {
        return error?.response.data;
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.user = { accessToken, refreshToken }
            return state;
        },
        getUserInfo: (state, action) => {
            state.userInfo.data = action.payload;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsersInfo.pending, (state, action) => {
            state.userInfo.status = 'loading';
        })
            .addCase(getAllUsersInfo.fulfilled, (state, action) => {
                state.allUsersInfo.status = 'loaded';
                state.allUsersInfo.isLoaded = true;
                const {
                    head_email,
                    head_id,
                    head_momo,
                    head_name,
                    head_pn,
                    head_school,
                    ment_email,
                    ment_id,
                    ment_image,
                    ment_momo,
                    ment_name,
                    ment_pn,
                    ment_school,
                    ment_subject,
                    ment_ts,
                    std_Class,
                    std_Department,
                    std_Image,
                    std_Name,
                    std_ay,
                    std_ct,
                    std_email,
                    std_index,
                    std_pn,
                    std_soi,
                    std_st,
                    std_status,
                    sup_email,
                    sup_id,
                    sup_name,
                    sup_pn,
                } = action?.payload.data;
                state.allUsersInfo.data.student = {
                    std_Class,
                    std_Department,
                    std_Image,
                    std_Name,
                    std_ay,
                    std_ct,
                    std_email,
                    std_index,
                    std_pn,
                    std_soi,
                    std_st,
                    std_status,
                };
                state.allUsersInfo.data.headmaster = {
                    head_email,
                    head_id,
                    head_momo,
                    head_name,
                    head_pn,
                    head_school,
                }
                state.allUsersInfo.data.mentor = {
                    ment_email,
                    ment_id,
                    ment_image,
                    ment_momo,
                    ment_name,
                    ment_pn,
                    ment_school,
                    ment_subject,
                    ment_ts,
                }
                state.allUsersInfo.data.supervisor = {
                    sup_email,
                    sup_id,
                    sup_name,
                    sup_pn,
                }
                return state
            })
            .addCase(getAllUsersInfo.rejected, (state, action) => {
                state.userInfo.status = 'failed';
                state.userInfo.msg = action?.error?.message;
                return state
            })
    }
})


export const userCredentials = (state) => state.user.user;

//Selecting individual objects from db if found
export const studentInfo = (state) => state.user.allUsersInfo.data.student;
export const isLoaded = (state) => state.user.allUsersInfo.isLoaded;
export const mentorInfos = (state) => state.user.allUsersInfo.data.mentor;
export const headMasterInfos = (state) => state.user.allUsersInfo.data.headmaster;
export const supervisorInfos = (state) => state.user.allUsersInfo.data.supervisor;
export const allInfoStatus = (state) => state.user.allUsersInfo.status;

export const { userLogin } = userSlice.actions
export default userSlice.reducer;