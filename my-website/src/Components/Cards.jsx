import { FaGithub } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";

const Cards = ({ item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 lg:h-full flex flex-col">
      <img src={item.image} alt="" className="rounded-t-lg" />
      
      <div className="p-4 flex-1 flex flex-col justify-between bg-gray-200">
        <div>
          <h1 className="text-center font-semibold text-xl mb-2">{item.title}</h1>
          <p className="text-gray-700">{item.desc}</p>
        </div>
        
        <div className="flex justify-start gap-3 mt-3">
          <a
            href={item.live}
            target="_blank"
            className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-2 rounded-md text-center"
            rel="noopener noreferrer"
          >
            <GrFormView size={20} className="inline-block mr-1" />
            Live Preview
          </a>
          <a
            href={item.gitHub}
            target="_blank"
            className="bg-gray-800 hover:bg-gray-900 transition text-white px-3 py-2 rounded-md"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} className="inline-block mr-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
