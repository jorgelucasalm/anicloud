import React, { useState } from "react";
import "../reset.css";
import "../index.css";

export const TopRightArticle = () => {
  const [data] = useState({
    author: "João Araujo",
    title: "Parque temático de Serial Experiments Lain é aberto em Osaka",
    description: null,
    urlToImage:
      "https://78.media.tumblr.com/1bcec9726580d480209375113f6330f2/tumblr_p586t0hGXg1u9y0nmo1_540.gif",
    commentsAmount: "84 comentários",
  });
  return (
    <article className="articleBody">
      <a href="">
        <img
          className="subImage"
          alt="serial-experiments-lain"
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
