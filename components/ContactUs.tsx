'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Location from './Location';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleInvalidEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity("Por favor, introduce una dirección de correo electrónico válida. Ejemplo: correo@dominio.com");
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity("");
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: formData.name,
        message: formData.message,
        email: formData.email
      };
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const response = await emailjs.send(SERVICE_ID || "", TEMPLATE_ID || "", templateParams, PUBLIC_KEY || "");

      setFormData({ name: '', email: '', message: '' });

      toast.success('Email enviado correctamente', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      // Puedes realizar acciones adicionales aquí después de enviar el correo, como mostrar un mensaje de éxito o limpiar el formulario
    } catch (error) {
      toast.error('Error al enviar el correo', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
      // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
    }
  };


  return (
    <div id='ContactUs' className='flexCenter flex-col pt-36 pb-20'>
      <div className='padding-container max-container w-full'>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
          <div className="col-span-1">
            <div className="shadow-lg">
              <div className='h-[55vh] w-full'>
                <Location />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mx-3">
              <h2 className="text-center text-3xl font-bold mb-0 text-brown-main">Contactanos</h2>
              <form className="mt-4" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>Nombre *</label>
                    <input
                      type="text"
                      className="w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      id='name'
                      required
                      value={name}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>Email *</label>
                    <input
                      type="email"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      id='email'
                      value={email}
                      onChange={onChange}
                      required
                      onInvalid={handleInvalidEmail}
                      onInput={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor='message' className='block text-sm font-medium leading-6 text-gray-900'>Mensaje *</label>
                    <textarea
                      name='message'
                      id='message'
                      className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      value={message}
                      onChange={onChange}
                      required
                    ></textarea>
                  </div>
                  <div className='flex justify-center'>
                    <button type="submit" className="bg-gradient-to-r from-start-orange to-light-orange mt-3 text-white border-0 px-7 py-2 rounded-md">
                      <span>Enviar</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="card mt-4 md:mt-10 border-0 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card-body flex items-start pl-0 justify-center">
  
                  <div className="flex flex-col items-start h-full">
                    <div className="flex w-full justify-center gap-x-2">
                      <LocationOnIcon style={{ color: '#FEC23F' }} />
                      <h6 className="font-medium text-lg">Direccion</h6>
                    </div>
                    <p>
                    Carretera Zumpango-Apaxco Km. 30.5<br /> Tequixquiac, Mexico</p>
                  </div>
                </div>
                <div className="card-body flex items-start justify-center">
                  <div className="flex flex-col items-start h-full">
                    <div className="flex w-full justify-center gap-x-2">
                      <PhoneIcon style={{ color: '#FEC23F' }} />
                      <h6 className="font-medium text-lg">Telefono</h6>
                    </div>
                    <div className="flex flex-col items-start h-full gap-[10px] lg-new:gap-0">
                      <a href="tel:+525535022463" style={{color: "black"}}>  +52 55 3502 2463 </a>
                    </div>  
                  </div>  
                </div>
                <div className="card-body flex items-start justify-center">
                  <div className="flex flex-col items-start h-full">
                    <div className="flex w-full justify-center gap-x-2">  
                      <EmailIcon style={{ color: '#FEC23F' }} />
                      <h6 className="font-medium text-lg">Correo Electronico</h6>
                    </div>
                    <div className="gap-[10px] lg-new:gap-0">
                      <a href={`mailto:contacto@teasicarenacerac.com`  }  style={{color: "black"}} >
                        contacto@teasicarenacerac.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
