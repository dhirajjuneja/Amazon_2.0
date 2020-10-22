import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="The new book written by me"
          price={12.44}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="2"
          title="Home & Kitchen›Kitchen & Home Appliances›Vacuum, Cleaning & Ironing›Pressure Washers, Steam & Window Cleaners›BLACK+DECKER Flow Rate Pressure Washer for Car wash and Home use"
          price={120.44}
          image="https://images-na.ssl-images-amazon.com/images/I/71rzRKUQmIL._SY606_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="The new book written by me"
          price={12.44}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="4"
          title="Home & Kitchen›Kitchen & Home Appliances›Vacuum, Cleaning & Ironing›Pressure Washers, Steam & Window Cleaners›BLACK+DECKER Flow Rate Pressure Washer for Car wash and Home use"
          price={120.44}
          image="https://images-na.ssl-images-amazon.com/images/I/71rzRKUQmIL._SY606_.jpg"
          rating={5}
        />
        <Product
          id="5"
          title="The new book written by me"
          price={12.44}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">{/* Product */}</div>
      <Product
        id="6"
        title="Home & Kitchen›Kitchen & Home Appliances›Vacuum, Cleaning & Ironing›Pressure Washers, Steam & Window Cleaners›BLACK+DECKER Flow Rate Pressure Washer for Car wash and Home use"
        price={120.44}
        image="https://images-na.ssl-images-amazon.com/images/I/71rzRKUQmIL._SY606_.jpg"
        rating={5}
      />
    </div>
  );
}

export default Home;
