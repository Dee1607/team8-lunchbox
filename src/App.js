//Authors: Janvi Patel, Preetham Tikkavarapu

import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import scrollreveal from "scrollreveal";
import Dummy from "./components/Dummy";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MealPlanner from './components/MealPlanner';
import Membership from './components/Membership';
import Menu from './components/Menu';
import Navbar from "./components/Navbar";
import Orders from './components/Orders';
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
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
    nav,
    #home,
    #menu,
    #orders,
    #mealplanner,
    #membership,
    #testimonials,
    #feedback,
    .footer
    `,
     { 
        opacity: 0,
       interval: 200,      
    }    );  }, []); 

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <>
              <ScrollToTop />
              <Navbar />
              <Home />
              <Menu />
              <Orders />
              <MealPlanner />
              <Membership />
              <Testimonials />
              <Feedback />
              <Footer />  
            </>
          </Route>
          <Route path="/dummy">
            <>
              <ScrollToTop />
              <Dummy />
              <Footer /> 
            </>
          </Route>
        </Switch>
      </BrowserRouter>    
      
    );
}
