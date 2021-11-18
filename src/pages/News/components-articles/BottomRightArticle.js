import React, { useState } from "react";

export const BottomRightArticle = () => {
  const [data] = useState({
    author: "Luana Souza",
    title:
      "Revista Animaníacos lista animes mais influentes entre a Geração Z; Attack on Titan em 1º",
    description: null,
    urlToImage:
      "https://i.pinimg.com/originals/01/3b/a0/013ba064705e7f9421323c3f269087e4.gif",
    commentsAmount: "188 comentários",
  });
  return (
    <article className="articleBody">
      <a href="">
        <img
          className="subImage"
          alt="attack-on-titan"
          src={data.urlToImage}
        ></img>
      </a>
      <a href="">
        <h1 className="subArticleTitle">{data.title}</h1>
      </a>
      <span className="articleAuthor">{data.author}</span>
      <span> | </span>
      <span className="articleComments">{data.commentsAmount}</span>
    </article>
  );
};
