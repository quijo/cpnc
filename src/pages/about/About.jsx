import React from 'react'
import AboutCard from '../../component/about/AboutCard'
import PublicIcon from '@mui/icons-material/Public';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import ChurchIcon from '@mui/icons-material/Church';
import HistoryIcon from '@mui/icons-material/History';
import {
    AboutContainer,
    LeftContainer,
    RightContainer
} from './AboutStyle'

const About = (props) => {
  return (
    <>
      <AboutContainer>
        <LeftContainer>
          
            <h1>About CPNC</h1>
            <p>Central Philippine Nazarene College is committed to mentor transformational leaders of the next generation. We exist to provide quality Christian education, to recognize God's call and to serve the community with excellence. Partner with us in shaping the lives of our learners and equip them for their future</p>
        </LeftContainer>
        <RightContainer>
      
            <AboutCard title="MISSION" icon = {<PublicIcon className='publicIcon'/>}/>
            <AboutCard title="VISION" icon={<ForkRightIcon className='forkLeft'/>}/>
            <AboutCard title="CORE VALUES" icon={<ChurchIcon className='churchIcon'/>}/>
            <AboutCard title="HISTORY" icon={<HistoryIcon className='historyIcon'/>}/>
        </RightContainer>
      </AboutContainer>
    </>
  )
}

export default About
