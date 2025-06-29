// import React from "react";
// import pic from "../assets/leather.png";
// // import { useParams } from "react-router-dom";

// const ProductDetail = () => {
// //   const { id } = useParams();

//   return (
//     <div className="min-h-screen bg-[#5B3B1D] text-white flex flex-col items-center py-12">
//       <h1 className="text-4xl font-bold mb-6">LEATHER</h1>
//       <img src={pic} alt="Leather" className="w-64 mb-6" />

//       <table className="w-full max-w-3xl bg-white text-black text-left rounded shadow">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-3">LEATHER SPECIFICATION</th>
//             <th className="p-3">REFERENCE</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="p-3">Material Name</td>
//             <td className="p-3">Oregon Milled Nubuck</td>
//           </tr>
//           <tr>
//             <td className="p-3">Animal</td>
//             <td className="p-3">Goat</td>
//           </tr>
//           <tr>
//             <td className="p-3">Image</td>
//             <td className="p-3">Image Upload</td>
//           </tr>
//           <tr>
//             <td className="p-3">Material Type</td>
//             <td className="p-3">Leather - Nubuck</td>
//           </tr>
//         </tbody>
//       </table>

//       <button className="mt-6 bg-[#5B3B1D] hover:bg-[#3c2715] text-white px-6 py-2 rounded border border-white">
//         SUBMIT
//       </button>

//       <img src={pic} alt="Clarks Logo" className="mt-12 w-40" />
//     </div>
//   );
// };

// export default ProductDetail;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import shoe from "../assets/leather.png"; // You can use different images per product if needed

// ✅ 1. Product data: specs + drive links
const productData = {
  1: {
    name: "Oregon Milled Nubuck",
    specs: [
      { label: "Material Name", value: "Oregon Milled Nubuck" },
      { label: "Animal", value: "Goat" },
      { label: "Image", value: "Image Upload" },
      { label: "Material Type", value: "Leather - Nubuck" },
    ],
    driveLink: "https://drive.google.com/drive/folders/16oVAbHJ85MnFPY5PPnvOiB6JcPfm0wmP?usp=drive_link",
  },
  2: {
    name: "Vintage Suede",
    specs: [
      { label: "Material Name", value: "Vintage Suede" },
      { label: "Animal", value: "Cow" },
      { label: "Image", value: "Suede Texture" },
      { label: "Material Type", value: "Leather - Suede" },
    ],
    driveLink: "https://drive.google.com/drive/folders/1UMTOrbLOlqy4-Oeup8WhYrLPNOUjDhUE?usp=drive_link",
  },
  3: {
    name: "Smooth Nappa Leather",
    specs: [
      { label: "Material Name", value: "Smooth Nappa" },
      { label: "Animal", value: "Calf" },
      { label: "Image", value: "Glossy Texture" },
      { label: "Material Type", value: "Leather - Nappa" },
    ],
    driveLink: "https://drive.google.com/drive/folders/PRODUCT3_FOLDER_ID",
  },
  4: {
    name: "Eco Friendly Canvas",
    specs: [
      { label: "Material Name", value: "EcoCanvas" },
      { label: "Animal", value: "None" },
      { label: "Image", value: "Canvas Weave" },
      { label: "Material Type", value: "Textile - Canvas" },
    ],
    driveLink: "https://drive.google.com/drive/folders/PRODUCT4_FOLDER_ID",
  },
  5: {
    name: "Full Grain Leather",
    specs: [
      { label: "Material Name", value: "Full Grain Leather" },
      { label: "Animal", value: "Buffalo" },
      { label: "Image", value: "Raw Texture" },
      { label: "Material Type", value: "Leather - Full Grain" },
    ],
    driveLink: "https://drive.google.com/drive/folders/PRODUCT5_FOLDER_ID",
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];

  // 🛑 If invalid product ID
  if (!product) {
    return (
      <div className="min-h-screen bg-[#5B3B1D] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-white text-[#5B3B1D] px-6 py-2 rounded hover:bg-gray-200"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleSubmit = () => {
    window.open(product.driveLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#5B3B1D] text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

      <img src={shoe} alt="Product" className="w-60 mb-6" />

      <table className="w-full max-w-3xl bg-white text-black text-left rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">LEATHER SPECIFICATION</th>
            <th className="p-3">REFERENCE</th>
          </tr>
        </thead>
        <tbody>
          {product.specs.map((row, index) => (
            <tr key={index}>
              <td className="p-3">{row.label}</td>
              <td className="p-3">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleSubmit}
          className="bg-[#4a2f17] text-white px-6 py-2 rounded hover:bg-[#3c2412] transition"
        >
          SUBMIT
        </button>

        {/* <button
          onClick={() => navigate("/")}
          className="bg-white text-[#5B3B1D] px-6 py-2 rounded border hover:bg-gray-200 transition"
        >
          Back to Home
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetail;
