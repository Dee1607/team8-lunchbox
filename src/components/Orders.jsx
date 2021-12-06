//Author: Deep Patel
//Description: To get feedback from users and store to the database for showcasing testimonials afterwards

import React from "react";
import {useEffect,useState}  from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from 'axios';

//to fetch the orders for the particular customer
export default function Orders() {

  //to store quantity, cost, item name and total amount of a particular bill
  const [qty, setqty] = useState([]);
  const [cost, setcost] = useState([]);
  const [name, setName] = useState([]); 
  const [total, setTotal] = useState([]); 

  //API call when the page is loaded
  useEffect ( () => {
      axios.post("https://f3q5gfquml.execute-api.us-east-1.amazonaws.com/default/LambdaOrderRetrive",JSON.stringify({data: "0"}))
        .then((response) => {

          //Regex matching to fetch the pricing from the string
          var qtytxt = response.data[0].qty;
          var qtynum = qtytxt.match(/\d/g);
          setqty(qtynum);

          var costtxt = response.data[0].costperitem;
          var costnum = costtxt.match(/\d/g);
          setcost(costnum);

          setName(response.data[0].ordername)
          
          setTotal(response.data[0].total);
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }, []);

  const [visibilityStatus,setVisibilityStatus] = useState("");

  //status is displayed when the payment is successfully done
  const paymentHandler = () => {
    setVisibilityStatus("Order is placed. Estimated Delivery in 20 minutes." );
  }

  return (
    <Section id="orders">
    <div className="container">
      <div className="title">
        <h1>
          <span>Order</span> List
        </h1>
      </div>
      <div className="items">
      <table className="tableStyle">
            <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            </tr>

            {name.map(( listValue, index ) => {
            return (
            <tr key={index}>
                <td>{listValue}</td>
                <td>{qty[index]}</td>
                <td>{cost[index]}</td>
            </tr>
          );  
        })}
      </table>
      <div className="paymentstyle">
        <div className="item">
          <p>Total: {total}</p> 
          <button className="button" onClick={() => {paymentHandler()}}>Pay</button>
          <p style={{backgroundColor:"#cbffc0"}}>{visibilityStatus}</p>
          </div>
        </div>
      </div>
    </div>
    </Section> 
  );
}

//styling for order page
const Section = styled.section`
margin: 5vw;
background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
padding: 0.2rem;
border-radius: 1.5rem;
position: relative;  
${TitleStyles};
.paymentstyle{
  text-align: -webkit-center;
  padding-top: 2rem;
}
  .container {
    display: block;
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
