import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const About = () => {
  return (
      <div className="relative">
        <div className=" py-12 border-b-2 border-gray-500 ">
          <motion.div
           id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-white font-semibold tracking-wide uppercase text-3xl mb-4 border-b-2 border-gray-500 pb-4">
                About Me
              </h2>
              <p className="mt-2 text-3xl leading-8 font-thin tracking-tight text-white sm:text-4xl">
                Hi, I'm Mohamed Khaled
              </p>
              <p className="mt-4 max-w-2xl font-thin text-xl text-gray-400 lg:mx-auto">
                A Mern Stack Developer with expertise in web development
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-3xl font-semibold text-gray-300 border-b-2 border-gray-500 pb-4">
                    My Journey
                  </h3>
                  <p className="mt-4 text-lg text-gray-400">
                    I started my journey in web development with a passion for
                    creating intuitive and scalable applications. With
                    proficiency in{" "}
                    <span className="text-xl text-emerald-600 font-semibold">
                      HTML, CSS, JavaScript, Tailwind, BootStrap, React,
                      Node.js, Express.js, Mongo DB, MySQL
                    </span>
                  </p>
                </div>
                <div className="rounded-3xl md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-black bg-gray-800 bg-opacity-70">
                  <h3 className="text-2xl font-semibold text-gray-300">
                    Skills & Experience
                  </h3>
                  <div className="flex items-center justify-center flex-wrap gap-3">
                    <div className="text-orange-600 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <FaHtml5 size={50} />
                      <span className="font-semibold text-gray-300">HTML</span>
                    </div>
                    <div className="text-blue-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <FaCss3Alt size={50} />
                      <span className="font-semibold text-gray-300">CSS</span>
                    </div>
                    <div className="text-yellow-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <IoLogoJavascript size={50} />
                      <span className="font-semibold text-gray-300">
                        JavaScript
                      </span>
                    </div>
                    <div className="text-blue-700 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <FaReact size={50} />
                      <span className="font-semibold text-gray-300">React.js</span>
                    </div>
                    <div className="text-green-700 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <FaNodeJs size={50} />
                      <span className="font-semibold text-gray-300">Node.js</span>
                    </div>
                    <div className="text-cyan-600 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <RiTailwindCssFill size={50} />
                      <span className="font-semibold text-gray-300">
                        Tailwind CSS
                      </span>
                    </div>
                    <div className="text-violet-700 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <FaBootstrap size={50} />
                      <span className="font-semibold text-gray-300">
                        BootStrap
                      </span>
                    </div>
                    <div className="text-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <SiExpress size={50} />
                      <span className="font-semibold text-gray-300">
                        Express.js
                      </span>
                    </div>
                    <div className="text-green-700 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <SiMongodb size={50} />
                      <span className="font-semibold text-gray-300">Mongo DB</span>
                    </div>
                    <div className="text-sky-700 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <SiMysql size={50} />
                      <span className="font-semibold text-gray-300">MYSQL</span>
                    </div>
                    <div className="text-orange-600 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <FaGitAlt size={50} />
                      <span className="font-semibold text-gray-300">GIT</span>
                    </div>
                    <div className="text-black flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-900 hover:scale-105 transition-transform duration-300">
                      <FaGithub size={50} />
                      <span className="font-semibold text-gray-300">Git hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-semi-bold text-gray-300">
                More About Me
              </h3>
              <p className="m-7 text-lg text-gray-400">
                Apart from coding, I am passionate about learning new
                technologies and keeping myself up-to-date with the latest
                trends in web development. <br />I also study at the Faculty of
                Commerce, Helwan University, I am 20 years old, and I am very
                excited to learn more and more.
              </p>
            </div>
          </div>
    </motion.div>
        </div>
      </div>
  );
};

export default About;
