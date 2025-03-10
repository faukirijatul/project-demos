import React, { useEffect, useState } from "react";
import "../styles/meal.css";
import axios from "axios";

const Meal = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="items-container">
      {items.map(({ idMeal, strMeal, strMealThumb }) => (
        <section className="card" key={idMeal}>
          <img src={strMealThumb} alt={strMeal} />

          <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      ))}
    </div>
  );
};

export default Meal;
