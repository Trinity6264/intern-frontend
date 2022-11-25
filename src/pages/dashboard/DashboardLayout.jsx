import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getHeadMaster } from '../../features/user/headTeacherSlice'
import { getUser, userInfo } from '../../features/user/userSlice'


const DashboardLayout = () => {
  const resp = useSelector(userInfo)
  const disPatch = useDispatch()
  useEffect(() => {
    disPatch(getUser()).unwrap()

  }, [disPatch])
  useEffect(() => {
    if (resp['status'] === 'loaded') {
      const { data: { data: { Head_Id } }
      } = resp;
      disPatch(getHeadMaster(Head_Id)).unwrap()
    }

  }, [resp])


  return (<Outlet />)
}

export default DashboardLayout