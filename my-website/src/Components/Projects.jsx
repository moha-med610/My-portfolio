import Cards from "./Cards";
import { motion } from "framer-motion";

const Projects = () => {
  const Project = [
    {
      id: 1,
      title: "Prayer Time",
      desc: "Developed a responsive web application using React to display accurate daily prayer times for specific governorates in Egypt. Integrated with a trusted Islamic API to fetch real-time data, and implemented state management and conditional rendering for seamless user interaction. Focused on a clean UI/UX optimized for Arabic users, with support for location-specific prayer data and date",
      image: "/images/myweb.png",
      live: "https://moqit.netlify.app",
      gitHub: "https://github.com/moha-med610/prayer-time.git",
    },
    {
      id: 2,
      title: "Joli cosmetics Store",
      desc: "Developed a complete cosmetics e-commerce platform using React, Node.js, and MongoDB. Implemented features including user authentication, product filtering and an admin dashboard for product. Focused on a responsive UI using Tailwind CSS and optimized backend APIs following RESTful principle",
      image: "/images/Screenshot 2025-05-02 125536.png",
      live: "https://joli-cosmetics.com",
      gitHub: "https://github.com/moha-med610/E-Commerce-Joli-BackEnd.git",
    },
    {
      id: 3,
      title: "Weather",
      desc: "This is a weather application for all cities of the world, a wonderful application that is proportional to all screens using (HTML, JavaScript, CSS).",
      image: "/images/weather.png",
      live: "https://weather132.netlify.app/",
      gitHub: "https://github.com/moha-med610/weather-app.git",
    },
    {
      id: 4,
      title: "Translation App",
      desc: "This is a Translation app from arabic to English using (HTML, JavaScript, Tailwind).",
      image: "/images/tran.png",
      live: "https://translation10.netlify.app/",
      gitHub: "https://github.com/moha-med610/translation-app.git",
    },
    {
      id: 5,
      title: "Tdo List App",
      desc: "A task management web app built with MongoDB, Express, React, and Node.js. Features task creation, editing, and deletion with a responsive UI and RESTful API backend — structured for scalability and clean code.",
      image: "/images/todo.png",
      live: "https://todo120.netlify.app/",
      gitHub: "https://github.com/moha-med610/Todo-Api.git",
    },
    {
      id: 6,
      title: "Analyses Egyption National Id",
      desc: "Analyzing the Egyptian national ID code to extract the year of birth, age in years, months and days, and the time remaining until retirement using vanilla JavaScript.",
      image: "/images/elraqm.png",
      live: "https://elraqm.netlify.app/",
      gitHub: "https://github.com/moha-med610/Analyses_national_id.git",
    },
  ];


  return (
    <section className="relative border-b-2 border-gray-500 py-10 px-4" id="projects">
      <div className="mb-16 max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-20 text-white border-b-2 border-gray-500 pb-4 w-full text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
            {Project.map((item) => {
              return <Cards key={item.id} item={item} />;
            })}
          </div>
      </div>
    </section>
  );
};

export default Projects;
