import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Everything you need to start your morning!</h1>
      <div className="cards___container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-11.jpg"
              text="Check if your planned outfit will work today"
              lable="Weather"
              path="/services"
            />
            <CardItem
              src="images/img-12.jpg"
              text="Should you really quit your job today?"
              lable="Horoscope"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-14.jpg"
              text="checkout the daily headlines"
              lable="News"
              path="/services"
            />
            <CardItem
              src="images/img-13.jpg"
              text="Drive or walk? maybe bike?"
              lable="Oil Prices"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
