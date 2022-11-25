import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getHeadMaster } from '../../features/user/headTeacherSlice'
import { getMentor } from '../../features/user/mentorSlice'
import { getSupervisor } from '../../features/user/supervisorSlice'
import { getUser, userInfo } from '../../features/user/userSlice'


const DashboardLayout = () => {
  const resp = useSelector(userInfo)
  const disPatch = useDispatch()
  useEffect(() => {
    disPatch(getUser()).unwrap()

  }, [disPatch])
  useEffect(() => {
    if (resp['status'] === 'loaded') {
      const { data: { data: { Head_Id, Sup_id, Men_Id } }
      } = resp;
      disPatch(getHeadMaster(Head_Id)).unwrap()
      disPatch(getSupervisor(Sup_id)).unwrap()
      disPatch(getMentor(Men_Id)).unwrap()
    }

  }, [resp])


  return (<Outlet />)
}

export default DashboardLayout