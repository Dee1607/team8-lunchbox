//Author: Deep Patel
//Description: Menu to select dish, know about description, nutrition, pricing

import {React} from "react";
import styled from "styled-components";
import HorizontalGallery from 'react-dynamic-carousel'
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from 'axios';
import {useEffect,useState}  from "react";

//Description: This function fetch the menu items from AWS, store the order data to AWS when user choose the dish 
export default function Menu() {

  const [qty, setQty] = useState( '' );   //for user input quantity and setup the value for the quantity
  const [orders, setorders] = useState([]);   //to setup orders
  
  //to fetch menu items when the page is loaded
  useEffect ( () => {
      axios.post("https://u4roty5d36.execute-api.us-east-1.amazonaws.com/default/LambdaMenuItems",JSON.stringify({data: "0"}))
        .then((response) => {
          setorders(response.data);
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }, []); 

  //to store the data to order table
  const handleStoreData =  (value,qty) => 
  {
        axios.post("https://sv4s5x7dlb.execute-api.us-east-1.amazonaws.com/default/LambdaOrders",JSON.stringify({data: value, qty: qty, customerid: 0})).then((response) => {
        }).catch((error) => {
            console.log("Eroor",error)
        })
  }

  return (
    <Section id="menu">
    <div className="container">

      <div className="title">
        <h1>
          <span>Today's</span> Menu
        </h1>
      </div>

    <HorizontalGallery className="corosal"
        tiles={orders.map((value) => (
            <div>
                <div className="items">
                <div className="item">
                    <img className="image" src = {value.URL} alt=""></img>
                    <h2>{value.name}</h2>
                    <p>{value.nutrition}</p>
                    <h3>${value.price}/pcs</h3>
                    <lable>Quantity: </lable><input type="text" value={qty} onChange={e => setQty(e.target.value)} ></input>
                    <button onClick = {() => {handleStoreData(value,qty)}}>Buy Now</button>
                </div>
                </div>
            </div>
        ))}
        elementWidth={230}
        minPadding={200}
    />
    </div>
    </Section>
  );
}
//style for the menu section
const Section = styled.section`
margin: 5vw;
background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
padding: 0.2rem;
border-radius: 1.5rem;
position: relative;
svg {
  transition: 0.6s ease-in-out;
  color: black;
  font-size: 5rem;
}  
${TitleStyles};
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;

  }
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
