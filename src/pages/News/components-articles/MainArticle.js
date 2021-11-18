import React, { useState } from "react";

export const MainArticle = () => {
  const [data] = useState({
    author: "Jesper Ian",
    title: "É anunciado o MOBA de My Hero Academia!",
    description:
      "O jogo será produzido pela Activision e tem lançamento previsto para o final  do ano",
    urlToImage:
      "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/08/legiao_V7jryqimt6AW.jpg.jpeg",
    commentsAmount: "324 comentários",
  });
  return (
    <article className="articleBody">
      <a href="/">
        <img
          className="mainImage"
          alt="tokyo-revengers"
          src={data.urlToImage}
        ></img>
      </a>
      <a href="/">
        <h1 className="mainArticleTitle">{data.title}</h1>
      </a>
      <p className="articleDescription">{data.description}</p>
      <span className="articleAuthor">{data.author}</span>
      <span> | </span>
      <span className="articleComments">{data.commentsAmount}</span>
    </article>
  );
};
