import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import api from "../../../../services/api";
import Modal from "react-modal";

const Card = (props) => {
  const [genre, setGenre] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    console.log();
    api.get("/" + props.screen + "/" + props.id + "/genres").then((genre) => {
      const data = genre.data.data;
      if (data.length !== 0) {
        setGenre(data[0].attributes.name);
        setGenres(data)
        console.log(data)
      } else {
        return setGenre("NaN");
      }
    });
  }, [props.screen, props.id]);

  const customStyles = {
    overlay: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    content: {
      backgroundColor: "#04465A",
      padding: "0 2rem 2rem 2rem",
      border: "none",
      top: "5rem",
      left: "25%",
      right: "25%",
      width: "50%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img className="modal-image" src={props.image} alt=""/>
        <h2 className="modal-title">
          {props.name !== undefined && null
            ? props.name
            : props.nameAlternative}
            
          <span className="modal-date">{props.date}</span>
        </h2>
        <h3>Classificação: <span className="modal-age">{props.age}</span></h3>
        <div className="modal-genres">
        {genres.map(item => <span className="modal-genre">{item.attributes.name}</span>)}
        <p className="modal-description">
            <h3>Sinopse:</h3>
            {props.description}
        </p>
        </div>
      </Modal>
      <div className="card">
        <img src={props.image} alt="" onClick={openModal} />
        <h2 onClick={openModal}>
          {props.name !== undefined && null
            ? props.name
            : props.nameAlternative}
        </h2>
        <div className="card-status">
          <span className="genre">{genre}</span>
          <span className="date">{props.date}</span>
          <span className="status">{props.status}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
