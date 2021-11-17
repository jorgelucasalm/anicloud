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



    @media(max-width: 1393px){
    
    form{
        margin-right: 7vw;
    }
}

    @media(max-width: 1220px){
    
    form{
        margin-right: 6vw;
    }
}

@media(max-width: 1025px){
    
    form{
        width: 12rem;
    }

    span{
        font-size: 0.8rem;
    }
    
    #title{
        font-size: 1.7rem;
    }

}

    @media(max-width: 768px){
    
    form{
        margin-left: 35%;
        max-width: 200vw;
    }
    
    #title{
        font-size: 28px;
    }

    img{
       display: none;
    }
}

@media(max-width: 415px){
    
    form{
        width: 12rem;
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
        margin-left: 19%;

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


`;

export default Main;
