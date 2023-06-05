import styled from "styled-components"
import Hero from '../../images/hero_bg.jpg'

const Heros = styled.section`

height:100vh;
background-image:url(${Hero});
background-size:cover ;
background-attachment:fixed ;
position:relative;
section{
    color:white;
    width:50% ;
    right:136px;
    top:64px;
    /* border:1px solid red; */
    position:absolute;
    padding:64px;
    h1{
        font-size:60px;
    }
    p{
        margin-top:16px;
        margin-bottom:16px;
    }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
 section{
    width:95%;
    top:90px;
    left:0;
    right:0;
    margin:0 auto ;
    border-radius:16px;
    padding:32px;
    background-color: rgba(0, 150, 255, 0.8);
    h1{
        font-size:28px;
    }
    
}
}

`
export default Heros