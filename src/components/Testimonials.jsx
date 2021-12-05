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
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>

        <div className="items" style={{alignContent: "center"}}>
        {
         
        }

      </div>

        <div className="testimonials">
          <div className="testimonial"> {
              testimonials.map((value) => {
                return (
                  <div className="item">
                    <div>
                      <img className="image" src={value.URL} alt="" />
                    </div>
                    <h2>{value.id}</h2>
                    <p>{value.feedback}</p>
                  </div>
                );
              })}
          </div>
        </div>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
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