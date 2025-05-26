import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    fetch("/Animations/Contact.json")
      .then((response) => response.json())
      .then((data) => setContactData(data))
      .catch((error) => console.error("Error loading animation data:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://send-email-crrw.onrender.com/api/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Failed to send email");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }
    setLoading(false);
  };

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

  return (
    <section className="relative py-10 px-5 md:px-0" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={cardVariants}
      >
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
              <h2 className="text-3xl font-bold mb-3 text-[#5e72e4]">
                Get in Touch
              </h2>
              <p className="mb-4 text-lg text-white/85 font-thin">
                I'm always open to new opportunities and collaboration. Feel
                free to reach out !
              </p>
              <div className="flex space-x-4 mb-5">
                <a
                  href="https://www.facebook.com/profile.php?id=100007448079879"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-600"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href="https://www.instagram.com/mohakhaled_official/"
                  target="_blank"
                  className="text-gray-400 hover:text-pink-600"
                >
                  <AiFillInstagram size={32} />
                </a>
                <a
                  href="https://wa.me/201144877902"
                  target="_blank"
                  className="text-gray-400 hover:text-green-600"
                >
                  <IoLogoWhatsapp size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mo%C4%A5%C3%A3med-k%C4%A5aled-42509b322/"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-500"
                >
                  <TbBrandLinkedinFilled size={32} />
                </a>
                <a
                  href="https://github.com/moha-med610"
                  target="_blank"
                  className="text-gray-400 hover:text-black"
                >
                  <FaGithub size={32} />
                </a>
              </div>
              {contactData && (
                <Lottie
                  animationData={contactData}
                  className="w-[350px] mx-auto lg:w-[]500px"
                />
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-8 backdrop-blur-lg transition-all duration-300"
            >
              <h1 className="text-3xl font-thin text-white mb-6 text-center bg-[#f4f5f7] bg-clip-text text-transparent">
                Contact With Me
              </h1>

              <div className="space-y-5">
                {/* Name */}
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-transparent peer outline-none transition-all"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:top-[-0.6rem] peer-focus:text-md font-semibold peer-focus:text-gray-700 peer-focus:bg-blue-500 px-2 rounded-full"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="group relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-transparent peer outline-none transition-all"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:top-[-0.6rem] peer-focus:text-md font-semibold peer-focus:text-gray-700 peer-focus:bg-blue-500 px-2 rounded-full"
                  >
                    Email Address
                  </label>
                </div>

                {/* Message */}
                <div className="group relative">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-transparent peer outline-none transition-all resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:top-[-0.6rem] peer-focus:text-md font-semibold peer-focus:text-gray-700 peer-focus:bg-blue-500 px-2 rounded-full"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-[#5e72e4] text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Response Message */}
                {responseMessage && (
                  <div
                    className={`mt-4 p-3 rounded-xl text-sm ${
                      responseMessage.includes("success")
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {responseMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
