import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.children.attributes.posterImage.small}
        alt=""
      />
      {console.log(props.children)}
      <h2>{props.children.attributes.titles.en !== undefined ? props.children.attributes.titles.en : props.children.attributes.titles.en_jp}</h2>
    </div>
  );
};

export default Card;
