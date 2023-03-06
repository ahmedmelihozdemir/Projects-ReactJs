import React, { FC } from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col border border-black m-2 p-2 rounded-md">
      <h1>Title:{title}</h1>
      <p>Description:{description}</p>
    </div>
  );
};

export default Card;
