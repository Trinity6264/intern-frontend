import React, { useEffect } from 'react'
import { Container, } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import CustomHeader from '../../components/CustomHeader'
import SecondSectionAfterHeading from '../../components/dashboard/SecondSectionAfterHeading'
import SectionAfterHeading01 from '../../components/dashboard/SectionOne'
import { fetchFormTwo,fetchFormFive } from '../../features/dashboard/dashboardSlice'
import './DashbaordStyle.css'

const Dashboard = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
    // dispatch(fetchFormOne()).unwrap()
    dispatch(fetchFormTwo()).unwrap()
    dispatch(fetchFormFive()).unwrap()
  }, [])


  return (
    <>
      <Container>
        <CustomHeader title={'Dashboard'} />
        <SectionAfterHeading01 />
        <SecondSectionAfterHeading />
      </Container>
    </>
  )
}

export default Dashboard