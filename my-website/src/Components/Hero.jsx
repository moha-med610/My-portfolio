const Hero = () => {
  return (
    <section className="relative"> 
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:mt:mt-0 mt-10">
                <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">Hi There, <br />
                I,m <span className="text-red-600">Mohamed </span>Khaled</h1>
                <p className="md:text-2xl text-xl mb-4">Front-End Developer & Web Designer</p>
                <p className="mb-4">I'm a passionate web developer with expertise in <span className="text-2xl text-blue-600">React</span> , <span className="text-2xl">Next.js</span>, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
                <button className="bg-red-600 text-white px-3 py-2 w-max rounded-md">Download CV</button>
            </div>
            <div className="md:w-1/2 relative flex justify-center items-end">
            <img src="/images/hero.png" alt="" className="lg:h-[90vh] h-96"/>
            <img src="/images/js-logo.png" alt="" className="absolute w-10 top-36 left-0 rounded-full md:hidden"/>
            <img src="/images/tailwind.png" alt="" className="absolute w-10 top-0 right-5 md:hidden rounded-full"/>
            <img src="/images/react-logo.png" alt="" className="absolute w-10 rounded-full right-0  bottom-36 md:hidden"/>
            </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-100    border-collapse p-4 md:flex flex-col gap-6 rounded-full">
        <a href="https://www.facebook.com/profile.php?id=100007448079879" target="_blank"><img src="/images/facebook.png" alt="" className="w-20 rounded-full"/></a>
        <a href="https://www.instagram.com/mohakhaled_official/" target="_blank"><img src="/images/instagram.png" alt="" className="w-20 rounded-3xl"/></a>
        <a href="https://x.com/Fantzia_" target="_blank"><img src="/images/twiter.png" alt="" className="w-20 rounded-2xl"/></a>
        <a href="https://www.linkedin.com/in/mo%C4%A5%C3%A3med-k%C4%A5aled-42509b322/" target="_blank"><img src="/images/linkedin.png" alt="" className="w-20 rounded-3xl"/></a>
      </div>
    </section>
  )
}

export default Hero
