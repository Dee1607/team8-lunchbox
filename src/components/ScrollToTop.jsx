//Author: Janvi Patel
//Description: To get feedback from users and store to the database for showcasing testimonials afterwards

import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

//To scroll top button at the end of the webpage
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <AiOutlineArrowUp />
    </ToTop>
  );
}

//styling for the scroll to top section
const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  border-radius: 2rem;
  background: linear-gradient(to right, #fc4958, #e85d04);
  padding: 1rem 1.15rem;
  svg {
    transition: 0.6s ease-in-out;
    color: white;
    font-size: 1.5rem;
  }
  &:hover {
    svg {
      transform: scale(1.8);
    }
  }
`;
