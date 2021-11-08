import { useEffect, useState } from "react";
import "./style.css";
import api from "../../../../services/api";

const Card = (props) => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    console.log();
    api.get("/" + props.screen + "/" + props.id + "/genres").then((genre) => {
      const data = genre.data.data;
      if (data.length !== 0) {
        setGenre(data[0].attributes.name);
      } else {
        return setGenre(NaN);
      }
    });
  }, []);

  const consoleTest = () => {};

  return (
    <div className="card">
      <img src={props.image} alt="" onClick={consoleTest} />
      <h2>
        {props.name !== undefined && null ? props.name : props.nameAlternative}
      </h2>
      <div className="card-status">
        <span className="genre">{genre}</span>
        <span className="date">{props.date}</span>
        <span className="status">{props.status}</span>
      </div>
    </div>
  );
};

export default Card;
