import styled from "styled-components";

const courses = styled.section`
background-color:white ;
padding:64px 8px 64px 8px;
display:flex ;
gap:8px;
justify-content:space-evenly;


@media only screen and (max-width: 768px){
    flex-direction: column ;
    padding:32px 8px 32px 8px;
}

`
export default courses