import React from 'react'
import { Container } from 'react-bootstrap'
import CustomHeader from '../../components/CustomHeader'
import './DashbaordStyle.css'

const Dashboard = () => {
  return (
    <>
      <Container>
        <CustomHeader title={'Dashboard'} />
      </Container>
    </>
  )
}

export default Dashboard