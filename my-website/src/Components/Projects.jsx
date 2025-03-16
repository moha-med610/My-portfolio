import Cards from "./Cards"
const Projects = () => {

const Project=[
  {
    id: 1,
    title: "مواقيت الصلاه",
    desc: "A great site to make it easier to know the time of the next adhan Using (HTML, JavaScript, CSS).",
    image:"/images/myweb.png",
    live: "https://moqit.netlify.app",
  },
  {
    id: 2,
    title: "Canvas",
    desc: "This is a unique image editing program using (HTML, JavaScript, CSS).",
    image:"/images/canavs.png",
    live: "https://canavs.netlify.app/",
  },
  {
    id: 3,
    title: "Counter",
    desc: "This is a simple program for counting the required numbers up to the number using (HTML, JavaScript, Tailwind).",
    image:"/images/counter.png",
    live: "https://counterfor.netlify.app/",
  },
  {
    id: 4,
    title: "O-Clock",
    desc: "This is a simple O-Clock using (HTML, JavaScript, CSS).",
    image:"images/oclock.png",
    live: "https://oclock12.netlify.app/",
  },
  {
    id: 5,
    title: "Weather",
    desc: "This is a weather application for all cities of the world, a wonderful application that is proportional to all screens using (HTML, JavaScript, CSS).",
    image:"/images/weather.png",
    live: "https://weather132.netlify.app/",
  },
  {
    id: 6,
    title: "Translation App",
    desc: "This is a Translation app from arabic to English using (HTML, JavaScript, Tailwind).",
    image:"/images/tran.png",
    live: "https://translation10.netlify.app/",
  },
]

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
        <div className="mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white border-b border-r-red-500 w-max pb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
            {Project.map((item)=> {
              return <Cards item={item} />
            })}
          </div>
        </div>
    </section>
  )
}

export default Projects
