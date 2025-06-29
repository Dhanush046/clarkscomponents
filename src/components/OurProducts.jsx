// // import React from "react";
// // import bg from "../assets/leather.png";

// // export const OurProducts = () => {
// //   const portfolios = [
// //     {
// //       id: 1,
// //       src: bg,
// //     },
// //     {
// //       id: 2,
// //       src: bg,
// //     },
// //     {
// //       id: 3,
// //       src: bg,
// //     },
// //     {
// //       id: 4,
// //       src: bg,
// //     },
// //     {
// //       id: 5,
// //       src: bg,
// //     },
// //   ];

// //   return (
// //     <div
// //       name="ourproducts"
// //       className="w-full bg-gradient-to-b bg-[#5B3B1D] text-white md:h-screen"
// //     >
// //       <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full items-center">
// //         <div className=" pb-8">
// //           <p className="text-3xl md:text-4xl font-bold text-center mb-2">
// //             Our Products.
// //           </p>
// //           <br />
// //         <p className="text-center mb-10 text-lg">
// //           At ABShrms, we are committed to delivering products that redefine industry standards.
// //         </p>
// //         </div>
// //         <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
// //           {portfolios.map(({ id, src }) => (
// //             <div key={id} className=" shadow-md">
// //               <img
// //                 src={src}
// //                 alt=""
// //                 className=" mx-auto rounded-md duration-200 hover:scale-110 "
// //               />
// //               <div className="flex items-center justify-center">
// //                 <button className=" w-1/2 px-6 py-3 m-4 duration-100 hover:scale-110">
// //                   Demo
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// import React from "react";
// import bg from "../assets/leather.png";

// export const OurProducts = () => {
//   const portfolios = [
//     { id: 1, src: bg },
//     { id: 2, src: bg },
//     { id: 3, src: bg },
//     { id: 4, src: bg },
//     { id: 5, src: bg },
//   ];

//   return (
//     <div
//       name="ourproducts"
//       className="w-full bg-clarksbrown text-white py-16 bg-[#5B3B1D]"
//     >
//       <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//           Our Products.
//         </h2>
//         <p className="text-center mb-10 text-lg">
//           At ABShrms, we are committed to delivering products that redefine industry standards.
//         </p>

//         {/* First Row - 3 Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-6 sm:px-0 mb-8">
//           {portfolios.slice(0, 3).map(({ id, src }) => (
//             <div key={id} className="bg-[#5B3B1D] text-black rounded-lg shadow-md hover:shadow-xl transition duration-300">
//               <img
//                 src={src}
//                 alt="product"
//                 className="mx-auto rounded-t-md hover:scale-105 transition-transform duration-200"
//               />
//               <div className="flex items-center justify-center py-4">
//                 <button className="bg-clarksbrown text-white px-6 py-2 rounded hover:bg-[#4a2f17] transition">
//                   Demo
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Second Row - 2 Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  w-full px-6 sm:px-0">
//           {portfolios.slice(3).map(({ id, src }) => (
//             <div key={id} className="bg-[#5B3B1D] text-black rounded-lg shadow-md hover:shadow-xl transition duration-300">
//               <img
//                 src={src}
//                 alt="product"
//                 className="mx-auto rounded-t-md hover:scale-105 transition-transform duration-200"
//               />
//               <div className="flex items-center justify-center py-4">
//                 <button className="bg-clarksbrown text-white px-6 py-2 rounded hover:bg-[#4a2f17] transition">
//                   Demo
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import bg from "../assets/leather.png"; // Replace with your actual images

// export const OurProducts = () => {
//   const navigate = useNavigate();

//   const portfolios = [
//     { id: 1, src: bg },
//     { id: 2, src: bg },
//     { id: 3, src: bg },
//     { id: 4, src: bg },
//     { id: 5, src: bg },
//   ];

  

//   return (
//     <div
//       name="ourproducts"
//       id="ourproducts"
//       className="w-full bg-[#5B3B1D] text-white py-16"
//     >
//       <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//           Our Products.
//         </h2>
//         <p className="text-center mb-10 text-lg">
//           At ABShrms, we are committed to delivering products that redefine industry standards.
//         </p>

//         {/* First Row - 3 Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-6 sm:px-0 mb-8">
//           {portfolios.slice(0, 3).map(({ id, src, link }) => (
//             <div
//               key={id}
//               className="w-full h-72 bg-[#5B3B1D] text-black rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
//             >
//               <img
//                 src={src}
//                 alt={`product-${id}`}
//                 className="mx-auto rounded-t-md hover:scale-105 transition-transform duration-200 h-40 object-contain"
//               />
//               <div className="flex items-center justify-center py-4">
//                 <a
//                   onClick={() => navigate(`/product/${id}`)}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#5B3B1D] text-white px-6 py-2 rounded hover:bg-[#4a2f17] transition"
//                 >
//                   Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Second Row - 2 Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-6 sm:px-0">
//           {portfolios.slice(3).map(({ id, src, link }) => (
//             <div
//               key={id}
//               className="w-full h-72 bg-[#5B3B1D] text-black rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
//             >
//               <img
//                 src={src}
//                 alt={`product-${id}`}
//                 className="mx-auto rounded-t-md hover:scale-105 transition-transform duration-200 h-40 object-contain"
//               />
//               <div className="flex items-center justify-center py-4">
//                 <a
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#5B3B1D] text-white px-6 py-2 rounded hover:bg-[#4a2f17] transition"
//                 >
//                   Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// import React from "react";
// import bg1 from "../assets/c60d78ef82ca5a63dd1f242cd4785bdc2172bb59.jpg";
// import bg2 from "../assets/32d542137528d502184ec458b7ae38175a892a3d.jpg";
// import bg3 from "../assets/671020261dd01292ab3184aff4d8f585f0816b25.jpg";
// import bg4 from "../assets/b0ed2bc195a98026cb2a8d941736ef89d7728d0f.jpg";
// import bg5 from "../assets/da80e382877607a1e815a77f2b7b4a0faa63615a.jpg";

// export const OurProducts = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: bg1,
//       link: "https://drive.google.com/drive/folders/16oVAbHJ85MnFPY5PPnvOiB6JcPfm0wmP?usp=drive_link",
//     },
//     {
//       id: 2,
//       src: bg2,
//       link: "https://drive.google.com/drive/folders/1UMTOrbLOlqy4-Oeup8WhYrLPNOUjDhUE?usp=drive_link",
//     },
//     {
//       id: 3,
//       src: bg3,
//       link: "https://drive.google.com/drive/folders/PRODUCT3_FOLDER_ID",
//     },
//     {
//       id: 4,
//       src: bg4,
//       link: "https://drive.google.com/drive/folders/PRODUCT4_FOLDER_ID",
//     },
//     {
//       id: 5,
//       src: bg5,
//       link: "https://drive.google.com/drive/folders/PRODUCT5_FOLDER_ID",
//     },
//   ];

//   return (
//     <div
//       name="ourproducts"
//       id="ourproducts"
//       className="w-full bg-[#5B3B1D] text-white py-16"
//     >
//       <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//           Our Products.
//         </h2>
//         <p className="text-center mb-10 text-lg">
//           At ABShrms, we are committed to delivering products that redefine industry standards.
//         </p>

//         {/* First Row - 3 Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-6 sm:px-0 mb-8">
//           {portfolios.slice(0, 3).map(({ id, src, link }) => (
//             <div
//               key={id}
//               className="w-full h-72 bg-[#5B3B1D] text-black rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
//             >
//               <img
//                 src={src}
//                 alt={`product-${id}`}
//                 className="mx-auto w-32 h-32 rounded-full object-cover hover:scale-105 transition-transform duration-200 shadow"
//               />
//               <div className="flex items-center justify-center py-4">
//                 <a
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#5B3B1D] text-white px-6 py-2 rounded hover:bg-[#4a2f17] transition"
//                 >
//                   Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Second Row - 2 Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-6 sm:px-0">
//           {portfolios.slice(3).map(({ id, src, link }) => (
//             <div
//               key={id}
//               className="w-full h-72 bg-[#5B3B1D] text-black rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
//             >
//               <img
//                 src={src}
//                 alt={`product-${id}`}
//                 className="mx-auto w-32 h-32 rounded-full object-cover hover:scale-105 transition-transform duration-200 shadow "
//               />
//               <div className="flex items-center justify-center py-4">
//                 <a
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#5B3B1D] text-white px-6 py-2 rounded hover:bg-[#4a2f17] transition"
//                 >
//                   Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import bg1 from "../assets/c60d78ef82ca5a63dd1f242cd4785bdc2172bb59.jpg";
import bg2 from "../assets/32d542137528d502184ec458b7ae38175a892a3d.jpg";
import bg3 from "../assets/671020261dd01292ab3184aff4d8f585f0816b25.jpg";
import bg4 from "../assets/b0ed2bc195a98026cb2a8d941736ef89d7728d0f.jpg";
import bg5 from "../assets/da80e382877607a1e815a77f2b7b4a0faa63615a.jpg";

export const OurProducts = () => {
  const portfolios = [
    {
      id: 1,
      name: "Leather",
      src: bg1,
      link: "https://drive.google.com/drive/folders/16oVAbHJ85MnFPY5PPnvOiB6JcPfm0wmP?usp=drive_link",
    },
    {
      id: 2,
      name: "Non Leather",
      src: bg2,
      link: "https://drive.google.com/drive/folders/1UMTOrbLOlqy4-Oeup8WhYrLPNOUjDhUE?usp=drive_link",
    },
    {
      id: 3,
      name: "Soles",
      src: bg3,
      link: "https://drive.google.com/drive/folders/PRODUCT3_FOLDER_ID",
    },
    {
      id: 4,
      name: "Reinforcements",
      src: bg4,
      link: "https://drive.google.com/drive/folders/PRODUCT4_FOLDER_ID",
    },
    {
      id: 5,
      name: "Laces Tapes",
      src: bg5,
      link: "https://drive.google.com/drive/folders/PRODUCT5_FOLDER_ID",
    },
  ];

  return (
    <div
      name="ourproducts"
      id="ourproducts"
      className="w-full h-screen bg-[#89654c] text-white flex items-center justify-center"
    >
      <div className="max-w-screen-xl w-full flex flex-wrap justify-center gap-8 px-4">
        {portfolios.map(({ id, name, src, link }) => (
          <div
            key={id}
            className="w-60 h-64 bg-[#89654c] rounded-lg shadow-md hover:shadow-xl flex flex-col items-center justify-between py-4 transition"
          >
            <img
              src={src}
              alt={`product-${id}`}
              className="w-24 h-24 rounded-full object-cover shadow hover:scale-105 transition-transform duration-200"
            />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#89654c] text-white px-6 py-2 rounded hover:bg-[#26170b] text-sm transition"
            >
              {name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


