import Navbar from "../../components/navbar";
import Card from "./components/Card";
import "./style.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

/*
useEffect(() => {
  api.get("").then((response) => {
    setAnimes(response.data.data);
  });
}, []);
*/

const List = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      const res = response.data.data;
      let scopeFilter = [];
      res.map((anime) => {
        scopeFilter.push({
          id: anime.id,
          name: anime.attributes.titles.en,
          nameAlternative: anime.attributes.titles.en_jp,
          image: anime.attributes.posterImage.small,
        });
      });
      setAnimes(scopeFilter);
    });
  }, []);

  return (
    <>
      <Navbar />
      {}
      <div className="list">
        {animes.map((anime) => {
          return <Card key={anime.id} {...anime}/>;
        })}
      </div>
    </>
  );
};

export default List;
