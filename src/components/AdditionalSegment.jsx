import React from "react";

const AdditionalSegment = () => {
  return (
    <div
      name="additionalsegment"
      className="w-full h-screen bg-gradient-to-b bg-[#bb9b85] text-black"
    >
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            ADDITIONAL SEGMENT.
          </p>
        </div>
        <p className="text-xl mt-20">
            Our Additional Segments in the shoe category are designed to meet diverse lifestyle needs, fashion preferences, and functional demands. These curated collections go beyond the standard to bring more variety and innovation to your footwear choices.        </p>
      </div>
    </div>
  );
};

export default AdditionalSegment;
