import React from 'react';
import Image from 'next/image';
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AdjustIcon from '@mui/icons-material/Adjust';

export default function AboutUs() {
  return (
    <div id='AboutUs' className='flexCenter flex-col pt-16'>
      <div className='padding-container max-container w-full lg:w-4/5'>

        {/* Misión Section - Text on Left, Image on Right */}
        <div className='flex flex-col md:flex-row items-center relative w-full overflow-hidden rounded-2xl h-fit mb-16'>
          <div className='flex-1 bg-light-orange py-8 pl-1 pr-3 md:p-8 rounded-2xl md:mr-8'>
            <div className='flex items-start'>
              {/* Conditionally render the icon based on screen size */}
              <PeopleIcon fontSize="large" className='text-white hidden md:block' />
              <div className='ml-4'>
                <h3 className='text-2xl text-white font-semibold text-center md:text-left'>Misión</h3>
                <p className='text-white text-base mt-2'>
                  Ser la Asociación Civil de Terapia Asistida con Caballos que contribuya al desarrollo integral de la población en situación de vulnerabilidad a través de servicios integrales y multidisciplinarios en un mismo espacio para contribuir a mejorar su calidad de vida.
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1 mt-8 md:mt-0 flex justify-center'>
            <div className='w-[380px] h-[300px]'>
              <Image
                src='/mission_image.png'
                alt='Misión'
                width={380}
                height={300}
                className='rounded-md'
              />
            </div>
          </div>
        </div>

        {/* Visión Section - Image on Left, Text on Right */}
        <div className='flex flex-col md:flex-row-reverse items-center relative w-full overflow-hidden rounded-2xl h-fit mb-16'>
          <div className='flex-1 bg-light-orange py-8 pl-1 pr-3 md:p-8 rounded-2xl md:mr-8'>
            <div className='flex items-start'>
              {/* Conditionally render the icon based on screen size */}
              <VisibilityIcon fontSize="large" className='text-white hidden md:block' />
              <div className='ml-4'>
                <h3 className='text-2xl text-white font-semibold text-center md:text-left'>Visión</h3>
                <p className='text-white text-base mt-2'>
                  Ser un referente como Centro Integral Ecuestre de Rehabilitación, así como organismo Certificador que atiende a población en situación de vulnerabilidad, con reconocimiento nacional avalado por la calidad y calidez en sus servicios especializados y multidisciplinarios que impactan en el bienestar social.
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1 mt-8 md:mt-0 flex justify-center'>
            <div className='w-[380px] h-[300px]'>
              <Image
                src='/vision_image.png'
                alt='Visión'
                width={380}
                height={300}
                className='rounded-md'
              />
            </div>
          </div>
        </div>

        {/* Objetivo Section - Text on Left, Image on Right */}
        <div className='flex flex-col md:flex-row items-center relative w-full overflow-hidden rounded-2xl h-fit mb-16'>
          <div className='flex-1 bg-light-orange py-8 pl-1 pr-3 md:p-8 rounded-2xl md:mr-8'>
            <div className='flex items-start'>
              {/* Conditionally render the icon based on screen size */}
              <AdjustIcon fontSize="large" className='text-white hidden md:block' />
              <div className='ml-4'>
                <h3 className='text-2xl text-white font-semibold text-center md:text-left'>Objetivo</h3>
                <p className='text-white text-base mt-2'>
                  Brindar atención integral y especializada a personas en situación de vulnerabilidad, en una misma infraestructura física a través de servicios multidisciplinarios que contribuyan a la inclusión social, acceso a oportunidades de desarrollo y mejora en la calidad de vida.
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1 mt-8 md:mt-0 flex justify-center'>
            <div className='w-[380px] h-[300px]'>
              <Image
                src='/objective_image.png'
                alt='Objetivo'
                width={380}
                height={300}
                className='rounded-md'
              />
            </div>
          </div>
        </div>

        {/* Objetivos Particulares Section - Consistent Style */}
        <div className='flex flex-col items-center w-full mb-16'>
          <div className='bg-light-orange py-8 px-4 md:px-8 rounded-2xl w-full'>
            <h3 className='text-2xl text-white font-semibold text-center mb-4'>Objetivos Particulares</h3>
            <ul className='list-disc list-inside text-white text-base space-y-2'>
              <li>Brindar Terapia Asistida con Caballos para personas con discapacidad.</li>
              <li>Proporcionar servicios especializados de psicología, fisioterapia, psicopedagogía y terapia ocupacional que contribuyan al desarrollo integral de personas en situación de vulnerabilidad.</li>
              <li>Certificar a personas como Terapeutas en Equinoterapia para la rehabilitación, y/o desarrollo de habilidades para la vida y sociales.</li>
              <li>Contribuir al bienestar psicosocial de la población que se integre a nuestros servicios y proyecto.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}