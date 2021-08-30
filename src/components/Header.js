import React, { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <header>
      <div className='center'>
        <h2 className='logo'>CIY</h2>
        <span className='menu' onClick={toggler}>
          {toggle ? (
            <i className='fa fa-bars'></i>
          ) : (
            <i className='fa fa-times'></i>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
