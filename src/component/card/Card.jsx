import React from 'react'
import CardContainer from './CardStyle'
import Button from '../button/button'





const Card = (props) => {

  console.log(props)
  return (
   <CardContainer>
    {/* <img  src={props.image}alt="image" /> */}
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <Button text="Read More"/>
   </CardContainer>
  )
}

export default Card
