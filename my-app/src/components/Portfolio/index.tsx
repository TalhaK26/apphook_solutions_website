import  { useEffect, useState } from 'react';
import { withTranslation } from "react-i18next";
import {
  ItemContainer,
  Image,
  CustomCarousel,
  Wrapper
} from "./styles";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/img/icons/Travelling.jpg`,
      title: 'Project 1',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/img/icons/spices.jpg`,
      title: 'Project 2',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/img/icons/HR.jpg`,
      title: 'Project 3',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/img/icons/RealState.jpg`,
      title: 'Project 1',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    
  ];

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSlide((prev: any) => (prev + 1) % 9); // Adjust the number of items (9 in this case)
    }, 3000); // Adjust the auto-rotation interval (3 seconds in this case)


    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust the breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Call it initially
    handleResize();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
    
}, []);


    
  return (
    // <div id="portfolio" style={{position: 'relative', padding: '10rem 0px 8rem'}}>
    <Wrapper id="portfolio">
      <h6>Portfolio</h6>
      <CustomCarousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={isMobile ? 100 : 33.33}
        useKeyboardArrows={true}
        selectedItem={selectedSlide}
        onChange={(index) => setSelectedSlide(index)}
      >
        {slides.map((slide) => (
          <ItemContainer key={slide.id}>
            <Image src={slide.image} alt={slide.title} />
          </ItemContainer>
        ))}
      </CustomCarousel>
    </Wrapper>
  );
};

export default withTranslation()(Portfolio);
