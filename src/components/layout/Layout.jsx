import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { userCredentials } from '../../features/user/userSlice'
import SideBar from '../SideBar'

const Layout = () => {
    const user = useSelector(userCredentials) 
    if (user)
        return (
            <>
                <SideBar />
                <section className='main_page'>
                    <Outlet />
                </section>
            </>
        )
        return <Navigate to={'/register'} replace/>
}

export default Layout