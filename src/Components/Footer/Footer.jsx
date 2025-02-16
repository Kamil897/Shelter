import React from "react";
import DecryptedText from "../DecryptedText/DecryptedText";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.contactContainer}>
      <div className={s.imageWrapper}>
        <img src="/about.png" alt="Charlie" className={s.dogImage} />
        <h2 className={s.title}>
          <DecryptedText text="CONTACTS" animateOn="view" revealDirection="center" />
        </h2>
        <div className={s.textBox}>
          <DecryptedText 
            text="Thank you for the company it was a pleasure to meet you! 
                  Here you can leave your phone number to contact our operator 
                  and also help our project with a donation" 
            animateOn="view" 
            revealDirection="center" 
          />
        </div>
      </div>

      <form className={s.contactForm}>
        <label>
          <DecryptedText text="Enter your phone number" animateOn="view" revealDirection="center" />
        </label>
        <input type="text" placeholder="Number" className={s.inputField} />

        <label>
          <DecryptedText text="You can also give us your email to receive news" animateOn="view" revealDirection="center" />
        </label>
        <input type="email" placeholder="E-mail" className={s.inputField} />

        <button type="submit" className={s.sendButton}>
          <DecryptedText text="SEND" animateOn="view" revealDirection="center" />
        </button>
      </form>

      <footer className={s.footer}>
        <DecryptedText text="st. Industrial, 3. Ivano-Frankivsk, Ivano-Frankivsk region" animateOn="view" revealDirection="center" />
      </footer>
    </div>
  );
};

export default Footer;
