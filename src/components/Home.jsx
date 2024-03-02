import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Ebenezer from "../assets/Ebenezer.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello! I'm Ebenezer Irene and I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Welcome to my corner of the web! I'm delighted to have you here and
            I'm thrilled to share my journey with you. Join me as we explore the
            fascinating world of full-stack development, from frontend marvels
            to backend wonders. Dive into my projects, discover my experiences,
            and let's embark on this exciting journey together. Feel free to
            reach out and connect. 
            Thank you for stopping
            by, and I hope you enjoy your stay!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Ebenezer}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
