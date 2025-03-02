import React from "react";
import DecryptedText from "../DecryptedText/DecryptedText";
import s from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={s.contactContainer}>
      <div className={s.imageWrapper}>
        <img src="/about.png" alt="Charlie" className={s.dogImage} />
        <h2 className={s.title}>
          <DecryptedText text="Контакты" animateOn="view" revealDirection="center" />
        </h2>
        <div className={s.textBox}>
          <DecryptedText 
            text="Thank you for the company, it was a pleasure to meet you! Here you can leave your phone number to contact our operator and also help our project with a donation." 
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
        <div className={s.socialLinks}>
          <a href="https://t.me/PriyotUzbekistana" target="_blank" rel="noopener noreferrer" className={s.telegramButton}>
            <span>Telegram</span>
          </a>
          <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer" className={s.twitterButton}>
            <span>Twitter</span>
          </a>
          <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className={s.instagramButton}>
            <span>Instagram</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
