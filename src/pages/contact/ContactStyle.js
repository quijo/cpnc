import styled from "styled-components";


const contactWrap = styled.section`
display:flex;
padding:32px 120px 32px 120px;
background-color:var(--primary-dark);
.telephoneIcon, .facebookIcon, .contactIcon{
    color:var(--secondary-light);
    font-size:36px;

    
}
.telephone, .facebook, .contacts{
    background-color:var(--secondary-dark) ;
    width:64px;
    height:64px;
    display:flex ;
    justify-content:center;
    align-items:center;
    border-radius:100px;
   
 
    
}
.iconWrap{
    display:flex ;
    color:white;
    align-items:center;

    gap:10px;
    margin-bottom:32px;
  

}


.left{
    flex:1;
    
}
.right{
    flex:1;
}


@media only screen and (max-width:768px){
    display:block;
    padding:8px;

    .telephone, .facebook, .contacts{
        width:40px;
        height:40px;
    }
    .telephoneIcon, .facebookIcon, .contactIcon{
        width:16px;
        height:16px;
    }
    .iconWrap p{
        font-size:12px;
    }
    .iconWrap{
        flex-direction:column;
        justify-content:center;
        text-align:center;  
    }
}
`
export default contactWrap