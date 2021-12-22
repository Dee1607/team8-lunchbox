//Author: Janvi Patel
//Description: Membership offered to user gold, silver, bronze

import React from 'react'
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from "axios";
import {useEffect,useState}  from "react";
import '../css/payment.css';

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
      paymentHandler();
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }

  const [visibilityStatus,setVisibilityStatus] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  //status is displayed when the payment is successfully done
  const showMessageHandler = async () => {
    setShowMessage("Payment Successful. Your order will be there in 10 minutes." );

    await delay(3000);
    setShowMessage(false);
    setVisibilityStatus(false);
  }
  const paymentHandler = () => setVisibilityStatus(true)

  const Payment = () => (
      <Section id="orders">
        <div className="container">

        <div>
        <div style={{margin:"100px",marginTop:"0px" ,marginBottom:"10px", backgroundColor:"beige"}}>
            <table width="100%"> 
            <tr>
                <th>
                    <div className="image"> <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" width="300px"></img> </div>
                    <div> <label for="">**** **** **** 9999</label> </div>
                    <div> <small><span>Expiry: </span><span>10/27</span></small> <small><span>Name:</span><span> Patel</span></small> </div>
                </th>
                <th>
                    <div className="image"> <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png" width="300px"></img> </div>
                    <div> <label>**** **** **** 8888</label> </div>
                    <div> <small><span>Expiry: </span><span>10/27</span></small> <small><span>Name:</span><span> Patel</span></small> </div>
                </th>
                <th>
                    <div className="image"> <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png" width="300px"></img> </div>
                    <div> <label>**** **** **** 7777</label> </div>
                    <div> <small><span>Expiry: </span><span>10/27</span></small> <small><span>Name:</span><span> Patel</span></small> </div>
                </th>
            </tr>
            </table>
        </div>
        <div className="container">
        <div className="card p-3">
            <div className="title">
                <h2>
                    <span>CREDIT CARD </span>
                </h2>
            </div>
            <div className="collapse show p-3 pt-0" id="collapseExample">
                <div className="row">
                    <div className="col-lg-7">
                        <form action="" className="form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form__div"> <input type="text" className="form-control"></input> <label className="form__label">Card Number</label> </div>
                                </div>
                                <div className="col-6">
                                    <div className="form__div"> <input type="text" className="form-control"></input> <label className="form__label">MM / yy</label> </div>
                                </div>
                                <div className="col-6">
                                    <div className="form__div"> <input type="password" className="form-control"></input> <label className="form__label">cvv code</label> </div>
                                </div>
                                <div className="col-12">
                                    <div className="form__div"> <input type="text" className="form-control"></input> <label className="form__label">name on the card</label> </div>
                                </div>
                                <div style={{paddingBottom:"1rem"}}></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="items">
                <div className="item">
                  <div style={{paddingTop:"2rem"}}></div>
                    <button type="submit" className="button" onClick={() => {showMessageHandler()}}>Make Payment</button>
                    <p style={{backgroundColor:"#cbffc0"} }>{showMessage}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </Section>
  )

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
                      <div style={{paddingBottom:"2rem"}}></div>
                    </div>
                  </div>
                );
              })
            }
          </div >
          <div > { visibilityStatus ?  <Payment /> : null}</div>

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
      padding-top: 10px;
      padding-right: 100px;
      padding-left: 100px;
      padding-bottom: 20px;
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
