import styled from "styled-components"
import Hero from '../../images/hero_bg.jpg'

const Heros = styled.section`
background:green ;
height:100vh;
background-image:url(${Hero});
background-size:cover ;
section{
    color:white;
    width:500px ;
    position:absolute;
    left:450px;
    top:128px;
    h1{
        font-size:60px;
    }
    p{
        margin-top:16px;
        margin-bottom:16px;
    }
}

`
export default Heros