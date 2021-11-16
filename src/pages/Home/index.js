import Navbar from "../../components/navbar";
import "./style.css";
import Image from "../../assets/img/teste.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-content">
          <div className="text-content">
            <h1>Bem-vindo ao X!</h1>
            <p>
              O (nome do site) é o melhor site onde você pode assistir seus
              animes favoritos e também ler mangás online, isso mesmo, tudo na
              nossa plataforma. Aqui, você pode registrar uma conta de usuário
              para acessar a coleção de Animes e Mangás e aproveitá-las de forma
              totalmente gratuita.
            </p>
          </div>
          <div className="image-content i-fe">
            <img src={Image} alt="" />
          </div>
        </div>

        <div className="home-content">
          <div className="image-content i-fs">
            <img src={Image} alt="" />
          </div>
          <div className="text-content">
            <h1>O que é Anime?</h1>
            <p>
              Animes e Mangás são desenhos animados e em quadrinhos de origem
              japonesa. No Japão, anime e mangá são nomes dados a qualquer tipo
              de desenho, sejam eles do próprio país, ou não. Porém, no
              Ocidente, apenas as criações japonesas são denominadas dessa
              maneira.
            </p>
          </div>
        </div>

        <div className="about-content">
          <h1>Sobre nós</h1>

          <div className="image-about-us i-fs">
            <img src={Image} alt="" cla />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
