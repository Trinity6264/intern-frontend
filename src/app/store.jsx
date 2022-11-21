import { configureStore } from '@reduxjs/toolkit'
import verifySlice from '../features/auth/verifySlice'



export const store = configureStore({
    devTools: true,
    reducer: {
        verify: verifySlice,
    }
})
