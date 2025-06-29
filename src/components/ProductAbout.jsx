import React from "react";

const ProductAbout = () => {
  return (
    <div
      name="productabout"
      className="w-full h-screen bg-gradient-to-b bg-[#bb9b85] text-black"
    >
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Our Product.
          </p>
        </div>
        <p className="text-xl mt-20">
            Two brothers, a small town, and shoes that changed the world. Since 1825, Clarks has redefined shoemaking - evolving from a humble workshop in Street, Somerset, into a globally renowned footwear brand empowering millions to move comfortably.
        </p>
      </div>
    </div>
  );
};

export default ProductAbout;
