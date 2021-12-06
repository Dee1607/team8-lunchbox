import React, { useState } from "react";
import styled from "styled-components";
import lunchbox from "../assets/logo4.png";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <>
    <section>
      <Nav>
        <div className="brand">
          <img src={lunchbox} alt="Icon" />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <x
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#home" className="active">
            Home
            </a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#orders">Orders</a>
          </li>
          <li>
            <a href="#mealplanner">Meal Planner</a>
          </li>
          <li>
            <a href="#membership">Membership</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#feedback">Feedback</a>
          </li>
        </ul>
      </Nav>
      </section>
      <section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setNavbarState(false)}>
              Menu
            </a>
          </li>
          <li>
            <a href="#orders" onClick={() => setNavbarState(false)}>
              Orders
            </a>
          </li>
          <li>
            <a href="#mealplanner" onClick={() => setNavbarState(false)}>
            Meal Planner
            </a>
          </li>
          <li>
            <a href="#membership" onClick={() => setNavbarState(false)}>
              Membership
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#feedback" onClick={() => setNavbarState(false)}>
              Feedback
            </a>
          </li>
        </ul>
      </ResponsiveNav>
      </section>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  position: fixed;
  background-color: white;
  width: -webkit-fill-available;
  top: 0;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
      .active {
        color: #f9c74f;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;
