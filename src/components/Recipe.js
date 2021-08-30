import React from "react";
import Sample from "../assets/sample.jpg";

const Recipe = () => {
  return (
    <div>
      <h2>Chicken Curry</h2>
      <ul>
        <li>1. 사오기</li>
        <li>2. 자르기</li>
        <li>3. 끓이기</li>
        <li>4. 완성</li>
      </ul>
      <p>칼로리 : 10000</p>
      <img src={Sample} alt='' />
    </div>
  );
};

export default Recipe;
