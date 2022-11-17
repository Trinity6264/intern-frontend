import React from 'react'
import BackgroundImg from '../../assets/imgs/bg_pic .jpg'
import '../auth/style/Background.css'

const Background = () => {
  return (
    <div className='background__wrapper'>
      <img src={BackgroundImg} alt="BackgroundImage" />
    </div>
  )
}

export default Background