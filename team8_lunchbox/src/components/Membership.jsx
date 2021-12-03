import React from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import bronze from "../assets/bronzecard.JPG";
import gold from "../assets/goldcard.JPG";
import silver from "../assets/silvercard.JPG";

export default function Membership() {
  const data = [
    {
      id: 1,
      image: gold,
      name: "Gold",
      price: "$10.95/pcs",
      details: "Gold Membership Details",
    },
    {
        id: 2,
        image: silver,
      name: "Dimond",
      price: "$5.5/pcs",
      details: "Dimond Membership Details",
    },
    {
        id: 3,
        image: bronze,
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
                <img className="image" src={value.image} alt="" />
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

const Section = styled.section`
  ${TitleStyles};
  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    margin-left: 20rem;
    .item {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      width: max-content;
      height: max-content;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 30rem;
          width: 20rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .items {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .items {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;