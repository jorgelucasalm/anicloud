import styled from 'styled-components';

const Main = styled.main`
    background-color: #FFFFFF;
    width: 80vw;
    height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    border-radius: 15px;
    margin: 5rem auto;
    @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
    font-family: 'Open Sans', sans-serif;  


    @media(max-width: 1290px){
    
    form{
        margin-right: 7vw;
    }

    img{
        width: 45%;
    }    
}

    @media(max-width: 1090px){
    
    form{
        margin-right: 8vw;
    }

    img{
        width: 43%;
    }  
}

@media(max-width: 1025px){
    
    form{
        width: 11rem;
        margin-right: 14%;
    }

    #title{
        font-size: 31px;
    }

    span{
        font-size: 0.7rem;
    }
    
    img{
        height: 30%;
        margin-bottom: 5%;
    }

}

    @media(max-width: 770px){
    
    form{
        margin-left: 37%;
        margin-top: 3%;
    }
    
    #title{
        font-size: 35px;
    }

    img{
       display: none;
    }
}

@media(max-width: 415px){
    
    form{
        width: 11rem;
        margin-left: 23%;

    }

    span{
        font-size: 0.8rem;
    }
    
    img{
       display: none;
    }

    #title{
        font-size: 1.7rem;
    }

}

@media(max-width: 380px){
    
    form{
        margin-left: 22%;
        width: 10rem;
        margin-bottom: -8px;

    }

    span{
        font-size: 0.6rem;
    }

    input{
        height: 16px;
    }
    
    img{
       display: none;
    }

    button{
        font-size: 1.4rem;
        width: 90%;
    }

    #title{
        font-size: 1.7rem;
    }

}

@media(max-width: 330px){
    
    form{
        margin-left: 23%;
        width: 8rem;
        margin-bottom: -8px;

    }

    span{
        font-size: 0.5rem;
    }
    
    img{
       display: none;
    }

    #title{
        font-size: 1.6rem;
        margin-bottom: 48px;
    }

    button{
        font-size: 1.4rem;
        width: 110%;
    }

    input{
        height: 15px;
        font-size: 14px;
    }
}

`;

export default Main;
