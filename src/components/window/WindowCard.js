import React from "react";

export default function WindowCard({ title, image }) {
  return (
    <div className="windowCard">
      <img className="windowCard__img" src={image} alt="" />
      <h3 className="windowCard__title">{title}</h3>
      <p className="windowCard__more">more > </p>
    </div>
  );
}
