import React from 'react'

import facePicture from '../../images/facePictureSquare.png'
import './ProfileHeader.css'

export const ProfileHeader = () => {

  return (
    <div className="profile-header">

      <div className="face-picture-container">
        <img 
          className='face-picture'
          src={facePicture} 
          alt="Picture of my face" 
          height={230}
        />
      </div>
      <div className="name-container">
        <h1 className='name'>Mathias GILBERT</h1>
      </div>
      <h2 className="mathias-introduction">Software Engineering Student</h2>
      <h2 className="mathias-introduction">!! Website being built !!</h2>
    </div>
  )
}
