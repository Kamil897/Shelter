import React from "react";
import AnimalsCard from "../AnimalsCard/AnimalsCard";
import DecryptedText from "../DecryptedText/DecryptedText";
import s from "./Animals.module.scss";

const pets = [
  { name: "Gary", gender: "male", age: 3, breed: "Yorkshire Terrier", image: "https://avatars.mds.yandex.net/i?id=0f2293c7f33a41e476f3da2068c854af783ba0e1-3703415-images-thumbs&n=13" },
  { name: "Moon", gender: "female", age: 1, breed: "Siberian Cat", image: "https://storage-api.petstory.ru/resize/1000x1000x80/a1/5a/5d/a15a5d1b86084b07b31d0843eb8406c3.jpeg" },
  { name: "Spike", gender: "male", age: 2.5, breed: "Maine Coon", image: "https://avatars.mds.yandex.net/i?id=8c818f4aec24084a41bc48a72449a2601c50b266-10233206-images-thumbs&n=13" },
  { name: "Peach", gender: "male", age: 5, breed: "Half Breed", image: "https://avatars.mds.yandex.net/i?id=c911b359f9e08773a3e0224690d5c74ed639d286-3858847-images-thumbs&n=13" },
  { name: "Willie", gender: "female", age: 0.5, breed: "Samoyed", image: "https://avatars.mds.yandex.net/i?id=1b0b62208862d4eeb1428679c563fc260936458f-10263675-images-thumbs&n=13" },
  { name: "Kiwi", gender: "male", age: 4, breed: "Yorkshire Terrier", image: "https://avatars.mds.yandex.net/i?id=011058b7e36eb2d073dcfeb26324c208a030ec6fe7034201-12321751-images-thumbs&n=13" },
  { name: "Whitney", gender: "female", age: 5, breed: "British Longhair", image: "https://avatars.mds.yandex.net/i?id=fc28b297b754769d2f72bf8439141ed6875083a6-10119783-images-thumbs&n=13" },
  { name: "Buggy", gender: "male", age: 7, breed: "Jack Russell Terrier", image: "https://avatars.mds.yandex.net/i?id=6bb3fefc992eab1741b64fa655d58d98b9fac2ea-4010901-images-thumbs&n=13" },
  { name: "Cake", gender: "male", age: 2, breed: "Welsh Corgi", image: "https://avatars.mds.yandex.net/i?id=4e41f25de07d96fcb7c3b86d87e2c1da-4903276-images-thumbs&n=13" },
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
