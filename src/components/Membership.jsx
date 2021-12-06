//Author: Janvi Patel
//Description: Membership offered to user gold, silver, bronze

import React from 'react'
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from "axios";
import {useEffect,useState}  from "react";

//Several discount offers, buy one get one, free delivery and pricing options are provided
//This function performs two tasks 1. to fetch membership information and 2. to store membership information for a particular customer
export default function Membership() {

  const [membershipDetails, setMembershipDetails] = useState([]);   //set value to pass the membership plan chosen by user
  
  //useEffect to run this section when page loading is being processed
  useEffect ( () => {
      axios.post("https://hlyq9ayun6.execute-api.us-east-1.amazonaws.com/default/LamdaMembership",JSON.stringify({data: 'membership'}))
        .then((response) => {
          setMembershipDetails(response.data);
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }, []); 

  //To store membership details for the particular user
  const handleStoreData =  (event) => {
      axios.post("https://bzs3fsb316.execute-api.us-east-1.amazonaws.com/default/LambdaCustomerMembership",JSON.stringify({data: event})).then((response) => {
          alert.message('Successfully stored data into database');
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }

  //UI design for the membership section that provides 3 options, information and selection choice
  return (
    <Section id = "membership">
      <div className="container">
        <div className="title">
          <h1>
            <span>Membership</span> Plans
          </h1>
      <div className="items" >
        {
          membershipDetails.map((value) => {
            return (
              <div className="items">
                <div className="item">
                  <img className="image" src={value.URL} alt="" />
                <h2>{value.name}</h2>
                <p>{value.detail1}</p>
                <p>{value.detail2}</p>
                <p>{value.detail3}</p>
                <h3>${value.price}/month</h3>
                <button onClick = {() => {handleStoreData(value.id)}}>Buy Now</button>
              </div>
              </div>
            );
          })
        }
      </div>
      </div>
      </div>
    </Section>
  );
}

//styling for the membership page
const Section = styled.section`
  ${TitleStyles};
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;  
  ${TitleStyles};
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
  .items {
    inline-size: 25rem;
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
