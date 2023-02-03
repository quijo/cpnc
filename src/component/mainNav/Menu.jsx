import MainMenu from './Menu.style'
import Button from '../button/Button'

import React from 'react'

const Menu = (props) => {
  return (
      <MainMenu>
        <div className='left'>
            <div>CPNC</div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className='right'>
           <Button color="white" background="blue" text="Log In" margin="24px" />
           {/* <Button color="blue" background="white" text="Sign Up"/> */}
        </div>
      </MainMenu>
  )
}

export default Menu


