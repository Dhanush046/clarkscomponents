import React from "react";
import bg1 from "../assets/c60d78ef82ca5a63dd1f242cd4785bdc2172bb59.jpg";
import bg2 from "../assets/32d542137528d502184ec458b7ae38175a892a3d.jpg";
import bg3 from "../assets/671020261dd01292ab3184aff4d8f585f0816b25.jpg";
import bg4 from "../assets/b0ed2bc195a98026cb2a8d941736ef89d7728d0f.jpg";

export const Additional = () => {
  const portfolios = [
  {
    id: 1,
    name: "Oregon Milled Nubuck",
    src: bg1,
    link: "https://drive.google.com/drive/folders/...",
  },
  {
    id: 2,
    name: "Vintage Suede",
    src: bg2,
    link: "https://drive.google.com/drive/folders/...",
  },
  {
    id: 3,
    name: "EcoCanvas",
    src: bg3,
    link: "https://drive.google.com/drive/folders/...",
  },
  {
    id: 4,
    name: "Full Grain Leather",
    src: bg4,
    link: "https://drive.google.com/drive/folders/...",
  },
];


  return (
    <div
      name="additional"
      id="additional"
      className="w-full h-screen bg-[#89654c] text-white flex flex-col justify-center"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Our Products.
        </h2>
        <p className="text-center mb-6 text-base">
          At ABShrms, we are committed to delivering products that redefine industry standards.
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-6 sm:px-0">
  {portfolios.map(({ id, name, src, link }) => (
    <div
      key={id}
      className="w-full bg-[#89654c] text-black rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-between py-4"
    >
      <img
        src={src}
        alt={`product-${id}`}
        className="mx-auto w-32 h-32 rounded-full object-cover hover:scale-105 transition-transform duration-200 shadow"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#89654c] shadow-xl text-white px-6 py-2 rounded hover:bg-[#4a2f17] transition mt-4 text-center text-sm"
      >
        {name}
      </a>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Additional;