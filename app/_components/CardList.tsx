import React from "react";
import Card from "./Card";
import { IRobot } from "../page";

type CardListProps = {
  error: string;
  robots: Array<IRobot>;
};

const CardList = ({ error, robots }: CardListProps) => {
  if (error.length !== 0) {
    throw new Error();
  }
  return (
    <div>
      {robots.map((robot) => {
        return <Card robot={robot} key={robot.id} />;
      })}
    </div>
  );
};

export default CardList;
