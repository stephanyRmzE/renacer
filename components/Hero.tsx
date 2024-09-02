'use client'
import React, { useState, useEffect } from 'react';

const desktopImages = [
  {
    url: '/hero_1.png',
    title: 'Bienvenidos a Renacer',
    description: 'Descubre los beneficios de la equinoterapia',
    position: 'bottom-1/3 right-16', 
    textColor: 'text-white'
  },
  {
    url: '/hero_2.png',
    title: 'Teasica Renacer',
    description: 'Terapia Asistida con Caballos',
    position: 'bottom-10 left-1/2 transform -translate-x-1/2', 
    textColor: 'text-white'
  },
  {
    url: '/hero_3.png',
    title: 'Conoces la Equinoterapia',
    description: 'Una manera divertida de fortalecer la musculatura, el equilibrio y la coordinación.',
    position: 'bottom-1/4 left-8', 
    textColor: 'text-white'
  },
];

const mobileImages = [
  {
    url: '/hero_mobile_1.png',
    title: 'Teasica Renacer',
    description: 'Terapia Asistida con Caballos',
    position: 'bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/4', 
    textColor: 'text-white'
  },
  {
    url: '/hero_mobile_2.png',
    title: 'Teasica Renacer',
    description: 'Terapia Asistida con Caballos',
    position: 'bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/4', 
    textColor: 'text-white'
  },
  {
    url: '/hero_mobile_3.png',
    title: 'Teasica Renacer',
    description: 'Terapia Asistida con Caballos',
    position: 'bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/4', 
    textColor: 'text-white'
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the correct value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === (isMobile ? mobileImages.length : desktopImages.length) - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const images = isMobile ? mobileImages : desktopImages;

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[86vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`absolute z-10 ${image.position} text-center text-white`}>
            <h1 className={`text-3xl font-bold ${image.textColor}`}>{image.title}</h1>
            <p className={`text-xl mt-4 ${image.textColor}`}>{image.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
