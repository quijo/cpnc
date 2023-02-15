import React from 'react'
import Heros from './HeroStyle'
import Menu from '../../component/mainNav/Menu'
import Button from '../../component/button/Button'

const Hero = (props) => {
  return (
    <Heros>
      <Menu />
      <section>
       <h1>Mentoring Transformational Leaders</h1>
      <p>Central Philippine Nazarene College is committed to mentor transformational leaders of the next generation. We exist to provide quality Christian education, to recognize God's call and to serve the community with excellence. Partner with us in shaping the lives of our learners and equip them for their future</p>
      <Button text="CONTACT US" background="#F67280" color="white"/>
      </section>
      
    </Heros>
  )
}

export default Hero
