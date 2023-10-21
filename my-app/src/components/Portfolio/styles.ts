import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';

export const CustomCarousel = styled(Carousel)`
  /* Customize the navigation dots styles */
  .control-dots .dot {
    background-color: rgb(48, 87, 126) !important; /* Change the color to your desired color */
  }
`;  

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const ItemContainer = styled("div")`
`;

export const Image = styled("img")`
  height: 300px !important;
  cursor: pointer !important;
`;

export const Title = styled("p")`
  background-color: rgb(48, 87, 126) !important;
  font-weight: bolder !important;
  font-size: 14px !important;
`;

export const Description = styled("p")<any>`
`;
