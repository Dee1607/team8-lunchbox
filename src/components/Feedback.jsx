//Author: Janvi Patel
//Description: To get feedback from users and store to the database for showcasing testimonials afterwards

import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import axios from "axios";
import {useState}  from "react";

//Feedback function contains UI design and also a function that triggers the AWS lambda to store the feedback
export default function Feedback() {

  const [feedback, setFeedback] = useState( '' );     //declare feedback variable to store the user feedback

  //declare feedback variable to store the user feedback
  const handleStoreData =  (feedback) => {      //API call
    axios.post("https://72x5ya9782.execute-api.us-east-1.amazonaws.com/default/LambdaFeedback",JSON.stringify({data: feedback})).then((response) => {
    }).catch((error) => {
        console.log("Eroor")
    })
  }

  //setfeedback field once user enters the feedback and when press on submit button the data is being stored
  return (
    <Section id="feedback">
      <div className="title">
        <h1>
          <span>Customer </span>Feedback
        </h1>
      </div>
      <div className="container">
        <input type="text" placeholder="Provide Feedback Here..." value={feedback}
                 onChange={e => setFeedback(e.target.value)} />   
        <button onClick={e => handleStoreData(feedback)}>Submit</button>
      </div>
    </Section>
  );
}

//Styling for the feedback feature
const Section = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
