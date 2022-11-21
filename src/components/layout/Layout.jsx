import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SideBar from '../SideBar'

const Layout = () => {
    const isLogin = false;
    if (isLogin)
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