import styled from "styled-components";


const MainMenu = styled.nav`
display:flex;
width:100%;
background:rgba(252,255,255,0.1) ;
color:white;
font-size:1rem;
font-weight:100;
padding:20px 90px 20px 90px;
align-items:center;

.left{
    display:flex ;
    justify-content:start;
    gap:20px;
    background:white 1px solid ;
    flex:1 ;
   
}
.left div{
margin-right:20px;
}
.right{
display:flex ;
flex:1 ;
justify-content:end;
}


ul{
    display:flex ;
    gap:10px;
}
ul li{
    list-style:none;
}
`

export default MainMenu