"use client";
import React from "react";
import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  RiJavascriptLine,
  RiTailwindCssFill,
  RiNextjsLine,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { link } from "fs";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  
  }, []);

  const skills = [
    {
      icon: <FaHtml5 className="text-6xl bg-orange-400 rounded-md" />,
      label: "HTML",
      discription: "Hypertext Markup Language",
       border: "border  border-width-2",
       link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      icon: <FaCss3Alt className="text-6xl bg-blue-700 rounded-md" />,
      label: "Css",
      discription: "Cascading Style Sheets",
      link: 'https://www.w3schools.com/css/css_intro.asp',
      
      border: "border  border-width-2",
    },
    {
      icon: <RiJavascriptLine className="text-6xl bg-yellow-300 rounded-md" />,
      label: "JavaScript",
      discription: "A versatile programming language",
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      border: "border  border-width-2",
    },
    {
      icon: <SiTypescript className="text-6xl bg-teal-600 rounded-md" />,
      label: "TypeScript",
      discription: "A superset of JavaScript with static types",
      link: 'https://www.typescriptlang.org/',
      border: "border  border-width-2",
    },
    {
      icon: <RiTailwindCssFill className="text-6xl bg-cyan-800 rounded-md" />,
      label: "Tailwind Css",
      discription:
        "A utility-first CSS framework for creating custom designs quickly.",
        link: 'https://tailwindcss.com/',
        border: "border  border-width-2",
    },
    {
      icon: <FaNodeJs className="text-6xl  bg-green-900 rounded-md" />,
      label: "Node.js",
      discription: "JavaScript runtime built on Chromes V8 engine.",
      link: 'https://nodejs.org/',
      border: "border  border-width-2",
    },
    {
      icon: <FaReact className="text-6xl bg-blue-500 rounded-md" />,
      label: "React.js",
      discription:
        " javaScript Labrary for building dynamic interfaces using reuseable component",
        link: 'https://reactjs.org/',
        border: "border  border-width-2",
    },
    {
      icon: <RiNextjsLine className="text-6xl bg-slate-700  rounded-md" />,
      label: "Next.js",
      discription:
        "A versatile programming language known for its readability.",
        link: 'https://nextjs.org/',
        border: "border  border-width-2",

    },
  ];

  return (
    <div className="flex flex-col items-center p-4 mt-28 ">
      <h1 className=" text-4xl md:text-5xl lg:text-6xl animate-bounce  font-bold">
        My Tech Stack
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-28">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={` rounded-md w-60 md:w-72 lg:w-80 p-10 flex flex-col items-center bg-background ${skill.border}`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {skill.icon}
            <p className="text-center text-2xl md:text-3xl font-bold text-white mt-4">
              {skill.label}
            </p>
            <p className="text-center text-sm md:text-lg  text-gray ">
              {skill.discription}
            </p>
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[#1b1b68] hover:bg-blue-500 mt-4 p-2 rounded-lg">
                Learn More
              </a>

          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
