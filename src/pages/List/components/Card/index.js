import { useEffect, useState } from "react";
import "./style.css";
import api from "../../../../services/api";

const Card = (props) => {
  const [animeGenre, setAnimeGenre] = useState([]);
  const [mangaGenre, setMangaGenre] = useState([]);

  useEffect(() => {
    api.get("/anime/" + props.id + "/genres").then((genre) => {
      const data = genre.data.data;
      setAnimeGenre(data[0].attributes.name);
    });
    api.get("/manga/" + props.id + "/genres").then((genre) => {
      const data = genre.data.data;
      if (data.length !== 0) {
        setMangaGenre(data[0].attributes.name)
      } else {
        return setMangaGenre(NaN);
      }
    });
  }, []);

  const consoleTest = () => {};

  return (
    <div className="card">
      <img src={props.image} alt="" onClick={consoleTest} />
      <h2>
        {props.name !== undefined || null ? props.name : props.nameAlternative}
      </h2>
      <div className="card-status">
        <span className="genre">{mangaGenre}</span>
        <span className="date">{props.date}</span>
        <span className="status">{props.status}</span>
      </div>
    </div>
  );
};

export default Card;
