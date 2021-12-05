import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/avatar1.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from "axios";
import {useEffect,useState}  from "react";

export default function Testimonials() {
  
  const [testimonials, settestimonials] = useState([]);
  
  useEffect ( async() => 
  {
      const data = await
      axios.post("https://wqw4fz1nqd.execute-api.us-east-1.amazonaws.com/default/LambdaTestimonials",JSON.stringify({data: 'testimonials'}))
        .then((response) => {
          console.log(response.data);
          settestimonials(response.data);
          console.log("testimonials");
          console.log(testimonials);
      }).catch((error) => {
          console.log("Eroor")
      })
  }, []); 
  
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {testimonials.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.URL} alt="" />
              </div>
              <h2>{product.id}</h2>
              <h3>{product.feedback}</h3>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
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
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
