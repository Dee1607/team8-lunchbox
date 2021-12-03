import React from "react";
// import Image from "react";
import styled from "styled-components";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg";
import "../css/bootstrap-theme.css";
import "../css/bootstrap-theme.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HorizontalGallery from 'react-dynamic-carousel'

// import "../css/bootstrap.css";
// import "../css/bootstrap.min.css";

import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { VscGear } from "react-icons/vsc";

export default function Menu() {
  const data = [
    {
      id: 1,
      image: item1,
      name: "Chickpea Sandwich",
      type: "veg",
      price: "$10.95/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },
    {
        id: 2,
      image: item2,
      type: "non-veg",
      name: "Chicken Salad",
      price: "$5.5/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },
    {
        id: 3,
      image: item3,
      name: "Turkey Sandwich",
      type: "non-veg",
      price: "$8/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },

    {
        id: 4,
      image: item4,
      type: "veg",
      name: "Mediterranean Salad",
      price: "$8.5/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },
    {
        id: 4,
      image: item4,
      name: "Mediterranean Salad",
      type: "veg",
      price: "$8.5/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
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

//   handlePurchase = () => {
//     history.push("/testimonials");
//   }

  return (
    <Section id="menu">
      <div className="title">
        <h1>
          <span>Today's</span> Menu
        </h1>
      </div>

    <HorizontalGallery
        
        tiles={data.map((value) => (
            <div>
                <div className="items">
                <div className="item">
                    <img className="image" src = {value.image} alt=""></img>
                    <h2>{value.name}</h2>
                    <p>{value.nutricians}</p>
                    <h3>{value.price}</h3>
                    <button onclick="handlePurchase()">Order now</button>
                </div>
                </div>
            </div>
        ))}
        elementWidth={230}
        minPadding={200}
    />
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
          height: 20rem;
          width: 15rem;
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

// References:
// 1. https://www.npmjs.com/package/react-responsive-carousel
// 2. 