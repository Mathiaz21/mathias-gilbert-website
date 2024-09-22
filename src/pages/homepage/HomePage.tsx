import React from 'react'

import './HomePage.css'
import { ProfileHeader } from '../../highLevelComponents/profileHeader/ProfileHeader.tsx'

export const HomePage = () => {
  return (
    <div className="home-page">
      <ProfileHeader />
    </div>
  )
}
