// import React from "react";
import MontainImage from "../assets/mountains-1412683_1280.png";

const TodoHeader = () => {
  return (
    <div className="lg:rounded-md relative h-[150px] mb-5">
      <img
        src={MontainImage}
        alt="image de montagne"
        className="h-[150px] w-full bg-cover lg:rounded-md saturate-50"
      />
      <div className="bg-indigo-600/40 absolute inset-0 rounded-md flex justify-center items-center">
        <h1 className="text-2xl lg:text-6xl text-white font-bold">
          Application de Todo List
        </h1>
      </div>
    </div>
  );
};

export default TodoHeader;
