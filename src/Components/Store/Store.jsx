import s from "./Store.module.scss";
import DecryptedText from "../DecryptedText/DecryptedText";

const products = [
  { name: "Fancy Feast", type: "Cat food", price: "35$", image: "/public/Store/fancy.png" },
  { name: "Iams", type: "Cat food", price: "54$", image: "/public/Store/lams.png" },
  { name: "Nulo", type: "Cat food", price: "62$", image: "/public/Store/nulo.png" },
  { name: "Kibbles nBits", type: "Dog food", price: "28$", image: "/public/Store/kibbles.png" },
  { name: "Cesar", type: "Dog food", price: "46$", image: "/public/Store/cesar.png" },
  { name: "Happy dog", type: "Dog food", price: "76$", image: "/public/Store/happy.png" },
  { name: "Wau dog", type: "Collar for dog", price: "10$", image: "/public/Store/wau.png" },
  { name: "Wau cat", type: "Collar for cat", price: "7$", image: "/public/Store/wau_cat.png" },
  { name: "Toy", type: "For dog and cat", price: "3$", image: "/public/Store/toy.png" }
];

export default function Store() {
  return (
    <div className={s.store}>
      <div className={s.imageWrapper}>
        <img src="/about.png" alt="Charlie the dog" className={s.dogImage} />
        <h2 className={s.title}>
          <DecryptedText text="OUR STORE" animateOn="view" revealDirection="center" />
        </h2>
        <div className={s.textBox}>
          <DecryptedText 
            text="Here you can choose products for the kennel or for your dog" 
            animateOn="view" 
            revealDirection="center" 
          />
        </div>
      </div>

      <div className={s.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={s.productCard}>
            <img src={product.image} alt={product.name} className={s.productImage} />
            <div className={s.productInfo}>
              <div className={s.productName}>
                <DecryptedText text={product.name} animateOn="view" revealDirection="center" />
              </div>
              <div className={s.productType}>
                <DecryptedText text={product.type} animateOn="view" revealDirection="center" />
              </div>
              <div className={s.productPrice}>
                <DecryptedText text={product.price} animateOn="view" revealDirection="center" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
