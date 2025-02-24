import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
