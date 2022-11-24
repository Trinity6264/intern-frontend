import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getUser } from '../../features/user/userSlice'


const DashboardLayout = () => {
    const disPatch = useDispatch()
    useEffect(() => {
      disPatch(getUser()).unwrap()
      
    }, [disPatch])
    

    return (<Outlet />)
}

export default DashboardLayout