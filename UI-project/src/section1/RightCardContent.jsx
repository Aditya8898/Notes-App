import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center font-bold text-xl">
        {props.id+1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-white text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro
          corporis ducimus laborum modi nobis.
        </p>
        <div className="flex gap-4">
          <button style={{backgroundColor:props.color}} className=" text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            {props.tag}
          </button>
          <button className=" text-white font-medium px-8 py-2 rounded-full hover:bg-blue-700 transition">
            <i className="ri-arrow-right-line text-white text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
