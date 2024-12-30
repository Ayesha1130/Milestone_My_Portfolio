"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center  justify-between max-w-7xl w-full">
          <div className="max-w-lg md:w-1/2 mb-8 md:m-0 text-center lg:text-start">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-rubik mb-2">
              Hello I`m
            </h1>
            <h1 className="text-4xl md:5xl lg:text-6xl font-rubik font-extrabold  mb-4">
              Ayesha Iqbal
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-rubik italic mb-6">
              <Typewriter
                options={{
                  strings: ["I`m Front End Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className=" text-center md:text-justify">
              Hi there! I’m Ayesha Iqbal, a front-end developer from Karachi,
              Pakistan. I have a profound love for technology and spend a lot of
              my time delving into the IT world. I find great motivation in
              discovering and overcoming technical challenges.
            </p>
          </div>
          <div>
            <Image
              src="/images/logo pic.png"
              alt="Hero Image"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
