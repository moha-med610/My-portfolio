import { FaGithub } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
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

const Cards = ({ item }) => {
  return (
    <>
    <motion.div
      className="w-[90%] max-w-[400px] bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-200 hover:shadow-xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
    >
      <div className="w-full h-56 relative overflow-hidden group">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="p-6 flex flex-col justify-between bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            <GrFormView size={18} />
            <span className="text-sm font-medium">Preview</span>
          </a>

          <a
            href={item.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            <FaGithub size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
      </motion.div>
      </>
  );
};

export default Cards;
