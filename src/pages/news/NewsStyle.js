import styled from "styled-components";

const news = styled.section`
display:flex;
text-align:center;

background:white ;

    .upcommingEvents .eventTitle{
   
        text-align:center;
      

    }
  
        
    
.left{
    display:flex ;
    justify-content:center;
    flex-direction:column ;
    flex:1;
    background-color:var(--secondary-medium);
    padding-bottom:32px;
    p{
        text-align:left;
        width:80% ;
        margin:0 auto;
        color:var(--primary-dark)
    }
    h2{
        text-align:left;
        width:80% ;
        margin:0 auto;
        color:var(--primary-dark)
    }

    .logo59th img{
        width:80%;
    }

    


  

}
.right{
 
    background-color:var(--secondary-medium);
    display:flex ;
    flex:1 ;
    width:50% ;
    padding:20px;
  
}
.right > .slider{
    width:100%;
    margin-top:100px;
}

@media only screen and (max-width: 768px){
    display:block ;
  .left{
    padding:8px;
    p{
        font-size:12px;
        text-align:left;
    }
  }
  .right{
    width:100% ;
    padding:8px;
    color:white;
  }

}
`
export default news

