import React from "react";
import reactCrud from "../assets/portfolio/reactCrud.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import etechGpt3 from "../assets/portfolio/etechGpt3.png";
import etechRestaurant from "../assets/portfolio/etechRestaurant.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: etechRestaurant,
      demo: "https://1etechub.github.io/gpt-3",
      code: "https://github.com/1etecHub/etech-restaurant",
    },
    {
      id: 2,
      src: etechGpt3,
      demo: "https://1etechub.github.io/gpt-3",
      code: "https://github.com/1etecHub/gpt-3",
    },
    {
      id: 3,
      src: reactCrud,
      demo: "https://1etechub.github.io/react-crud",
      code: "https://github.com/1etecHub/react-crud"
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: navbar,
      demo: "https://1etechub.github.io/responsive-navbar/",
      code: "https://github.com/1etechub/responsive-navbar"
    },
    {
      id: 6,
      src: reactSmooth,
    },
    {
      id: 7,
      src: installNode,
    },
    {
      id: 8,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full pb-40 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center text-white rounded-md"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105 text-center text-white rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
