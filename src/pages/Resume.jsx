import React from "react";
import { Container } from "../components";

const Topic = ({ children, className }) => {
  return <h2 className={`text-3xl font-bold ${className}`}>{children}</h2>;
};

const Content = ({ period, role, description }) => {
  return (
    <div className="">
      <p className="text-gray-400">{period}</p>
      <div>
        <p className="text-xl font-bold m-2">{role}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Resume</h1>
      
    </Container>
  );
};

export default Resume;
