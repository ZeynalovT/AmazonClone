import React from "react";
import "./home.css";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://3wxey21j4ntnaj0pm6r371aq-wpengine.netdna-ssl.com/wp-content/uploads/sites/6/2020/06/2375B_Banner1_WAVE_2048x497.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
          id='123123'
          title='The lean Startap'
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51qnTcYwBcL._SX331_BO1,204,203,200_.jpg'
          rating={5}
           />
          <Product
          id='432351'
          title='Kenwood kMix Stand Mixer for Baking'
          price={239.0}
          image='https://images-na.ssl-images-amazon.com/images/I/71tmMa0cVHL._SX425_.jpg'
          rating={4}
           />
        </div>
        <div className="home__row">
          <Product
          id='643234'
          title='iphone (aasd63462) - amazone Apple'
          price={1030.0}
          image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000'
          rating={3}
           />
          <Product
          id='125783'
          title='Amazon echo speaker  with Alexa'
          price={98.20}
          image='https://images-na.ssl-images-amazon.com/images/I/61tSl8KvEGL._AC_SX425_.jpg'
          rating={5}
          />
          <Product
          id='752342'
          title='New Apple Ipad Pro (123dfd798696) - Silver'
          price={591.93}
          image='https://st3.depositphotos.com/1098692/18419/i/1600/depositphotos_184191882-stock-photo-apple-ipad-pro-silver.jpg'
          rating={4}
           />
        </div>
        <div className="home__row">
          <Product
          id='214754'
          title='Samsung Monitor GHASD(1231536)Matte dark blue Black FHD surved'
          price={1299.93}
          image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg'
          rating={5}
           />
        </div>
      </div>
    </div>
  );
};

export default Home;
