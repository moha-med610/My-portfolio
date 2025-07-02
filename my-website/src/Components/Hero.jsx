import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";


const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Mohamed"],
      typeSpeed: 120,
      loop: true,
      backSpeed: 80,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative h-screen border-b-2 border-gray-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:mt:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I,m <span className="text-teal-400" ref={el} />
            </h1>
            <p className="md:text-2xl text-xl mb-4 text-gray-400">
              Full Stack Developer
            </p>
            <p className="mb-4 text-gray-400">
              I'm a passionate web developer with expertise in
              <span className="text-2xl font-bold text-emerald-600"> React, </span>
              <span className="text-2xl font-bold text-emerald-600">Express js</span>, and modern
              web technologies. I love creating beautiful and functional website
              that solve real world problems.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 w-max rounded-md">
            <a
              href="https://drive.google.com/file/d/1yBICuc4IaQ1PYWN0X_tORSP8mDygudHM/view?usp=drive_link"
              target="_blanc"
            >
                Download CV
            </a>
              </button>
          </div>
          <div className="md:w-1/2 relative z-10 flex justify-center items-end">
            <img
              src="/images/moha.png"
              alt="Mohamed Khaled"
              className="lg:w-[90vh] w-96"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden md:flex flex-col gap-6 bg-black bg-opacity-20 p-4 rounded-full shadow-md">
        <a
          href="https://www.facebook.com/profile.php?id=100007448079879"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
        >
          <FaFacebook size={70} />
        </a>
        <a
          href="https://www.instagram.com/mohakhaled_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
        >
          <AiFillInstagram size={70} />
        </a>
        <a
          href="https://github.com/moha-med610"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition-colors duration-300"
        >
          <FaGithub size={70} />
        </a>
        <a
          href="https://www.linkedin.com/in/mo%C4%A5%C3%A3med-k%C4%A5aled-42509b322/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
        >
          <TbBrandLinkedinFilled size={70} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
