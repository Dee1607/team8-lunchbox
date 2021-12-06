import React from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import {useState}  from "react";

export default function MealPlanner() {

  const [visibilityStatus,setVisibilityStatus] = useState("");

  const paymentHandler = () => {
    setVisibilityStatus("Order is placed. Estimated Delivery in 20 minutes." );
  }
  return (
    <Section id="orders">
    <div className="container">
      <div className="title">
        <h1>
          <span>Meal</span> Planner
        </h1>
      </div>
      <div className="items">
      <table className="tableStyle">
            <tr>
            <th>#</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
            </tr>

            <tr>
                <th>Chef's Special</th>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
            </tr>
            <tr>
                <th>Nutrician Based</th>
                <td><a href="#menu">Select Nutricians</a></td>
                <td><a href="#menu">Select Nutricians</a></td>
                <td><a href="#menu">Select Nutricians</a></td>
                <td><a href="#menu">Select Nutricians</a></td>
                <td><a href="#menu">Select Nutricians</a></td>
                <td><a href="#menu">Select Nutricians</a></td>
                <td><a href="#menu">Select Nutricians</a></td>

            </tr>
            <tr>
                <th>Selected From Menu</th>
                <td><a href="#menu">Select Item</a></td>
                <td><a href="#menu">Select Item</a></td>
                <td><a href="#menu">Select Item</a></td>
                <td><a href="#menu">Select Item</a></td>
                <td><a href="#menu">Select Item</a></td>
                <td><a href="#menu">Select Item</a></td>
                <td><a href="#menu">Select Item</a></td>
            </tr>

      </table>
      <div className="items">
      <table className="tableStyle">
            <tr>
              <td><div className="submitstyle"><button onClick={() => {paymentHandler()}}>Submit</button></div></td>
            </tr>
            <tr><td>
            <p style={{backgroundColor:"#cbffc0"}}>{visibilityStatus}</p>
          </td></tr>
      </table>
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
${TitleStyles};
.submitstyle{
  text-align-last: center;
  text-align: -webkit-center;
  padding-top: 2rem;
}
  .container {
    text-align-last: center;
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
  .tableStyle{
      text-align: -webkit-center;
      table {
        border: 2;
      border-collapse: collapse;
      width: 100%;
      }
      th {
      background-color: beige;
      text-align: left;
      padding: 8px;
      }
      td {
      text-align: left;
      padding: 8px;
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
      tr:nth-child(even) {background-color: #f2f2f2;
    }
  }
  .items {
    padding-left: 3rem;
    padding-right: 3rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
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
        color: white;
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
