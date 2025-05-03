import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const About = () => {
  return (
    <div className='relative' id='about'>
        <div className='bg-slate-100 py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
            <h2 className='text-red-600 font-semibold tracking-wide uppercase text-3xl mb-4'>About Me</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Hi, I'm Mohamed Khaled</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        A Mern Stack Developer with expertise in web development
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900">My Journey</h3>
                            <p className="mt-4 text-lg text-gray-600">
                            I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the <span className="text-xl text-slate-900 font-semibold">HTML, CSS, JavaScript, Tailwind, BootStrap, React, Node.js, Express.js, Mongo DB, MySQL</span>
                            </p>
                        </div>
                        <div className="border rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-gray-300">
                            <h3 className="text-2xl font-semibold text-black">Skills & Experience</h3>
                            <div className="flex items-center justify-center flex-wrap gap-3">
                                <div className="text-orange-600 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <FaHtml5 size={50} />
                                    <span className="font-semibold text-black">HTML</span>
                                </div>
                                <div className="text-blue-500 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <FaCss3Alt size={50} />
                                    <span className="font-semibold text-black">CSS</span>
                                </div>
                                <div className="text-yellow-500 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <IoLogoJavascript size={50} />
                                    <span className="font-semibold text-black">JavaScript</span>
                                </div>
                                <div className="text-blue-700 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <FaReact size={50} />
                                    <span className="font-semibold text-black">React.js</span>
                                </div>
                                <div className="text-green-700 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <FaNodeJs size={50} />
                                    <span className="font-semibold text-black">Node.js</span>
                                </div>
                                <div className="text-cyan-600 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <RiTailwindCssFill size={50} />
                                    <span className="font-semibold text-black">Tailwind CSS</span>
                                </div>
                                <div className="text-violet-700 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <FaBootstrap size={50} />
                                    <span className="font-semibold text-black">Tailwind CSS</span>
                                </div>
                                <div className="text-black border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <SiExpress size={50} />
                                    <span className="font-semibold text-black">Express.js</span>
                                </div>
                                <div className="text-green-700 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <SiMongodb size={50} />
                                    <span className="font-semibold text-black">Mongo DB</span>
                                </div>
                                <div className="text-sky-700 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <SiMysql size={50} />
                                    <span className="font-semibold text-black">MYSQL</span>
                                </div>
                                <div className="text-orange-600 border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <FaGitAlt size={50} />
                                    <span className="font-semibold text-black">GIT</span>
                                </div>
                                <div className="text-black border border-gray-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-300">
                                    <FaGithub size={50} />
                                    <span className="font-semibold text-black">Git hub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-3xl font-semi-bold text-gray-900">More About Me</h3>
                    <p className="mt-4 text-lg text-gray-600">
                    Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. <br />
                    I also study at the Faculty of Commerce, Helwan University, I am 20 years old, and I am very excited to learn more and more.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
