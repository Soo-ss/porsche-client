import React from "react";
import "./modelStyle.scss";
import model1 from "../../../images/model1.jpg";
import model2 from "../../../images/model2.jpg";
import model3 from "../../../images/model3.jpg";
import model4 from "../../../images/model4.jpg";
import model5 from "../../../images/model5.jpg";
import model6 from "../../../images/model6.jpg";
import ModelList from "./ModelList";

function Model() {
  const carLists = [
    {
      image: model1,
      name: "718",
      price: "85,000,000 KRW 부터",
    },
    {
      image: model2,
      name: "911",
      price: "145,500,000 KRW 부터",
    },
    {
      image: model3,
      name: "Taycan",
      price: "143,100,000 KRW 부터 *",
    },
    {
      image: model4,
      name: "Panamera",
      price: "137,900,000 KRW 부터",
    },
    {
      image: model5,
      name: "Macan",
      price: "75,200,000 KRW 부터",
    },
    {
      image: model6,
      name: "Cayenne",
      price: "104,800,000 KRW 부터",
    },
  ];
  return (
    <div className="model">
      <h2>Models</h2>
      <div className="model-container">
        {carLists.map((car, index) => {
          return (
            <ModelList
              key={index}
              image={car.image}
              name={car.name}
              price={car.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Model;
