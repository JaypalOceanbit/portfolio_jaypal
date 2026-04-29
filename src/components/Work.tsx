import { useState } from "react";
import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    id: 1,
    name: "Restaurant Booking App",
    category: "Full Stack Web",
    description: "Table booking, menu management and admin dashboard built with Laravel.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    name: "iOS Task Manager",
    category: "iOS Development",
    description: "Native iOS productivity app with task tracking and local persistence.",
    tags: ["Swift", "SwiftUI", "UIKit"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    name: "E-Commerce Platform",
    category: "Full Stack Web",
    description: "Complete e-commerce solution with cart, checkout and order management.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    name: "Developer Portfolio",
    category: "Frontend",
    description: "This portfolio — built with React and TypeScript featuring smooth animations.",
    tags: ["React", "HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    link: "#",
  },
  {
    id: 5,
    name: "Inventory Management",
    category: "Web Application",
    description: "Stock tracking system with real-time updates and reporting dashboard.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    link: "#",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="work-card">
    {/* Image */}
    <div className="work-card-img-wrap">
      <img src={project.image} alt={project.name} />
      <span className="work-card-num">0{project.id}</span>
    </div>

    {/* Body */}
    <div className="work-card-body">
      <div className="work-card-header">
        <span className="work-card-cat">{project.category}</span>
      </div>
      <h4 className="work-card-title">{project.name}</h4>
      <p className="work-card-desc">{project.description}</p>
      <div className="work-card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="work-tag">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">

        {/* Centered heading — same style as Career */}
        <div className="work-heading">
          <h2>My Work</h2>
        </div>

        {/* First row — 3 cards always visible */}
        <div className="work-grid">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>

        {/* Extra cards — smooth expand */}
        <div className={`work-extra ${showAll ? "work-extra-open" : ""}`}>
          <div className="work-grid work-grid-extra">
            {projects.slice(3).map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>

        {/* Toggle button */}
        <div className="work-btn-row">
          <button className="work-view-btn" onClick={() => setShowAll((v) => !v)} data-cursor="disable">
            {showAll ? "Show Less" : "View All Projects"}
            <span className={`work-btn-arrow ${showAll ? "work-btn-arrow-up" : ""}`}>
              <MdArrowOutward />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Work;
