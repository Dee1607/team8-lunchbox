import React from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from "axios";
import {useEffect,useState}  from "react";

export default function Testimonials() {

  const [testimonials, settestimonials] = useState([]);
  
  useEffect ( () => {
      axios.post("https://wqw4fz1nqd.execute-api.us-east-1.amazonaws.com/default/LambdaTestimonials",JSON.stringify({data: 'testimonials'}))
        .then((response) => {
          settestimonials(response.data);
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }, []); 

  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>

 
          {testimonials.map((value) => {
                return (
                  <div className="testimonials">
                  <div className="testimonial">
                  	<div className="image">
                      <img src={value.URL} alt=""></img>
                    </div>
                    <div></div>
                    <p>"{value.feedback}"</p>
                 </div>
                </div>
                );
              })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
      margin-top: 3rem;
      .testimonial {
        display: contents;
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
          line-height: 3rem;
          letter-spacing: 0.1rem;
          align-self: center
        } 
      }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 15rem;
            padding-left: 10rem;
            width: 15rem;          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;

