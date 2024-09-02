import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WorkIcon from '@mui/icons-material/Work';

const services = [
  {
    icon: <FontAwesomeIcon icon={faHorse} className="text-white h-[1.8rem]" />,
    title: 'Clases de Monta',
    description: 'Ofrecemos clases de equitación para todas las edades y niveles.',
  },
  {
    icon: <LocalHospitalIcon fontSize="large" className="text-white" />,
    title: 'Equinoterapia',
    description: 'Terapia asistida con caballos para mejorar la salud física y emocional.',
  },
  {
    icon: <RestaurantIcon fontSize="large" className="text-white" />,
    title: 'Nutrición',
    description: 'Asesoramiento nutricional personalizado para mejorar tu bienestar.',
  },
  {
    icon: <FitnessCenterIcon fontSize="large" className="text-white" />,
    title: 'Fisioterapia',
    description: 'Sesiones de fisioterapia para la rehabilitación física y el alivio del dolor.',
  },
  {
    icon: <WorkIcon fontSize="large" className="text-white" />,
    title: 'Terapia Ocupacional',
    description: 'Ayudamos a las personas a mejorar sus habilidades para la vida diaria y el trabajo.',
  },
];

const Services = () => {
  return (
    <div id='Services' className='flexCenter flex-col pt-36 pb-20'>
      <div className='padding-container max-container w-full'>
        <h2 className="text-center text-3xl font-bold mb-20 text-brown-main">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-golden-main rounded-lg shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl  text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-center text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
