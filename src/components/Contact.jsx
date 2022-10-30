import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  // FaPortrait,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        name="contact"
        method="POST"
        action="https://getform.io/f/792c4f85-e64f-46f0-a04b-17d06ea710d0"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <div className="flex justify-center mx-0 p-2">
            <a
              className=" hover:bg-[#0077B5] p-2 flex justify-center items-center  text-gray-300 rounded-full"
              href="https://www.linkedin.com/in/zmbaig/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className=" hover:bg-[#282828] p-2 flex justify-center items-center  text-white rounded-full"
              href="https://github.com/ZMBAIG"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="hover:bg-[#E4405F] p-2 flex justify-center items-center  text-gray-300 rounded-full"
              href="/"
            >
              <FaInstagram size={30} />
            </a>
            <a
              className="hover:bg-[#FF0000] p-2 flex justify-center items-center  text-gray-300 rounded-full"
              href="/"
            >
              <FaYoutube size={30} />
            </a>
            <a
              className="hover:bg-[#1DA1F2] flex p-2 justify-center items-center  text-gray-300 rounded-full"
              href="https://twitter.com/zmbaig"
              target="_blank"
            >
              <FaTwitter size={30} />
            </a>
            {/* <a
              className="hover:bg-emerald-500 p-2 flex justify-center items-center  text-gray-300 rounded-full"
              href="https://zmbaig.github.io/Baig-Portfolio/"
              target="_blank"
            >
              <FaPortrait size={30} />
            </a> */}
          </div>
          <p className="text-1xl font-bold inline border-b-4 border-emerald-600 text-gray-300 ">
            {/* Contact */}
          </p>
          <p className="text-gray-300 py-4"></p>
        </div>
        <p className="text-2xl font-bold inline  text-gray-300 ">Contact</p>
        <input
          className="bg-[#45484f] py-2 p-2 border-b-4 border-emerald-600"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-2 p-2 bg-[#45484f] border-b-4 border-emerald-600"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="my-2 p-2 bg-[#45484f] border-b-4 border-emerald-600"
          type="tel"
          placeholder="Phone Number"
          name="phone"
        />
        <textarea
          className="bg-[#45484f] py-2 p-2 border-b-4 border-emerald-600"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-emerald-600 hover:border-emerald-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
