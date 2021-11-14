import Navbar from "../../components/navbar";
import Card from "./components/Card";
import "./style.css";
import qs from 'qs'
import api from "../../services/api";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Searchbar from "./components/Serchbar";

const List = (props) => {
  const LIMIT = 10;
  const [screen, setScreen] = useState([]);
  const [offset, setOffset] = useState(0);
  const [maxItens, setMaxItens] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const query = {
      page: {
        limit: LIMIT,
        offset,
      }
    };

    if (text) {
      query.filter = {
        text
      };
    }

    const url = props.screen + "?";
    api.get(url+qs.stringify(query)).then((response) => {
      const res = response.data.data;
      setMaxItens(response.data.meta.count)
      let scopeFilter = [];

      res.map((anime) => {
        return scopeFilter.push({
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
  }, [offset, props.screen, text]);

  return (
    <>
      <Navbar />
      <Searchbar onChange={e => setText(e.target.value)}/>
      <div className="list">
        {screen.map((anime) => {
          return <Card key={anime.id} {...anime} screen={props.screen} />;
        })}
      </div>

      <Pagination 
      limit={LIMIT} 
      total={maxItens} 
      offset={offset}
      setOffset={setOffset}
      />
    </>
  );
};

export default List;
