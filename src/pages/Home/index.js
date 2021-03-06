import React from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import Logo from "../../assets/img/logo.png";
import Jorge from "../../assets/img/Jorge.jfif";
import Joao from "../../assets/img/Joao.jpeg";
import Ian from "../../assets/img/Ian.jfif";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-content">
          <div className="text-content">
            <h2>Bem-vindo ao aniCloud</h2>
            <p>
              O aniCloud é o melhor site onde você pode assistir seus animes
              favoritos e também ler mangás online, isso mesmo, tudo na nossa
              plataforma. Aqui, você pode registrar uma conta de usuário para
              acessar a coleção de Animes e Mangás e aproveitá-las de forma
              totalmente gratuita.
            </p>
          </div>
          <div className="image-content i-fe">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div className="home-content">
          <div className="image-content i-fs">
            <img src='https://c.tenor.com/XdutV_U-btkAAAAC/confused-anime.gif' alt="" />
          </div>
          <div className="text-content">
            <h2>O que é Anime?</h2>
            <p>
              Animes e Mangás são desenhos animados e em quadrinhos de origem
              japonesa. No Japão, anime e mangá são nomes dados a qualquer tipo
              de desenho, sejam eles do próprio país, ou não. Porém, no
              Ocidente, apenas as criações japonesas são denominadas dessa
              maneira.
            </p>
          </div>
        </div>

        <section className="about-content">
          <h2>Sobre nós</h2>

          <div className="about-us-profile">
            <div className="about-profile">
              <img src={Jorge} alt="Jorge Lucas" />
              <h2>Jorge Lucas</h2>
              <div className="about-link">
                <a href="https://github.com/JorgeLucas006" target="_blank" rel="noreferrer">
                  <FaGithub size="3rem" />
                </a>
                <a href="https://www.linkedin.com/in/jorgelucasalm/" target="_blank" rel="noreferrer">
                  <FaLinkedin size="3rem" />
                </a>
              </div>
            </div>
            <div className="about-profile">
              <img src={Joao} alt="João Victor" />
              <h2>João Victor</h2>
              <div className="about-link">
                <a href="https://github.com/Joao-Victor-Araujo" target="_blank" rel="noreferrer">
                  <FaGithub size="3rem" />
                </a>
                <a href="https://www.linkedin.com/in/jvas1999/" target="_blank" rel="noreferrer">
                  <FaLinkedin size="3rem" />
                </a>
              </div>
            </div>
            <div className="about-profile">
              <img src={Ian} alt="Ian" />
              <h2>Ian</h2>
              <div className="about-link">
                <a href="https://github.com/j-iann" target="_blank" rel="noreferrer">
                  <FaGithub size="3rem" />
                </a>
                <a href="https://www.linkedin.com/in/jesper-ian-brayner-55a17a219/" target="_blank" rel="noreferrer">
                  <FaLinkedin size="3rem" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
