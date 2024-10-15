import { useState } from "react";
import projectImage from "../assets/project.png";
const Tab = () => {
  //
  const projectsData = [
    {
      img: projectImage,
    },
    {
      img: projectImage,
    },
    {
      img: projectImage,
    },
    
  ];
  //
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);
  //
  return (
    <div className="projects-section">
      <div className="projects-categories">
        {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
          (category) => (
            <button
              key={category}
              className={`category px-[20px] py-[10px] font-primary text-[24px] text-[#000000] rounded-[12px] ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="projects-gallery mt-[106px]">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt="project" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
