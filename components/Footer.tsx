import React from 'react';
import { IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
  const pdfUrl = '/aviso_privacidad.pdf'; // Ruta al archivo PDF

  return (
    <footer className="bg-medium-orange py-6">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex justify-between">
          <div className='flex gap-4 items-center'>
            <div className="hidden md:block">
              <Image src={'/logo_nobg_white.png'} alt='logo' width={120} height={80} ></Image>
            </div>
            <div className="text-center">
              <p className="text-sm text-white whitespace-pre-line">
                  © 2024 Renacer Teasica.{'\n'} Todos los derechos reservados.
              </p>
              <p className="text-sm text-white mt-1">
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Aviso de privacidad</a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-base text-center text-white font-bold">Social</h3>
            <div className="flex justify-center items-center mt-1 space-x-4">
              <IconButton component="a" href='https://www.facebook.com/teasica.renacer' target="_blank" rel="noopener noreferrer" size="large">
                <Facebook className='text-white'/>
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com/renacer.teasica/" target="_blank" rel="noopener noreferrer" size="large">
                <Instagram className='text-white'/>
              </IconButton>
              <IconButton component="a" href="https://wa.me/+525535022463" target="_blank" rel="noopener noreferrer" size="large">
                <WhatsApp className='text-white'/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
