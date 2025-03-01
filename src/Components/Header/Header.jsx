import s from "./Header.module.scss";
import DecryptedText from "../DecryptedText/DecryptedText";
// import SplashCursor from "../SplashCursor/SplashCursor";


function Header () {
    const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
      <nav className={s.navbar}>
        <ul>
          <li>
            <a onClick={() => scrollToSection("about")}>
              <DecryptedText text="About Us" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a onClick={() => scrollToSection("animals")}>
              <DecryptedText text="Our Animals" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a onClick={() => scrollToSection("store")}>
              <DecryptedText text="Our Store" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a onClick={() => scrollToSection("contacts")}>
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
      </>
    );
}

export default Header;
