import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b bg-[#bb9b85] text-black"
    >
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            OBJECTIVE.
          </p>
        </div>
        <p className="text-xl mt-20">
            To build a strong foundation for a materials base that is fit for purpose and offers a wide range of options. Our aim is to support our designer, developer, and sourcing teams through a platform that provides real-time access to certified materials. 
        </p>
        <br />
        <p className="text-xl">
            We strive to connect the materials world through innovation, transparency, and sustainability, while ensuring workflows remain aligned with a future-focused vision.
        </p>
      </div>
    </div>
  );
};

export default About;
