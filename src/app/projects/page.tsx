"use client";
import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {}, []);

  const cardData = [
    {
      img: "/images/pic1.png",
      title: "Ice-Cream Shop Website ",
      description: "Using Next.js TypeScript And Tailwind",
      link: "https://ice-cream-website-using-next-js-5x3v.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },
    {
      img: "/images/pic2.png",
      title: "Inventory-Management-System",
      description: "Using Next.js TypeScript And Tailwind",
      link: "https://inventory-management-system-seven-tawny.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },
    {
      img: "/images/pic3.png",
      title: "Countdown Timer",
      description: "Using Next.js TypeScript And Tailwind",
      link: "https://30-days-of-30-projects-count-down-timer.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },

    {
      img: "/images/pic4.png",
      title: "Adventure Game",
      description: "Using TypeScript",
      link: "https://github.com/Ayesha1130/Adventure_Game_Project.git",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },

    {
      img: "/images/pic5.png ",
      title: "Static Interactive Resume Builder",
      description: "Using HTML Css And Typescript",
      link: "https://github.com/Ayesha1130/Hackathons_Milestone_1_2.git",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },

    {
      img: "/images/pic6.png",
      title: "OOP Project",
      description: "Using TypeSrcipt",
      link: "https://github.com/Ayesha1130/OOP-My-Bank-Project.git",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },
  ];
  return (
    <div className="flex flex-col items-center mt-40 ">
      <h1 className=" text-5xl md:text-6xl animate-bounce font-rubik font-bold mb-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-10 mb-24">
        {cardData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
            link={card.link}
            {...card.aos}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
