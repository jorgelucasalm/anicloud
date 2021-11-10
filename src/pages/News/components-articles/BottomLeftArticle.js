import React, { useState } from "react";
import "../reset.css";
import "../index.css";

export const BottomLeftArticle = () => {
  const [data] = useState({
    author: "Lorenna Laieny",
    title: "O capítulo 288 de Tokyo Revengers será adiado",
    description:
      "O autor do mangá decidiu tirar férias depois de sofrer desgate mental.",
    urlToImage:
      "https://criticalhits.com.br/wp-content/uploads/2021/06/Tokyo-Revengers-suastica-910x512.jpg",
    commentsAmount: "12 comentários",
  });
  return (
    <article className="articleBody">
      <a href="">
        <img
          className="subImage"
          alt="tokyo-revengers"
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
