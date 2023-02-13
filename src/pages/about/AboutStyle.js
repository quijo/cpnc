
import styled from 'styled-components'


const AboutContainer = styled.section`
display:flex;
justify-content:space-between;
padding:32px 120px 32px 120px; 
gap:64px;
background:white;

@media only screen and (max-width: 768px){
    display:block;
    padding: 8px;
    text-align:center;
}
`
const LeftContainer = styled.div`

width:100%;



`

const RightContainer = styled.div`

width:100% ;
`








export  {AboutContainer, LeftContainer, RightContainer}
