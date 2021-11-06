import Navbar from "../../components/navbar";
import Card from "./components/Card";
import "./style.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

const List = (props) => {
  const [animes, setAnimes] = useState([]);
  const [manga, setManga] = useState([]);

  useEffect(() => {
    api.get("/anime").then((response) => {
      const res = response.data.data;
      let scopeFilter = [];

      res.map((anime) => {
        scopeFilter.push({
          id: anime.id,
          name: anime.attributes.titles.en,
          nameAlternative: anime.attributes.titles.en_jp,
          image: anime.attributes.posterImage.small,
          status:
            anime.attributes.status === "finished"
              ? "Concluído"
              : "Em Andamento",
          date: anime.attributes.startDate.substr(0, 4),
        });
      });

      setAnimes(scopeFilter);

      return;
    });
  }, []);

  useEffect(() => {
    api.get("/manga").then((response) => {
      const res = response.data.data;
      let scopeFilter = [];

      res.map((manga) => {
        scopeFilter.push({
          id: manga.id,
          name: manga.attributes.titles.en,
          nameAlternative: manga.attributes.titles.en_jp,
          image: manga.attributes.posterImage.small,
          status:
            manga.attributes.status === "finished"
              ? "Concluído"
              : "Em Andamento",
          date: manga.attributes.startDate !== null ? manga.attributes.startDate.substr(0, 4) : 'NaN',
        });
      });

      setManga(scopeFilter);

      return;
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="list">
        {manga.map((anime) => {return <Card key={anime.id} {...anime} />;})}
      </div>
    </>
  );
};

export default List;
