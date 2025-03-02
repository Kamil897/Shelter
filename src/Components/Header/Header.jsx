import s from "./Header.module.scss";
import DecryptedText from "../DecryptedText/DecryptedText";

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
              <DecryptedText text="О нас" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a onClick={() => scrollToSection("animals")}>
              <DecryptedText text="Наши питомцы" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a onClick={() => scrollToSection("store")}>
              <DecryptedText text="Наш магазин" animateOn="view" revealDirection="center" />
            </a>
          </li>
          <li className={s.dot}>•</li>
          <li>
            <a onClick={() => scrollToSection("contacts")}>
              <DecryptedText text="Контакты" animateOn="view" revealDirection="center" />
            </a>
          </li>
        </ul>
      </nav> 
      
      <div className={s.hero}>
        <div className={s.content}>
          <h1>
            <DecryptedText text="Счастье ближе, чем кажется!" animateOn="view" revealDirection="center" />
          </h1>
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
