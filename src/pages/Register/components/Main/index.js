import styled from "styled-components";

const Main = styled.main`
  background-color: #ffffff;
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  margin: 5rem auto;
  padding: 2rem;
  color: #000;
  @import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
  font-family: "Open Sans", sans-serif;

  @media (max-width: 1393px) {
    form {
      margin-right: 7vw;
    }
  }

  @media (max-width: 1220px) {
    form {
      margin-right: 6vw;
    }
  }

  @media (max-width: 1025px) {
    form {
      width: 12rem;
    }
    span {
      font-size: 0.8rem;
    }

    #title {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 768px) {
    
    form {
      margin: 0;
    }

    div {
      justify-content: center;
    }

    #title {
      font-size: 28px;
    }
    img {
      display: none;
    }
  }
  @media (max-width: 415px) {
    form {
      width: 12rem;
    }

    input {
      width: 100%;
    }

    span {
      font-size: 0.8rem;
    }

    img {
      display: none;
    }
    #title {
      font-size: 1.7rem;
    }
  }
`;

export default Main;
