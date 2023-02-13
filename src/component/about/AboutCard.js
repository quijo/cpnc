import React from 'react'
import AboutCardContainer from './AboutCardStyle'

const aboutCard = (props) => {
  return (
    <>
     <AboutCardContainer>
      <div>{props.icon}</div>
      <h1>{props.title}</h1>
    </AboutCardContainer>
 
    </>
   
  )
}

export default aboutCard
