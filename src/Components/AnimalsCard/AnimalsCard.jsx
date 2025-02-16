import React from "react";
import s from "./AnimalsCard.module.scss";

const AnimalsCard = ({ pet }) => {
  return (
    <div className={s.petCard}>
      <img src={pet.image} alt={pet.name} className={s.petImage} />
      <div className={s.petInfo}>
        <h3>{pet.name} ({pet.gender})</h3>
        <p>{pet.age} {pet.age > 1 ? "years" : "year"}</p>
        <p className={s.petBreed}>{pet.breed}</p>
      </div>
    </div>
  );
};

export default AnimalsCard;
