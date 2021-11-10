import React, { useState } from "react";
import "../reset.css";
import "../index.css";

export const TopLeftArticle = () => {
  const [data] = useState({
    author: "Jorge Lucas",
    title: "Reboot de Revolutionary Girl Utena é confirmado para 2023",
    description: null,
    urlToImage:
      "https://i2.wp.com/butwhythopodcast.com/wp-content/uploads/2020/11/810iYISrDL-e1604714707255.jpg?fit=1400%2C815&ssl=1",
    commentsAmount: "29 comentários",
  });
  return (
    <article className="articleBody">
      <a href="">
        <img
          className="subImage"
          alt="revolutionary-girl-utena"
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
