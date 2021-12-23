//Author: Janvi Patel
//Description: To plan the meal for 7 days

import React from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import {useState}  from "react";

//Options: 1. Based on calories
//  2. chef's special
//  3. Choose from menu
export default function MealPlanner() {

  //Payment handler indicate if the successful payment then the success message
  const [visibilityStatus,setVisibilityStatus] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  //status is displayed when the payment is successfully done
  const showMessageHandler = async () => {
    setShowMessage("Order is placed. Estimated Delivery in 20 minutes." );

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

  //UI design for creating the table to showcase 7 day meal
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
            <tr>
              <td style={{backgroundColor:"white"}}>{ visibilityStatus ?  <Payment /> : null}</td>
            </tr>
      </table>
      </div>
      </div>
    </div>
    </Section> 
  );
}

//Styling for the meal planner section
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
    padding-bottom: 0vw;
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
