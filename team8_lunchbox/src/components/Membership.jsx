import React from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Membership() {
  const data = [
    {
      id: 1,
      image: "",
      name: "Gold",
      price: "$10.95/pcs",
      details: "Gold Membership Details",
    },
    {
        id: 2,
        image: "",
      name: "Dimond",
      price: "$5.5/pcs",
      details: "Dimond Membership Details",
    },
    {
        id: 3,
        image: "",
      name: "Platinum",
      price: "$8/pcs",
      details: "Platinum Membership Details",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  return (
  <Section id="menu">
    <div className="title">
      <h1>
        <span>Memberships</span>
      </h1>
    </div>
          <div>
      <div className="items" style={{alignContent: "center"}}>
        {data.map((value) => {
          return (
            <div className="item">
              <div className="image">
                <img src={value.image} alt="" />
              </div>
              <h2>{value.name}</h2>
              <h3>{value.price}</h3>
              <p>{value.details}</p>
              <button onclick="handlePurchase()">Buy Now</button>
            </div>
          );
        })}
      </div>
          </div>
  </Section>
  );
}
