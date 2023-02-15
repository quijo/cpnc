import { textAlign } from '@mui/system'
import React from 'react'
import Card from '../../component/card/Card'
import CoursesContainer from '../../pages/courses/CoursesStyle'
import MainStyle from './MainStyle'
import Preschool from '../../images/preschool.jpg'
import Elementary from '../../images/elementary.jpg'
import Highschool from '../../images/highschool.jpg'
import SeniorHighSchool from '../../images/seniorhighschool.jpg'
import AbTheology from '../../images/abtheology.jpg'
import Abre from '../../images/abre.jpg'
import Assoaciate from '../../images/associate.jpg'
import Philteen from '../../images/philteen.jpg'

  
  

const Courses = (props) => {

  return (
<MainStyle>
        <h1 className='title'>Courses Offered</h1>
     <CoursesContainer>
        <Card title="Preschool" image={Preschool} description="Preschool has a dual commitment to provide basic and Christian Education for Pre –Schoolers in the nearby community. It adopts the philosophy of making Christian Education as center of its curriculum. It is committed to provide a wholesome learning for the development of children recognizing them as whole persons with physical, mental, social, emotional, and spiritual needs. Together with its college and administrator, it is committed to serve the community through its educational and spiritual ministries."/>

        <Card title="Elementary" image={Elementary} description="Elementary Department exists to provide the best possible learning for pupils in knowledge, in character and skills development."/>

        <Card title="High School" image={Highschool} description="High School Department exists to provide the best possible venue for secondary students where they can best prepare for their college education. A place where students are at par with the world’s best in knowledge, music, IT, and fluency in communication."/>

        <Card title="Senior High School" image={SeniorHighSchool} description="DepEd has developed a curriculum specifically for Senior High. It is composed of two basic components: a Core Curriculum composed of eight Learning Areas and four different career tracks that student can Choose from based on their interest and aptitude . The choice of career track will define the contents of the other subject a student will be taken in Grade 11 and 12."/>
    </CoursesContainer>

    {/* <h1 className='title'>College</h1> */}

    <CoursesContainer>
      <Card title="AB Theology" image={AbTheology} description="AB Theology in Pastoral Ministries A program designed to provide the students a good foundation for meeting the requirements for graduate 
        level seminary studies and for ordination in the Nazarene Church. It is geared to prepare students for full – time pastoral ministry."/>

      <Card title="AB Religious Education" image={Abre} description="AB Religious Education
        a. In Pre – School Education/Administration A program designed to equip students with basic knowledge and skills for pre – school education/administration. A pre – school Laboratory is provided to expose students to the practical component of the program.
        b. In Christian Education Administration A program designed to equip students with the theory and practices of church – based CE Administration. Emphasis is given to the role and function of the CE Administrator in the local church"/>

      <Card title="Associate in Pastoral Ministries/Associate in Religious Education " image={Assoaciate} description="Associate in Pastoral Ministries/Associate in Religious Education Students with high school diplomas enrolled in this program are given the opportunity to meet the academic requirements for Ordination, or for further training in Christian Service"/>

      <Card title="Philippine Theological Education by Extension for Nazarenes (PhilTeen)" image={Philteen} description=" A program designed to train laymen for the ministry and to help pastors     
        complete the required courses for ordination."/>

    </CoursesContainer>
    </MainStyle>
   
  )
}

export default Courses
