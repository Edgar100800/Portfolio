import React from "react";
// import file_certicate from "../../static/icons/file-certificate.svg";
import ProjectCard from "../../components/projects/projectCard";

const Projects: React.FC = () => {
  return (
    <div className="max-w-[70rem] px-[14px]">
      <div className="flex flex-col items-center text-center my-8">
        <div
          className="bg-black text-[#f5d17b] px-4 py-1 text-lg rounded-lg mb-4 shadow-lg"
          style={{
            boxShadow: "0 0 100px 12px rgba(255, 255, 0, 0.7)",
          }}
        >
          My Projects
        </div>
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          Check out my latest work
        </h2>
        <p className="text-gray-300 max-w-lg text-base">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>

      <ol className=" ">
        <li className="mb-10 ">
          <ProjectCard
            Role="Frontend Developer"
            Company="Google"
            Time="2022"
            Description="I worked on the Google Search team and helped build the
                        new search experience for the users."
            WebLink="#"
          />
        </li>
        <li className="mb-10 ">
          <ProjectCard
            Role="UI/UX Designer"
            Company="Facebook"
            Time="2022"
            Description="I worked on the Facebook team and helped design the
                        new Facebook experience for the users."
            WebLink="#"
          />
        </li>
        <li className="mb-10">
          <ProjectCard
            Role="Backend Developer"
            Company="Amazon"
            Time="2022"
            Description="I worked on the Amazon team and helped build the
                        new Amazon experience for the users."
            WebLink="#"
          />
        </li>
      </ol>
    </div>
  );
};

export default Projects;
