import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios_api";

const initialState = {
    user: null,
    userInfo: { status: 'idle', data: null, msg: '' }
}

// get user info from db

export const getUser = createAsyncThunk('student/auth', async () => {
    try {
        const token = localStorage.getItem("user");
        const { accessToken } = JSON.parse(token);
        const res = await axiosInstance.get('student/id', {
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
        builder.addCase(getUser.pending, (state, action) => {
            state.userInfo.status = 'loading';
        })
            .addCase(getUser.fulfilled, (state, action) => {
                state.userInfo.status = 'loaded';
                state.userInfo.data = action?.payload;
                return state
            })
            .addCase(getUser.rejected, (state, action) => {
                state.userInfo.status = 'failed';
                state.userInfo.msg = action?.error?.message;
                return state
            })
    }
})


export const userCredentials = (state) => state.user.user;
export const userInfo = (state) => state.user.userInfo;

export const { userLogin } = userSlice.actions
export default userSlice.reducer;