import {React} from "react";
import styled from "styled-components";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg";
import "../css/bootstrap-theme.css";
import "../css/bootstrap-theme.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HorizontalGallery from 'react-dynamic-carousel'
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import axios from 'axios';
import {useEffect,useState}  from "react";


export default function Menu() {

  const [qty, setQty] = useState( '' );
  const data = [
    {
      id: 1,
      image: item1,
      name: "Chickpea Sandwich",
      type: "veg",
      price: "$10.95/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },
    {
        id: 2,
      image: item2,
      type: "non-veg",
      name: "Chicken Salad",
      price: "$5.5/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },
    {
        id: 3,
      image: item3,
      name: "Turkey Sandwich",
      type: "non-veg",
      price: "$8/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },

    {
        id: 4,
      image: item4,
      type: "veg",
      name: "Mediterranean Salad",
      price: "$8.5/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },
    {
        id: 4,
      image: item4,
      name: "Mediterranean Salad",
      type: "veg",
      price: "$8.5/pcs",
      nutricians: "cal: 24\nfiber:12\nfat:10",
    },

  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  const [orders, setorders] = useState([]);
  
  useEffect ( async() => 
  {
      const data = await
      axios.post("https://u4roty5d36.execute-api.us-east-1.amazonaws.com/default/LambdaMenuItems",JSON.stringify({data: "0"}))
        .then((response) => {
          console.log(response.data);
          setorders(response.data);
      }).catch((error) => {
          console.log("Eroor")
      })
  }, []); 

  const handleStoreData =  (value,qty) => 
    {
       // event.preventDefault();
        console.log("DATA");

        axios.post("https://sv4s5x7dlb.execute-api.us-east-1.amazonaws.com/default/LambdaOrders",JSON.stringify({data: value, qty: qty, customerid: 0})).then((response) => {
            console.log("DATA" ,response.data);
            alert.message('Successfully stored data into database');
        }).catch((error) => {
            console.log("Eroor")
        })

    }

  return (
    <Section id="menu">
      <div className="title">
        <h1>
          <span>Today's</span> Menu
        </h1>
      </div>

    <HorizontalGallery
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
    </Section>
  );
}

const Section = styled.section`
// padding: 0rem;
  ${TitleStyles};
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
