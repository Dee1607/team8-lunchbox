import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from './components/Menu';
import Orders from './components/Orders';
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
  /*  sr.reveal(
      `
        nav,
        #home,
        #menu,
        #orders,
        #mealplanner,
        #membership,
        #testimonials,
        .footer
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
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
      <Footer />
    </>
  );*/
 sr.reveal(      
    `
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
      </>
    );

}
