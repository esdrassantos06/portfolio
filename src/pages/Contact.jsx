/* eslint-disable */
import { useNavigate } from 'react-router';
import emailjs from '@emailjs/browser'
import { Loader } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const Contact = () => {

  const navigate = useNavigate();

  const schema =
    z.object({
      name: z.string().min(2, 'Name must be at least 2 characters long'),
      email: z.string().email('Please enter a valid email address'),
      textarea: z.string()
        .min(10, 'Message must be at least 10 characters long')
        .max(600, 'Message cannot exceed 600 characters'),
    });


  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });


  const onSubmit = async (data) => {

    const template = {
      from_name: data.name,
      email: data.email,
      message: data.textarea,
    }

    try {
      const result = await emailjs.send(
        'service_dy6lr87',
        'template_h0bffhe', 
        template,
        'ti16g7ix8mDElaSte'
      );

      navigate('/thanks');
    }
    catch (error) {
      console.error('Error details:', data.error);
      setError('root', { message: `Something Went Wrong. Error Code: ${error.status}` })
    }

  }


  return (
    <>
      <Navbar />
      <div className="contact pt-30 poppins-font h-screen w-full flex flex-col items-center justify-center bg-mist-gray dark:bg-custom-black">


        <form
          className="p-8 w-[80%] rounded-xl shadow-lg border-solid border dark:border-[#F2F2F2]/20 border-[#1F1F1F]/20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6 w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Name <span className='text-red-500'>*</span>
            </label>

            <input {...register('name')}
              type="text"
              id="name"
              className={`w-full p-4 border-2 border-zinc-300 dark:border-zinc-300/50 rounded-lg placeholder:text-black/50 dark:text-white transition duration-300 focus:ring-2 focus:ring-indigo-200`}
              placeholder="Your Name"
            />

            {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}

          </div>

          <div className="mb-6 w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white  mb-2">
              Email <span className='text-red-500'>*</span>
            </label>

            <input {...register('email')}

              type="email"
              id="email"
              className={`w-full p-4 border-2 border-zinc-300 dark:border-zinc-300/50 placeholder:text-black/50  dark:text-white rounded-lg transition duration-300 focus:ring-2 focus:ring-indigo-200`}
              placeholder="name@email.com"
            />

            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Message <span className='text-red-500'>*</span>
            </label>

            <textarea {...register('textarea')}
              id="message"
              className={`w-full p-4 border-2 border-zinc-300 dark:border-zinc-300/50 rounded-lg placeholder:text-black/50  dark:text-white transition duration-300 focus:ring-2 focus:ring-indigo-200`}
              rows="4"
              placeholder="Write a message..."
            ></textarea>

            {errors.textarea && <p className='text-red-500 text-sm'>{errors.textarea.message}</p>}

          </div>

          <button
            type="submit" disabled={isSubmitting}
            className="w-full flex items-center gap-2 justify-center bg-mypurple text-white py-3 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            {isSubmitting ? (
              <>
                Please Wait... <Loader className="animate-spin" />
              </>
            ) : (
              'Send Message'
            )}
          </button>
          {errors.root && <p className='text-red-500 text-sm mt-2'>{errors.root.message}</p>}
        </form>
      </div>
    </>
  );
};

export default Contact;
