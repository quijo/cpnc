import MainMenu from './Menu.style'
import Button from '../button/button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = (props) => {

const [menu, setMenu] = useState(true)

function handleClick(){
  setMenu(menu => !menu)

}

  return (
      <MainMenu>
        <div className='left' >
            <div>CPNC</div>
            {/* <CloseIcon className='closeIcon' onClick={handleClick}/> */}
            <ul className={!menu ? ' show': ''}>
              <NavLink to="/#contact">Home</NavLink>
              <li onClick={handleClick}>Home</li>
              <li onClick={handleClick}>About</li>
              <li onClick={handleClick}>Contact</li>
            </ul>
        </div>
        <div className='right'>
           <Button color="white" background="blue" text="Log In" margin="24px" />
           <MenuIcon className='MenuIcon' onClick={handleClick}/>
           {/* <Button color="blue" background="white" text="Sign Up"/> */}
        </div>
      </MainMenu>
  )//
}

export default Menu


