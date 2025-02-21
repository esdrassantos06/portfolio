import Navbar from '../components/Navbar';

const Contact = () => {

  return (
    <>
      <Navbar />
      <div className="contact poppins-font h-screen w-full flex flex-col items-center justify-center bg-mist-gray dark:bg-custom-black">


          <form
            className="p-8 w-[80%] rounded-xl shadow-lg border-solid border dark:border-[#F2F2F2]/20 border-[#1F1F1F]/20"
          >
            <div className="mb-6 w-full">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full p-4 border-2 border-zinc-300 dark:border-zinc-300/50 rounded-lg placeholder:text-black/50 dark:text-white transition duration-300 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6 w-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white  mb-2">
                Email
              </label>

              <input
                type="email"
                id="email"
                className={`w-full p-4 border-2 border-zinc-300 dark:border-zinc-300/50 placeholder:text-black/50  dark:text-white rounded-lg transition duration-300 

                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
                placeholder="name@email.com"
              />
            </div>

            <div className="mb-6 w-full">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                Message
              </label>

              <textarea
                id="message"
                className={`w-full p-4 border-2 border-zinc-300 dark:border-zinc-300/50 rounded-lg placeholder:text-black/50  dark:text-white transition duration-300 


                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`}
                rows="4"
                placeholder="Write a message..."
              ></textarea>

            </div>

            <button
              type="submit"
              className="w-full bg-mypurple text-white py-3 rounded-lg hover:bg-purple-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
      </div>
    </>
  );
};

export default Contact;
