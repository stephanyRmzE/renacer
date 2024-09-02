import React from 'react';
import Image from 'next/image';

// Define an array of service objects with images and consistent descriptions
const services = [
  {
    image: '/ourservices/monta.png',  // Replace with the path to the relevant image
    title: 'Monta Terapéutica',
    description: 'Clases de equitación terapéutica diseñadas para mejorar la postura, el equilibrio y la coordinación, adecuadas para todas las edades y niveles.',
  },
  {
    image: '/ourservices/equinoterapia.png',  // Replace with the path to the relevant image
    title: 'Equinoterapia',
    description: 'Terapia asistida con caballos que ayuda a mejorar la salud física, emocional y mental mediante técnicas de interacción equina.',
  },
  {
    image: '/ourservices/nutricion.png',  // Replace with the path to the relevant image
    title: 'Nutrición',
    description: 'Planes de nutrición personalizados para mejorar la salud general y bienestar, adaptados a las necesidades individuales.',
  },
  {
    image: '/ourservices/psicoterapia.png',  // Replace with the path to the relevant image
    title: 'Psicoterapia',
    description: 'Sesiones de psicoterapia enfocadas en la salud mental y emocional, con enfoque personalizado.',
  },
  {
    image: '/ourservices/ocupacional.png',  // Replace with the path to the relevant image
    title: 'Talleres Ocupacionales',
    description: 'Talleres diseñados para mejorar las habilidades ocupacionales y de la vida diaria, facilitando la integración laboral y social.',
  },
];

// Define an array of camp images for the gallery
const campGallery = [
  '/ourservices/campamento_1.png',
  '/ourservices/campamento_2.png',
  '/ourservices/campamento_3.png',
  '/ourservices/campamento_4.png',
  '/ourservices/campamento_5.png',
  '/ourservices/campamento_6.png',
  '/ourservices/campamento_7.png',
  '/ourservices/campamento_8.png',
];

export default function OurServices() {
  return (
    <div id='Services' className='flexCenter flex-col pt-10 pb-20'>
      <div className='padding-container max-container w-full'>
        <h2 className="text-center text-3xl font-bold mb-20 text-medium-orange">Nuestros Servicios</h2>
        
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-light-orange rounded-lg shadow">
              <div className="mb-4 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="responsive"
                  width={100}
                  height={60}  // Adjust this ratio to your desired aspect ratio
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-center text-white">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Camps Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold mb-10 text-medium-orange">Campamentos</h3>
          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {campGallery.map((image, index) => (
              <div key={index} className="w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Campamento ${index + 1}`}
                  layout="responsive"
                  width={100}
                  height={70}  // Adjust this ratio for desired aspect ratio
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}