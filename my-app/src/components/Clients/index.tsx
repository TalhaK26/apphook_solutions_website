import  { useEffect, useState } from 'react';
import { withTranslation } from "react-i18next";
import {
  ItemContainer,
  Image,
  CustomCarousel,
} from "./styles";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
    {
      id: 1,
      avatar: `${process.env.PUBLIC_URL}/img/icons/mccoy.jpg`,
      name: ' Timotheus Mccoy',
      designation: 'CEO, The Ideal Wardrobe.',
      reviews: '"AppHook Solutions spearheaded a front and backend development project for an Web, iOS and Android tech solution. They focused their attention on constructing functionality while building a scalable UI/UX."',
    },
    {
      id: 2,
      avatar: `${process.env.PUBLIC_URL}/img/icons/jonathan.jpg`,
      name: 'Jonathan Viverette',
      designation: 'CEO, iFollow Inc.',
      reviews: '"AppHook Solutions provided full-stack application development to a tech entrepreneur developing a social media application, working from user-provided concepts and wireframes to build the entire front- and backend of the app. I was really impressed with their ability and willingness to communicate honestly about everything."',
    },
    {
      id: 3,
      avatar: `${process.env.PUBLIC_URL}/img/icons/benjamin.jpg`,
      name: 'Benjamin Zamora',
      designation: 'Owner, My Speech Community.',
      reviews: '"AppHook Solutions was hired to build a speech pathology social app. The iOS- and Android-compatible platform connects parents with pathologists, and features a forum, instant messaging, and profile creation abilities. They delivered everything I asked for."',
    },
  ];

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Clients = () => {
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
    <div id="clients" style={{padding: '100px 0'}}>
      <h6 style={{textAlign: 'center',}}>What Clients Say About Us</h6>
      <CustomCarousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        useKeyboardArrows={true}
        selectedItem={selectedSlide}
        onChange={(index) => setSelectedSlide(index)}
      >
        {slides.map((slide) => (
          <ItemContainer key={slide.id}>
            <p style={{width:'60%', textAlign: 'center', marginLeft: '20%'}}>{slide.reviews}</p>
            <img src={slide.avatar} alt={`${slide.name}'s avatar`} style={{width:'100px', height:'100px'}} />
            <p>{slide.name}</p>
            <p>- {slide.designation}</p>
          </ItemContainer>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default withTranslation()(Clients);
