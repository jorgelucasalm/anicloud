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
      <Navbar></Navbar>
      <div className="news-content">
        <div className="news">
          <h1 id="pageTitle">Notícias</h1>
          <section className="mainArticle">
            <MainArticle />
            <div className="hiddenArticlesLeft">
              <div className="topLeftArticle">
                <TopLeftArticle />
              </div>
              <div className="bottomLeftArticle">
                <BottomLeftArticle />
              </div>
            </div>
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
          <div className="hiddenArticlesRight">
            <div className="topRightArticle">
              <TopRightArticle />
            </div>
            <div className="bottomRightArticle">
              <BottomRightArticle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
