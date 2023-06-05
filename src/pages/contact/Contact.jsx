import React from 'react'
import ContactWrap from './ContactStyle'
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactsIcon from '@mui/icons-material/Contacts';






const Contact = () => {
  return (
    <ContactWrap id="contact">
      <div className='left'>
        <div className='iconWrap'>
            <div className='telephone'>
                <CallIcon className='telephoneIcon'/>
            </div>
            <p>+63 (032) 5055131</p>
        </div>
        <div className='iconWrap'>
            <div className='facebook'>
                <FacebookIcon className='facebookIcon'/>
            </div>
            <p>https://www.facebook.com/cpncMain</p>
        </div>
       <div className='iconWrap'>
            <div className='contacts'>
                <ContactsIcon className='contactIcon'/>
            </div>
            <p>Central Philippine Nazarene College <br/>St., Mary's Drive Apas, Cebu City, Philippines</p>
       </div>
        
      </div>
      <div className='right'>right side contact</div>
    </ContactWrap>
  )
}

export default Contact
