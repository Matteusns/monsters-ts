import "./card-container.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const CardContainer = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className={"card-container"} key={id}>
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=2&size180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default CardContainer;
