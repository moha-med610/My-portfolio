
const About = () => {
  return (
    <div className='relative' id='about'>
        <div className='bg-slate-100 py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
            <h2 className='text-red-600 font-semibold tracking-wide uppercase text-3xl mb-4'>About Me</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Hi, I'm Mohamed Khaled</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        A Front-end Developer with expertise in web development
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
                            <p className="mt-4 text-lg text-gray-600">
                            I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the <span className="text-2xl text-blue-600">(HTML, CSS, JavaScript, Tailwind, BootStrap, React, Node.js, and Next.js)</span>
                            </p>
                        </div>
                        <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                            <h3 className="text-2xl font-semibold text-red-600">Skills & Experience</h3>
                            <div className="flex items-center justify-center flex-wrap gap-3">
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/html.png" alt="" className="w-16" />
                                    <span className="font-semibold">HTML</span>
                                </div>
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/css.png" alt="" className="w-14" />
                                    <span className="font-semibold">CSS</span>
                                </div>
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/js-logo.png" alt="" className="w-16 rounded-full" />
                                    <span className="font-semibold">JavaScript</span>
                                </div>
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/react-logo.png" alt="" className="w-14 rounded-full" />
                                    <span className="font-semibold">React.js</span>
                                </div>
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/next.png" alt="" className="w-14" />
                                    <span className="font-semibold">Next.js</span>
                                </div>
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/node.png" alt="" className="w-14 rounded-full" />
                                    <span className="font-semibold">Node.js</span>
                                </div>
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/tailwind.png" alt="" className="w-14 rounded-full" />
                                    <span className="font-semibold">Tailwind CSS</span>
                                </div>
                                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                                    <img src="/images/ui.png" alt="" className="w-24 rounded-full" />
                                    <span className="font-semibold">UI/UX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-2xl font-semi-bold text-gray-900">More About Me</h3>
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
