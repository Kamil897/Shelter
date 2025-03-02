import s from "./MainPage.module.scss";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import Animals from "../Animals/Animals";
import Store from "../Store/Store";
import Contact from "../Contact/Contact";
import ImageTrail from "../ImageTrail/Image_Trail";
import DecryptedText from "../DecryptedText/DecryptedText";
import CircularGallery from "../CircularGallery/CircularGallery";
// import ScrollReveal from "../ScrollReveal/ScrollReveal";

const benefits = [
  {
    id: 1,
    title: "Помощь людям и животным",
    text: "Наш проект создан, чтобы спасать животных и поддерживать приюты. Мы помогаем питомцам найти любящих хозяев, а людям — обрести верных друзей.",
    image: "/about_dog.jpg",
    color: "#dec1e9",
  },
  {
    id: 2,
    title: "СОЦИАЛИЗАЦИЯ ЖИВОТНЫХ",
    text: "Многие животные нуждаются в заботе и общении, чтобы стать более доверчивыми и адаптированными. Мы создаем условия, где они получают внимание, любовь и шанс на новую жизнь в семье.",
    image: "/about_cat.jpg",
    color: "#7383d9",
  },
  {
    id: 3,
    title: "ПОДДЕРЖКА ПРИЮТОВ",
    text: "Приюты ежедневно борются за спасение бездомных животных, и наша цель — помочь им в этом. Мы организуем сборы, обеспечиваем необходимыми ресурсами и привлекаем волонтеров.",
    image: "/dog_cat.jpg",
    color: "#c97e54",
  },
];

function MainPage () {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHidden(window.innerWidth <= 1441);
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    
      <div className={s.Wrapper}>
          <section className={s.aboutUs} id="about">
              <div className={s.imageWrapper}>
                  <img src="/about.png" alt="Charlie the dog" className={s.dogImage} />
                  <h2 className={s.title}>
                      <DecryptedText text="О нас" animateOn="view" revealDirection="center" />
                  </h2>
                  <div className={s.textBox}>
                      <DecryptedText 
                          text="Меня зовут Чарли, и я расскажу вам о нашем проекте!" 
                          animateOn="view" 
                          revealDirection="center" 
                      />
                  </div>
              </div>

              {benefits.map((benefit, index) => (
                
                  <div key={benefit.id} className={s.benefit}>
                      <div
                          className={s.number}
                          style={{ backgroundColor: benefit.color, left: isHidden ? "auto" : index % 2 === 0 ? "170px" : "1250px", display: isHidden ? "none" : "flex"}}
                      >
                          <DecryptedText text={String(benefit.id)} animateOn="view" revealDirection="center" />
                      </div>

                      <div 
                          className={s.content} 
                          style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
                      >
                          <div
                              className={s.image}
                              style={{ backgroundImage: `url(${benefit.image})` }}
                          />
                          <div className={s.text}>
                              <h2>
                                  <DecryptedText 
                                      text={benefit.title} 
                                      animateOn="view" 
                                      revealDirection="center"
                                  />
                              </h2>
                              <p>
                                  <DecryptedText 
                                      text={benefit.text} 
                                      animateOn="view" 
                                      revealDirection="center"
                                  />
                              </p>
                          </div>
                      </div>
                  </div>
              ))}
          </section>


            <section className={s.Animals}  id="animals">
                <Animals />
            </section>

            <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
                <ImageTrail
                    key="image-trail"
                    items={[
                        'https://s0.rbk.ru/v6_top_pics/media/img/6/17/346932244082176.webp',
                        'https://avatars.mds.yandex.net/get-mpic/5242361/img_id1307181978180312129.jpeg/orig',
                        'https://avatars.mds.yandex.net/i?id=5b10868bb42c3ff3821ec71af1cb0449_l-4770953-images-thumbs&n=13',
                        'https://avatars.mds.yandex.net/i?id=015f42c7410f0563d2264b7b17787474b2dcfc3b-5516188-images-thumbs&n=13',
                        'https://avatars.mds.yandex.net/i?id=cab2cd2fd7d4a93ea01ec38e01946078_l-5357509-images-thumbs&n=13',
                        'https://avatars.mds.yandex.net/i?id=409c00831c1d3fb3c5e712e67597eb7bb31c923d-13268389-images-thumbs&n=13',
                        'https://avatars.mds.yandex.net/i?id=a091a194ec373b787a986a95cebf3a1070ca11d8-8249078-images-thumbs&n=13',
                        'https://avatars.mds.yandex.net/i?id=ae0521f7a56e37beaa15c3469ab4c338e350c501-4453150-images-thumbs&n=13',
                        'https://priyot.vercel.app/house1.png',
                        'https://priyot.vercel.app/house2.png',
                        'https://priyot.vercel.app/house3.png',
                        'https://priyot.vercel.app/house4.png',
                        'https://priyot.vercel.app/house7.png',
                    ]}
                    variant={1}
                />
            </div>

            <section className={s.Store}  id="store">
                <Store />
            </section>

            <section className={s.volunteerGallery}>
              <div className={s.galleryWrapper}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
              </div>

              <div className={s.volunteer}>
                <h2>Стать волонтером</h2>
                <p>Хотите помочь приютам? Присоединяйтесь к нашей команде волонтеров!</p>
                <StyledWrapper>
                  <a
                    href="https://forms.gle/v99K38Q2wvRScR4EA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Подать заявку
                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </StyledWrapper>
              </div>
            </section>

            <section className={s.Contact}  id="contacts">
              <Contact/>
            </section>
        </div>
    )
}

const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: rgb(0 107 179);
    text-decoration: none;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    cursor: pointer;
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .button:hover .icon {
    transform: translate(4px);
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }`;

export default MainPage;
