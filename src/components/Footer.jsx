//Author: Deep Patel
//Description: To setup about us page

import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import styled from "styled-components";
import Deep from "../assets/avatar1.jpg";
import Janvi from "../assets/avatar2.jpg";
import Preetham from "../assets/avatar3.png";
import Divyansh from "../assets/avatar4.png";
import Aditya from "../assets/avatar5.png";
import { imageZoomEffect } from "./ReusableStyles";

//Footer contains business 
export default function Footer() {

  const data = [
    {
      id: 1,
      image: Deep,
      firstname: "Deep",
      lastname: "Patel",
    },
    {
      id: 2,
      image: Janvi,
      firstname: "Janvi",
      lastname: "Patel",    },
    {
      id: 3,
      image: Preetham,
      firstname: "Preetham",
      lastname: "Tikkavarapu",
      
    },
    {
      id: 4,
      image: Divyansh,
      firstname: "Divyansh",
      lastname: "Vyas",
    },
    {
      id: 5,
      image: Aditya,
      firstname: "Aditya",
      lastname: "Arora",
    },
  ];

  //This section contains about us page design and contact information
  return (
    <div className="footer">
      <Section id="footer_element">
        
        <div className="container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <h2> "Fresh, Seasonal & Home-cooked" </h2>
          <p>
              
              Our menu is a wonderful mix of healthy nutritions with classic alongside exciting dishes inspired by the 
              food of Raymond food. You can enjoy the lunch menu by chef's special menu. Your idea about
              dishes are also welcomed.To stay up to date with our latest menus, news, offers &events, 
              sign up to our mailing list.


            We provide the test of home on your doorsteps.
            To contact us reach out to us through our online 
            plateforms through Twiter, Facebook, and Whatsapp
          </p>
        </div>

        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+1 (902)-412-8167</p>
          <p>lunchboxteam@gmail.com</p>
          <p>@theLunchbox</p>
          <p>1991 Brunswick Street, Halifax, NS, Canada</p>
        </div>

        <div style={{textAlign: "center", align:"center"}}>
          <div className="title">
            <h1>Team Members</h1>
          </div>
          <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <ul>
          {data.map((value) => (
            <div>
              <li>
                <div className="items">
                <div className="item">
                    <img className="image" src = {value.image} alt=""></img>
                </div>
                </div>
                </li>
                <p>{value.firstname}</p>
                <p>{value.lastname}</p>
            </div>
          ))}
          </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

        </div>

        <div className="brand container">
          <p>
            Contact us and reach out to us through our online 
            plateforms of Instagram, Facebook, LinkedIn and Twiter.
          </p>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2021 <span>The Lunchbox</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

//Styling for the about us page section
const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10vw;
  padding: 4vw;
  row-gap: 5vw;
  column-gap: 10rem;
  
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 1rem;
      border-radius: 1rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }

  ${imageZoomEffect};
  
  .image {
    max-height: 15rem;
    overflow: hidden;
    border-radius: 1rem;
    img {
      height: 15rem;
      width: 10rem;
      object-fit: cover;
    }
  }
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      text-align: center;

      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;

