import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import NavbarContact from '../components/NavbarContact';

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is not valid'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const response = await fetch('https://formspree.io/f/xkgwleya', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('There was an error sending your message.');
    }
  };

  return (
    <div className="contact poppins-font bg-mist-gray dark:bg-custom-black">
      <header className='fixed w-full'>
        <NavbarContact />
      </header>
      <main className="h-svh w-full flex justify-center items-center py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '80%' }}
          className="w-full h-screen mx-auto p-8 place-content-center rounded-xl shadow-lg border-solid border border-[#F2F2F2] dark:border-[#1F1F1F]"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full p-4 border-2 rounded-lg dark:bg-gray-800 dark:text-white transition duration-300 
                ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full p-4 border-2 dark:bg-gray-800 dark:text-white rounded-lg transition duration-300 
                ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
              placeholder="name@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              {...register('message')}
              className={`w-full p-4 border-2 rounded-lg dark:bg-gray-800 dark:text-white  transition duration-300 
                ${errors.message ? 'border-red-500' && 'dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
              rows="4"
              placeholder="Write a message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
