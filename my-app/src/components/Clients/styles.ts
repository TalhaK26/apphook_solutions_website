import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';

export const ClientWrapper = styled("div")`
  position: relative;
  padding: 10rem 0px 8rem;

  align-items: center;
  justify-content: space-between;
  // display: flex;
  flex-flow: row wrap;
  min-width: 0;
`;

export const CustomCarousel = styled(Carousel)`
  /* Customize the navigation dots styles */
  .control-dots .dot {
    background-color: rgb(48, 87, 126) !important; /* Change the color to your desired color */
  }
`;  

export const ItemContainer = styled("div")`
  height: 350px;

  @media (max-width: 600px) { 
    height: 500px;
  }
`;

export const Image = styled("img")`
  width: 100px !important; 
  height: 100px !important;
  border-style: solid !important;
  border-width: 5px 5px 5px 5px !important;
  border-color: rgb(48, 87, 126) !important;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.15) !important;
  border-radius: 50%;

  @media (max-width: 600px) { 
    margin-top: 50px !important;
  }
`;

export const Title = styled("p")`
  font-weight: bolder !important;
  font-size: 26px !important;
`;

export const Reviews = styled("p")<any>`
  width: 60%; 
  text-align: center; 
  margin-left: 20%;

  @media (max-width: 1024px) { 
    width: 100%;
    margin: 0;
  }
`;

export const Designation = styled("p")<any>`
`;