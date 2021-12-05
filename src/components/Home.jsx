import React from "react";
import styled from "styled-components";
import home1 from "../assets/Services1.png";
import home2 from "../assets/Services2.png";
import home3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Home() {
  return (
    <Section id="home">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
        <p>
            The Lunchbox is a Home-made food delivery system. We provide food full of taste of your home and full of nutricians.
        </p>
      </div>
      <div className="home">
        <div className="service">
          <img src={home2} alt="" />
          <p>
            We have supervised caterares at our service to prepare healthy food with a taste just as you like.
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={home1} alt="" />
          <p>
            We bring food to your doorstep wrapped inside a lunchbox with love.
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={home3} alt="" />
          <p>
            We also provide premium home for nutricians's support, free deliveries and more offers.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
padding: 5rem;
  margin: 2rem 4rem;
  ${TitleStyles};
  .home {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      background-color: aliceblue;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 2rem;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
        
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .home {
      grid-template-columns: 1fr;
    }
  }
`;

