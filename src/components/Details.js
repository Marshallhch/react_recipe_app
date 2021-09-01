import React from "react";

const Details = (props) => {
  console.log(props);
  const title = props.location.state.title;
  const img = props.location.state.img;
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt='' />
    </div>
  );
};

export default Details;
