import React from 'react'
import { Container, } from 'react-bootstrap'
import CustomHeader from '../../components/CustomHeader'
import SecondSectionAfterHeading from '../../components/dashboard/SecondSectionAfterHeading'
import SectionAfterHeading01 from '../../components/dashboard/SectionOne'
import './DashbaordStyle.css'

const Dashboard = () => {
  return (
    <>
      <Container>
        <CustomHeader title={'Dashboard'} />
        <SectionAfterHeading01 />
        <SecondSectionAfterHeading/>
      </Container>
    </>
  )
}

export default Dashboard