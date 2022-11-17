import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'

const Layout = () => {
    return (
        <>
            <SideBar />
            <section className='main_page'>
                <Outlet />
            </section>
        </>
    )
}

export default Layout