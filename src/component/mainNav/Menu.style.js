import styled from "styled-components";


const MainMenu = styled.nav`
display:flex;
width:100%;
background:rgba(0,0,0,0.5) ;
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
ul  li:hover{
        background:blue ;
    }

.MenuIcon{
    display:none ;
}

.closeIcon{
    display:none ;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  padding:16px 8px 16px 8px;
.left{
   margin-left:8px;
}
.left ul{
    display:none;
    position:absolute ;
    top:50px;
    background:black ;
    height:100vh;
    width:100%;
    left:0;
    z-index:9999;
    text-align:center;
    li{
        padding:12px 0 12px 0;
    }
   
}
.left .show{
    display: block;
}
.right button{
display:none ;
}
.MenuIcon{
    display:block;
    cursor:pointer;
}
.closeIcon{
    display:block;
    position:relative;
    top:100px;
  right:0px;
  width:100% ;
  text-align:right;
    border:solid red 1px;
    ;
}


`

export default MainMenu