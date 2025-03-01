import s from "./Footer.module.scss";
import { FaPaw } from "react-icons/fa";

const Footer = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

  return (
    <footer className={s.footer}>
      <div className={s.footer_content}>
        <div className={s.logo}>
          <FaPaw className={s.paw_icon}/>
          <span>SHELTER</span>
        </div>
        <nav className={s.footer_nav}>
          <a onClick={() => scrollToSection("about")}>About Us</a>
          <a onClick={() => scrollToSection("animals")}>Our Animals</a>
          <a onClick={() => scrollToSection("store")}>Our Store</a>
          <a onClick={() => scrollToSection("contacts")}>Contact</a>
        </nav>
      </div>
      <div className={s.footer_bottom}>
        <p>&copy; {new Date().getFullYear()} Shelter. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
