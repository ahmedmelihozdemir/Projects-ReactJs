import React from "react";
import Card from "./Card";

const data = [
  {
    title: "Card 1",
    description: "Card 1 description",
  },
  {
    title: "Card 2",
    description: "Card 2 description",
  },
  {
    title: "Card 3",
    description: "Card 3 description",
  },
];
function CardComponent() {
  return (
    <div>
      <h1 className="flex justify-center font-semibold text-2xl">
        Card Component
      </h1>
      <div className="flex">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardComponent;
