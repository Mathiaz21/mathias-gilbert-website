import React from 'react'
import './Root.css'

export const Root = ({children}) => {

  return (
    <div className="root">
      
      <div className="empty-block"></div>
      {children}
    </div>
  )
}
