import React from 'react'

import './HomePage.css'
import { ProfileHeader } from '../../highLevelComponents/profileHeader/ProfileHeader.tsx'
import { ScholarshipBlock } from '../../highLevelComponents/scholarshipBlock/ScholarshipBlock.tsx'
import { SocialMediaBlock } from '../../highLevelComponents/soacialMediaBlock/SocialMediaBlock.tsx'

export const HomePage = () => {
  return (
    <div className="home-page">
      <ProfileHeader />
      <SocialMediaBlock />
      <ScholarshipBlock />
    </div>
  )
}
