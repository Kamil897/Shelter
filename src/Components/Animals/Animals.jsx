import React from "react";
import AnimalsCard from "../AnimalsCard/AnimalsCard";
import DecryptedText from "../DecryptedText/DecryptedText";
import s from "./Animals.module.scss";

const pets = [
  { name: "Gary", gender: "male", age: 3, breed: "Yorkshire Terrier", image: "/public/cards/gary.jpg" },
  { name: "Moon", gender: "female", age: 1, breed: "Siberian Cat", image: "/public/cards/moon.png" },
  { name: "Spike", gender: "male", age: 2.5, breed: "Maine Coon", image: "/public/cards/spike.png" },
  { name: "Peach", gender: "male", age: 5, breed: "Half Breed", image: "/public/cards/peach.png" },
  { name: "Willie", gender: "female", age: 0.5, breed: "Samoyed", image: "/public/cards/willie.png" },
  { name: "Kiwi", gender: "male", age: 4, breed: "Yorkshire Terrier", image: "/public/cards/kiwi.png" },
  { name: "Whitney", gender: "female", age: 5, breed: "British Longhair", image: "/public/cards/white.png" },
  { name: "Buggy", gender: "male", age: 7, breed: "Jack Russell Terrier", image: "/public/cards/buggi.png" },
  { name: "Cake", gender: "male", age: 2, breed: "Welsh Corgi", image: "/public/cards/cake.png" },
];

const Animals = () => {
  return (
    <div className={s.petsContainer}>
      <div className={s.imageWrapper}>
        <img src="/about.png" alt="Charlie" className={s.dogImage} />
        <h2 className={s.title}>
          <DecryptedText text="OUR ANIMALS" animateOn="view" revealDirection="center" />
        </h2>
        <div className={s.textBox}>
          <DecryptedText text="And now I'll introduce you to our pets" animateOn="view" revealDirection="center" />
        </div>
      </div>

      <div className={s.petsGrid}>
        {pets.map((pet, index) => (
          <AnimalsCard key={index} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Animals;
