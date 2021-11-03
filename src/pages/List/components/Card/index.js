import "./style.css";

const Card = (props) => {
  const consoleTest = () => {};

  return (
    <div className="card">
      <img src={props.image} alt="" onClick={consoleTest} />
      <h2>
        {props.name !== undefined ? props.name : props.nameAlternative}
      </h2>
    </div>
  );
};

export default Card;
