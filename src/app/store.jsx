import { configureStore } from '@reduxjs/toolkit'
import verifySlice from '../features/auth/verifySlice'
import dashboardSlice from '../features/dashboard/dashboardSlice'
import userSlice from '../features/user/userSlice'



export const store = configureStore({
    devTools: true,
    reducer: {
        verify: verifySlice,
        user: userSlice,
        dashboard: dashboardSlice,
    },
})
