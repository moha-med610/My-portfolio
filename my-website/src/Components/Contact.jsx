import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  

  useEffect(() => {
    fetch('/Animations/Contact.json')
      .then((response) => response.json())
      .then((data) => setContactData(data))
      .catch((error) => console.error('Error loading animation data:', error));
  }, []);

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
            <div className="flex space-x-4 mb-5">
              <a href="https://www.facebook.com/profile.php?id=100007448079879" target="_blank" className="text-foreground/60 hover:text-foreground/80">
                <i className="text-3xl fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/mohakhaled_official/" target="_blank" className="text-foreground/60 hover:text-foreground/80">
                <i className="text-3xl fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/201144877902" target="_blank" className="text-foreground/60 hover:text-foreground/80">
                <i className="text-3xl fa-brands fa-whatsapp"></i>
              </a>
            </div>
            {contactData && <Lottie animationData={contactData} className='w-[350px] mx-auto lg:w-[]500px'/>}
          </div>
          <form className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'>
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text" id='name' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter Your Name' />
                
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" id='email' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter Your Email' />
                
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your Message' />
            </div>
            <button className='bg-red-500 text-white px-3 py-2 rounded-lg '>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
