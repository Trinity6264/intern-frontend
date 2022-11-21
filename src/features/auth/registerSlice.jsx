import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const AuthBaseURL = 'http://localhost:5000/api/v1/student/register'


const initialState = {
    status: 'idle',
    data: {},
    err: null
}

const registerStudent = createAsyncThunk('auth/register')



const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},

})