import Navbar from "../../components/navbar";
import Card from "./components/Card";
import "./style.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

const List = (props) => {
  const [screen, setScreen] = useState([]);

  useEffect(() => {
    api.get("/" + props.screen).then((response) => {
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
          date:
            anime.attributes.startDate !== null
              ? anime.attributes.startDate.substr(0, 4)
              : "NaN",
        });
      });

      setScreen(scopeFilter);
      return;
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="list">
        {screen.map((anime) => {
          return <Card key={anime.id} {...anime} screen={props.screen} />;
        })}
      </div>
    </>
  );
};

export default List;
