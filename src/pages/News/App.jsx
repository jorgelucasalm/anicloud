import "./App.css";
import {
  BottomLeftArticle,
  BottomRightArticle,
  TopLeftArticle,
  TopRightArticle,
  MainArticle,
} from "./index.js";
import Navbar from "../../components/navbar";

function New() {
  return (
    <>
      <Navbar/>
      <div className="news">
        <div className="navBarProvissoria"></div>
        <h1 className="pageTitle">Notícias</h1>
        <section className="mainArticle">
          <MainArticle />
        </section>
        <div className="mainDivisionLine"></div>
        <div className="subArticles">
          <section className="topLeftArticle">
            <TopLeftArticle />
          </section>
          <section className="topRightArticle">
            <TopRightArticle />
          </section>
          <div className="subDivisionLine"></div>
          <section className="bottomLeftArticle">
            <BottomLeftArticle />
          </section>
          <section className="bottomRightArticle">
            <BottomRightArticle />
          </section>
        </div>
      </div>
    </>
  );
}

export default New;
