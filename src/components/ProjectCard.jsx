import React from "react";

const ProjectCard = ({ projectName, description, image }) => {
  return (
    <div className="w-full mb-12 md:mb-24 lg:mb-32 md:flex justify-around">
      <div className="w-full md:w-[300px] lg:w-[400px]">
        <h2 className="text-xl font-bold mb-2 cursor-pointer">{projectName}</h2>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
      
      <img src={image} alt="project image"  className="object-cover rounded-sm shadow-sm cursor-pointer mt-2 md:w-[400px] lg:w-[500px] "/>
    </div>
  );
};

export default ProjectCard;
