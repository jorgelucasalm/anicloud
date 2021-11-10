import Navbar from "../../components/navbar";
import "./style.css";
import Image from '../../assets/img/teste.jpg'

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
          <div className="image-content">
            <img src={Image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
