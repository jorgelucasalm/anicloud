import React from "react";
import "./style.css";
import icon from '../../../../assets/img/search.png';

const Searchbar = (props) => {
  return (
    <div className="searchbar">
    <label htmlFor="">
      <img src={icon} alt="Icon" className="icon"/>
      <input type="text" placeholder="Pesquisar" onChange={props.onChange}/>
    </label>
    </div>
  );
};

export default Searchbar;
