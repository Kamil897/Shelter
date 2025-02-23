import s from "./Header.module.scss";
import DecryptedText from "../DecryptedText/DecryptedText";
import SplashCursor from "../SplashCursor/SplashCursor";


function Header () {
    return (
      <>
      <nav className={s.navbar}>
        <ul>
          <li>
            <a href="#about">
              <DecryptedText text="About Us" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a href="#animals">
              <DecryptedText text="Our Animals" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a href="#store">
              <DecryptedText text="Our Store" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a href="/404">
              <DecryptedText text="Contact" animateOn="view" revealDirection="center" />
            </a>
          </li>
        </ul>
      </nav> 
      
      <div className={s.hero}>
        <div className={s.content}>
          <h1>
            <DecryptedText text="Happiness is closer" animateOn="view" revealDirection="center" />
            <br />
            <DecryptedText text="than you think" animateOn="view" revealDirection="center" />
          </h1>
          <button className={s.button}>
            <DecryptedText text="Let's Go!" animateOn="view" revealDirection="center" />
          </button>
        </div>
        <div className={s.backgroundShapes}>
          <div className={s.circlePink}></div>
          <div className={s.circlePurple}></div>
          <img
            src="dog_head.png"
            alt="Happy Dog"
            className={s.dogImage}
          />
        </div>
      </div>
      <SplashCursor />
      </>
    );
}

export default Header;
