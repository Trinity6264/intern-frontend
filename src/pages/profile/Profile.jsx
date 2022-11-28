import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import CustomHeader from '../../components/CustomHeader'
import './profileStyle.css'
import profileImage from '../../assets/imgs/SidePaneProfileImage.png'
import { allInfoStatus, studentInfo } from '../../features/user/userSlice'
import { useSelector } from 'react-redux'
import CustomLoadingComponent from '../../components/dashboard/CustomLoadingComponent'


const Profile = () => {
  const infoStatus = useSelector(allInfoStatus)
  const student = useSelector(studentInfo)

  const [name, setName] = useState('');
  const [index, setIndex] = useState('');
  const [department, setDepartment] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [subjectOfInternship, setSubjectOfInternship] = useState('');
  const [subjectTeaching, setSubjectTeaching] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [classTeaching, setClassTeaching] = useState('');
  const [emailAddress, setemailAddress] = useState('');



  useEffect(() => {
    if (infoStatus === 'loaded') {
      const { std_index, std_Name, std_Class, std_Department, std_Image, std_ay, std_ct, std_email, std_pn, std_soi, std_st } = student
      setName(std_Name)
      setIndex(std_index)
      setDepartment(std_Department)
      setClassTeaching(std_ct)
      setAcademicYear(std_ay)
      setPhoneNumber(std_pn)
      setStudentClass(std_Class)
      setSubjectOfInternship(std_soi)
      setSubjectTeaching(std_st)
      setemailAddress(std_email)
    }
  }, [infoStatus, student])


  return (
    infoStatus === 'loading' ? <CustomLoadingComponent /> :
      <Container>
        <CustomHeader title={'Profile'} />
        <div className="profile-picture-wrapper">
          <img src={profileImage} alt="Profile image" />
          <Button variant='success'>Upload New Photo</Button>
        </div>
        <Row className='mt-3'>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='name'>Student Name:</FormLabel>
              <FormControl value={name} id='name'></FormControl>
            </FormGroup>
          </Col>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='index'>Student Index:</FormLabel>
              <FormControl value={index} id='index'></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='department'>Student Department:</FormLabel>
              <FormControl value={department} id='department'></FormControl>
            </FormGroup>
          </Col>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='class'>Student Class:</FormLabel>
              <FormControl value={studentClass} id='class'></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='soi'>School Of Internship:</FormLabel>
              <FormControl value={subjectOfInternship} id='soi'></FormControl>
            </FormGroup>
          </Col>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='st'>Subject Teaching:</FormLabel>
              <FormControl value={subjectTeaching} id='st'></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='ay'>Academic Year:</FormLabel>
              <FormControl value={academicYear} id='ay'></FormControl>
            </FormGroup>
          </Col>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='pn'>Phone Number:</FormLabel>
              <FormControl value={phoneNumber} id='pn'></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='ct'>Class Teaching:</FormLabel>
              <FormControl value={classTeaching} id='ct'></FormControl>
            </FormGroup>
          </Col>
          <Col md={6} className={'mt-3'}>
            <FormGroup>
              <FormLabel htmlFor='email'>Email Address:</FormLabel>
              <FormControl value={emailAddress} id='email'></FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row className='mb-5'>
          <div style={{ maxWidth: '10rem' }}>
            <Button variant='outline-success'>Update Detail</Button>
          </div>
        </Row>
      </Container>
  )


}

export default Profile