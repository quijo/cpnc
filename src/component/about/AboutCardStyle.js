
import styled from "styled-components";

const aboutCard = styled.div`


border:solid 1px black;
padding: 8px 8px;
margin-top:32px;
display:flex;

.publicIcon, .forkLeft, .churchIcon,  .historyIcon{
    font-size:60px;
    margin-left:32px ;

}


h1{
    
    width:100%;
    display: flex;
    justify-content:center;
    align-items:center;
}

div{

    width:50px;
    height:50px;
    display: flex;
    justify-content:center;
    align-items:center;
}
:hover{
    background-color:blue;
    color:white;
    transition:ease-in-out 0.2s;
}
cursor:pointer;

@media only screen and (max-width: 768px){

    margin-top:16px;
    .publicIcon{
    font-size:40px;
    margin-left:32px ;

}
.forkLeft{
    font-size:40px;
    margin-left:32px ;

}
  h1{
    font-size:20px;
  }
}


`

export default aboutCard