import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from './components/Menu';
import Orders from './components/Orders';
import LexChat from "react-lex-plus";
import AWS from "aws-sdk";
import MealPlanner from './components/MealPlanner';
import Membership from './components/Membership';
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
 
 sr.reveal(      
    `
    /,
    nav,
    #home,
    #menu,
    #orders,
    #mealplanner,
    #membership,
    #testimonials,
    #newsletter,
    .footer
    `,
     { 
        opacity: 0,
       interval: 200,      
    }    );  }, []); 

    AWS.config.update ({
      region: "us-west-2",
      credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "us-east-1:8810824d-1965-4214-9265-adc5696ef478"
      })
    });

    return (    
      <>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Menu />
        <Orders />
        <MealPlanner />
        <Membership />
        <Testimonials />
        <Newsletter />
        <Footer />
        <LexChat
        botName="Pizza"
        IdentityPoolId="us-east-1:8810824d-1965-4214-9265-adc5696ef478"
        placeholder="Type your query"
        style={{ position: "absolute" }}
        backgroundColor="#f5bfbf"
        height="430px"
        region="us-east-1"
        headerText="Feedback"
        headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "10px" }}
      />    
      </>
    );
}
