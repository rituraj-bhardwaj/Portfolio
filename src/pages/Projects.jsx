import React from 'react';
import { Container, ProjectCard } from "../components";
import blog_post from "/src/assets/blog_post.png";
import edubot from "/src/assets/edubot.png";
import fintrack from "/src/assets/fintrack.png";
import image_gallary from "/src/assets/image_gallary.png";
import weather_app from "/src/assets/weather_app.png";

const projects = [
  {
    name: 'PixelPulse',
    image: blog_post,
    description: 'This project is a blogging website, where a user can both read and create its own post. features include like, comment, authentication, saving posts'
  },
  {
    name: 'Edubot',
    image: edubot,
    description: "The project showcase the usecase of AI chatbot for education purposes. Here using system promting the chatbot is enforced a restriction to not generate content outside of education."
  },
  {
    name: 'Fintrack',
    image: fintrack,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores praesentium mollitia enim voluptate eum dignissimos odit vitae voluptatem'
  },
  {
    name: 'Image Gallary',
    image: image_gallary,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolore molestiae officia nihil voluptatum modi dolores porro quidem eaque? Ipsam?'
  },
  {
    name: 'Weather App',
    image: weather_app,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint earum sequi in ea sed accusantium, similique dolorem labore accusamus iste.'
  }
]

const Projects = () => {
  return (
    <Container className={'max-w-[1280px] mx-auto'}>
      <h1 className='text-3xl font-bold mb-6'>Projects</h1>
      {
        projects.map((item, index) => (
          <ProjectCard 
            key={item?.name}
            projectName={(index + 1) + '. ' + item?.name}
            image={item?.image}
            description={item?.description}
          />
        ))
      }
    </Container>
  );
};

export default Projects;