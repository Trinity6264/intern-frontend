import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getAllUsersInfo,  isLoaded } from '../../features/user/userSlice'


const DashboardLayout = () => {
  const isLoadedState = useSelector(isLoaded)
  const disPatch = useDispatch()
  useEffect(() => {
    if (isLoadedState) return;
    disPatch(getAllUsersInfo()).unwrap()
  }, [disPatch,isLoadedState])


  return (<Outlet />)
}

export default DashboardLayout