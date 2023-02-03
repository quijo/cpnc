import React from 'react'
import Button from './ButtonStyle'

const button = (props) => {
console.log(props)
  return (
    <Button style={{color:props.color, background:props.background,marginRight:props.margin}}>
     {props.text}
    </Button>
  )
}

export default button
