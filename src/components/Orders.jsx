//Author: Deep Patel
//Description: To get feedback from users and store to the database for showcasing testimonials afterwards

import React from "react";
import {useEffect,useState}  from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from 'axios';
import '../css/payment.css';

//to fetch the orders for the particular customer
export default function Orders() {

  //to store quantity, cost, item name and total amount of a particular bill
  const [qty, setqty] = useState([]);
  const [cost, setcost] = useState([]);
  const [name, setName] = useState([]); 
  const [total, setTotal] = useState([]); 

  // API call when the page is loaded
  useEffect ( () => {
      axios.post("https://f3q5gfquml.execute-api.us-east-1.amazonaws.com/default/LambdaOrderRetrive",JSON.stringify({data: "0"}))
        .then((response) => {

          //Regex matching to fetch the pricing from the string
          console.log(response.data);
          var qtytxt = response.data[0].qty;
          var qtynum = qtytxt.match(/([0-9])+/g);
          setqty(qtynum);

          var costtxt = response.data[0].costperitem;
          var costnum = costtxt.match(/([0-9])+/g);
          setcost(costnum);

          setName(response.data[0].ordername)
          
          setTotal(response.data[0].total);
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }, []);

  const [visibilityStatus,setVisibilityStatus] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  //status is displayed when the payment is successfully done
  const showMessageHandler = async () => {

    axios.post("https://ixfdha9ejc.execute-api.us-east-1.amazonaws.com/default/LambdaCheckout",JSON.stringify({data: "0"}))

        .then((response) => {

        }).catch((error) => {

          console.log("Eroor",error)

      })  
    setShowMessage("Payment Successful. Your order will be there in 10 minutes." );

    await delay(3000);
    setShowMessage(false);
    setVisibilityStatus(false);
  }

  const currentOrders = () =>{
     axios.post("https://f3q5gfquml.execute-api.us-east-1.amazonaws.com/default/LambdaOrderRetrive",JSON.stringify({data: "0"}))
        .then((response) => {

          //Regex matching to fetch the pricing from the string
          console.log(response.data);
          var qtytxt = response.data[0].qty;
          if(qtytxt != ""){
            var qtynum = qtytxt.match(/([0-9])+/g);
            setqty(qtynum);
          }else{
            setqty("Empty");
          }
          
          var costtxt = response.data[0].costperitem;
          if(costtxt != ""){
          var costnum = costtxt.match(/([0-9])+/g);
          setcost(costnum);
          }else{
            setcost("Empty");
          }

          setName(response.data[0].ordername)
          
          setTotal(response.data[0].total);
      }).catch((error) => {
          console.log("Eroor",error)
      })
  }

  const previousOrders = () => {
    axios.post("https://f552y1gsb5.execute-api.us-east-1.amazonaws.com/default/LambdaFetchPreviousOrders",JSON.stringify({data: "0"}))
      .then((response) => {

        //Regex matching to fetch the pricing from the string
        console.log(response.data);
        var qtytxt = response.data[0].qty;
        var qtynum = qtytxt.match(/([0-9])+/g);
        setqty(qtynum);

        var costtxt = response.data[0].costperitem;
        var costnum = costtxt.match(/([0-9])+/g);
        setcost(costnum);
        setName(response.data[0].ordername)
      }).catch((error) => {
        console.log("Eroor",error)
    })  
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

  return (
    <Section id="orders">
    <div className="container">
      <div className="title">
        <h1 style={{paddingBottom:"3rem"}}>
          <span>Order</span> List
        </h1>
      </div>
      <div className="items">
      <table className="tableStyle">
            <tr>
              <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
            </tr>

            {name.map(( listValue, index ) => {
            return (
            <tr key={index}>
              <td>{index + 1}</td>
                <td>{listValue}</td>
                <td>{qty[index]}</td>
                <td>{cost[index]}</td>
                <td><button type="submit">Remove</button></td>
            </tr>
          );  
        })}
      </table>
      <div className="paymentstyle">
        <div className="item">
          <p>Total: {total}</p> 
          <table>
          <th><button className="button" onClick={() => {previousOrders()}}>Previous orders</button></th>
          <th><button className="button" onClick={() => {paymentHandler()}}>Pay</button></th>
          <th><button className="button" onClick={() => {currentOrders()}}>Currnet orders</button></th>
          </table> 
          <div style={{paddingBottom:"2rem"}}></div>
          { visibilityStatus ?  <Payment /> : null}
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
}
  .container {
    display: block;
    margin: 0.5rem;
    padding-top: 1vw;
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
    margin-top: -2rem;
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
          height: 10rem;
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