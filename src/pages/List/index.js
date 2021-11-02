import Navbar from "../../components/navbar";
import Card from "./components/Card";
import "./style.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

const List = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      setAnimes(response.data.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="list">
        {animes.map((anime) => {
          return <Card key={anime.id}>{anime}</Card>;
        })}
      </div>
    </>
  );
};

export default List;
