import React from "react";
import { IRobot } from "../page";

type CardProps = {
  robot: IRobot;
  key: number;
};

const Card = ({ robot }: CardProps) => {
  const { name, email, id } = robot;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robots"
        src={`https://robohash.org/${id}.png?size=200x200`}
        width="200"
        height="200"
      ></img>
      <div>
        <h2 className="f5">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
