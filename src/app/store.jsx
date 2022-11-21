import { configureStore } from '@reduxjs/toolkit'
import verifySlice from '../features/auth/verifySlice'
import userSlice from '../features/user/userSlice'



export const store = configureStore({
    devTools: true,
    reducer: {
        verify: verifySlice,
        user: userSlice,
    },
})
