import React from "react";
import { Link } from "react-router-dom";

//hooks
//graphQL

const Recipe = ({ title, calories, img, ingrs }) => {
  return (
    <div>
      <h2>
        <Link
          to={{
            pathname: "/details",
            state: {
              title: title,
              calories: calories,
              img: img,
              ingrs: ingrs,
            },
          }}>
          {title}
        </Link>
      </h2>
      <ul>
        {ingrs.map((ingr, i) => (
          <li key={i}>{ingr.text}</li>
        ))}
      </ul>
      <p>칼로리 : {calories}</p>
      <img src={img} alt='' />
    </div>
  );
};

export default Recipe;
