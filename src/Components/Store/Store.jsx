import s from "./Store.module.scss";
import DecryptedText from "../DecryptedText/DecryptedText";

const products = [
  { name: "Fancy Feast", type: "Cat food", price: "35$", image: "https://avatars.mds.yandex.net/i?id=22f4b72b9815e44e73d33f568c77083d61c7d703-12753086-images-thumbs&n=13" },
  { name: "Iams", type: "Cat food", price: "54$", image: "https://avatars.mds.yandex.net/i?id=acd2ef79e4dab749b4f6daf4bf72cfbf36cfe8f0-8495786-images-thumbs&n=13" },
  { name: "Nulo", type: "Cat food", price: "62$", image: "https://avatars.mds.yandex.net/i?id=5ca75fb1b8fa7ea451a7c067ab21b427dd789247-10310583-images-thumbs&n=13" },
  { name: "Kibbles nBits", type: "Dog food", price: "28$", image: "https://avatars.mds.yandex.net/i?id=c346216b7ecbe1f0b57a23746f0cb965-4568063-images-thumbs&n=13" },
  { name: "Cesar", type: "Dog food", price: "46$", image: "https://avatars.mds.yandex.net/i?id=294016fd909e5798ae5baa479ef76cfa7d2700ca-9097903-images-thumbs&n=13" },
  { name: "Happy dog", type: "Dog food", price: "76$", image: "https://avatars.mds.yandex.net/i?id=5ae7a448f5711e1c7b3a73ca69a2a20d804f739d-12842814-images-thumbs&n=13" },
  { name: "Wau dog", type: "Collar for dog", price: "10$", image: "https://avatars.mds.yandex.net/i?id=40181eb47bd502a7173c309ef49411ce0ee98a89-8922087-images-thumbs&n=13" },
  { name: "Wau cat", type: "Collar for cat", price: "7$", image: "https://avatars.mds.yandex.net/i?id=6d5b74053689dc9847d26c9cf411ac278ff050fb-5255999-images-thumbs&n=13" },
  { name: "Toy", type: "For dog and cat", price: "3$", image: "https://avatars.mds.yandex.net/i?id=17b7b64fbb97d085d7b0cc58d64a64ec6309b65a86669c50-11858942-images-thumbs&n=13" }
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
