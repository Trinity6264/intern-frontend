import { configureStore } from '@reduxjs/toolkit'
import verifySlice from '../features/auth/verifySlice'
import dashboardSlice from '../features/dashboard/dashboardSlice'
import FORMIRB1Slice from '../features/dashboard/FORMIRB1Slice'
import FormIRB2Slice from '../features/dashboard/FormIRB2Slice'
import FormIRB5Slice from '../features/dashboard/FormIRB5Slice'
import userSlice from '../features/user/userSlice'



export const store = configureStore({
    devTools: true,
    reducer: {
        verify: verifySlice,
        user: userSlice,
        dashboard: dashboardSlice,
        form1: FORMIRB1Slice,
        form2: FormIRB2Slice,
        form5: FormIRB5Slice,
     
    },
})
