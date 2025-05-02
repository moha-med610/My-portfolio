import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SlSocialGithub } from "react-icons/sl";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Mohamed Khaled"],
      typeSpeed: 120,
      loop: true,
      backSpeed: 80,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:mt:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I,m <span className="text-red-600" ref={el} />
            </h1>
            <p className="md:text-2xl text-xl mb-4">
              Full Stack Developer & Web Designer
            </p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in
              <span className="text-2xl font-bold">React, </span>
              <span className="text-2xl font-bold">Express js</span>, and modern
              web technologies. I love creating beautiful and functional website
              that solve real world problems.
            </p>
            <a
              href="https://drive.google.com/file/d/1yBICuc4IaQ1PYWN0X_tORSP8mDygudHM/view?usp=drive_link"
              target="_blanc"
            >
              <button className="bg-red-600 text-white px-3 py-2 w-max rounded-md">
                Download CV
              </button>
            </a>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src="/images/hero.png" alt="" className="lg:h-[90vh] h-96" />
            <img
              src="/images/js-logo.png"
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src="/images/tailwind.png"
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden rounded-full"
            />
            <img
              src="/images/react-logo.png"
              alt=""
              className="absolute w-10 rounded-full right-0  bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden md:flex flex-col gap-6 bg-gray-100 p-4 rounded-full shadow-md">
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
          <SlSocialGithub size={70} />
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
