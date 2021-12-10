//Author: Deep Patel
//Description: To setup home page which describe about business idea

import React from "react";
import styled from "styled-components";
import home1 from "../assets/Services1.png";
import home2 from "../assets/Services2.png";
import home3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";

//The main 3 focus of our website is designed into below section
export default function Home() {
  return (
    <section id="Logout">
    <div className="container">
    <div className="title">
        <a href = "https://myfoodieapp.auth.us-east-1.amazoncognito.com/login?client_id=2d334oi6mum4onrasl6k64tauq&response_type=code&scope=email+openid+profile&redirect_uri=https://lunchbox-team8.herokuapp.com/"></a>
    </div>
    </div>
    </section>
  );
}