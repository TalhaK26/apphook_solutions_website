import  { useEffect, useState } from 'react';
import { Row } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  HeaderSection,
  ItemContainer,
  Image,
  CustomCarousel,
  Title,
  Description,
} from "./styles";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/img/icons/1.jpg`,
      title: 'Project 1',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/img/icons/AppDev.png`,
      title: 'Project 2',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/img/icons/ui.png`,
      title: 'Project 3',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/img/icons/1.jpg`,
      title: 'Project 1',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/img/icons/AppDev.png`,
      title: 'Project 2',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 6,
      image: `${process.env.PUBLIC_URL}/img/icons/ui.png`,
      title: 'Project 3',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 7,
      image: `${process.env.PUBLIC_URL}/img/icons/1.jpg`,
      title: 'Project 1',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 8,
      image: `${process.env.PUBLIC_URL}/img/icons/AppDev.png`,
      title: 'Project 2',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 9,
      image: `${process.env.PUBLIC_URL}/img/icons/ui.png`,
      title: 'Project 3',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 10,
      image: `${process.env.PUBLIC_URL}/img/icons/1.jpg`,
      title: 'Project 1',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 11,
      image: `${process.env.PUBLIC_URL}/img/icons/AppDev.png`,
      title: 'Project 2',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 12,
      image: `${process.env.PUBLIC_URL}/img/icons/ui.png`,
      title: 'Project 3',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ];

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  slides: Slide[];
}
const Portfolio = () => {
  const itemsToShow = 3; // Customize the number of slides to show
    const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSlide((prev: any) => (prev + 1) % 9); // Adjust the number of items (9 in this case)
    }, 3000); // Adjust the auto-rotation interval (3 seconds in this case)

    return () => {
      clearInterval(interval);
    };
  }, []);


    
  return (
    <>
    <h6>Portfolio</h6>
    <CustomCarousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={33.33}
      useKeyboardArrows={true}
      selectedItem={selectedSlide}
      onChange={(index) => setSelectedSlide(index)}
    >
      {slides.map((slide) => (
        <ItemContainer key={slide.id}>
          <Image src={slide.image} alt={slide.title} />
          {/* <Title className="legend">{slide.title}</Title> */}
          {/* <Description>{slide.description}</Description> */}
        </ItemContainer>
      ))}
    </CustomCarousel>
    </>
  );
};

export default withTranslation()(Portfolio);
