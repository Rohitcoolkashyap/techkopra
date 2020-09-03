import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logoImg" src="logo.svg" alt="" />
      </div>
      <div className="header__middle">
        <p className="header__title1">Free shipping over $2000</p>
        <div className="header__title2">30% OFF WINDOWS</div>
      </div>
      <div className="header__menu">
        <img className="header__menu__img" src="menu.svg" alt="" />
      </div>
    </div>
  );
}
