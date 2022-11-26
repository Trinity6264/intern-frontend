import React from 'react'
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import CustomHeader from '../../components/CustomHeader'
import './profileStyle.css'
import profileImage from '../../assets/imgs/SidePaneProfileImage.png'


const Profile = () => {
  return (
    <Container>
      <CustomHeader title={'Profile'} />
      <div className="profile-picture-wrapper">
        <img src={profileImage} alt="Profile image" />
        <Button variant='success'>Upload New Photo</Button>
      </div>
      <Row className='mt-5'>
        <Col md={6}>
          <FormGroup>
            <FormLabel htmlFor='name'>Student Name:</FormLabel>
            <FormControl id='name'></FormControl>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <FormLabel htmlFor='index'>Student Index:</FormLabel>
            <FormControl id='index'></FormControl>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile