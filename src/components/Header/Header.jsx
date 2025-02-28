import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Your one stop shop for all things GRUB.</h2>
        <p>
          Enjoy your favorite meals delivered straight to your door, with the
          highest quality ingredients, lightning-fast service, and a commitment
          to making every experience delightful and hassle-free.
        </p>
        <button> View Menu</button>
      </div>
    </div>
  );
};

export default Header;
