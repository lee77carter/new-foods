import { React, useState } from "react";
import NewFoodInput from "./NewFoodInput";
import Food from "./Food";
import "./styles.css";

export default function App() {
  const [foodsToTry, setFoodsToTry] = useState([]);

  const addFoodItem = (food) => {
    setFoodsToTry([...foodsToTry, food]);
  };

  return (
    <div className="App">
      <h1>Foodie Track List</h1>
      <NewFoodInput addFoodItem={addFoodItem} />
      <ul className="food-list">
        {foodsToTry.map((food, index) => (
          <Food key={index} name={food} />
        ))}
      </ul>
    </div>
  );
}
