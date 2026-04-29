import "./styles/Career.css";

const experiences = [
  {
    id: 1,
    role: "Summer Internship — I",
    company: "JDB Techs Pvt. Ltd",
    location: "Surat",
    period: "September 2022",
    duration: "1 month",
    description:
      "Completed first summer internship gaining hands-on experience in web development fundamentals and industry practices.",
    tags: ["HTML", "CSS", "PHP"],
    current: false,
  },
  {
    id: 2,
    role: "Summer Internship — II",
    company: "JDB Techs Pvt. Ltd",
    location: "Surat",
    period: "July – August 2023",
    duration: "2 months",
    description:
      "Second internship focused on advanced web technologies, building real-world projects with PHP and MySQL.",
    tags: ["PHP", "MySQL", "Laravel"],
    current: false,
  },
  {
    id: 3,
    role: "iOS Developer",
    company: "Oceanbit Solutions Pvt. Ltd",
    location: "Surat",
    period: "October 2023 – March 2024",
    duration: "6 months",
    description:
      "Developed native iOS applications using Swift, SwiftUI, and UIKit with local data persistence via Core Data.",
    tags: ["Swift", "SwiftUI", "UIKit", "Core Data", "Xcode"],
    current: false,
  },
  {
    id: 4,
    role: "Web Developer (Part-Time)",
    company: "Oceanbit Solutions Pvt. Ltd",
    location: "Surat",
    period: "May 2024 – Present",
    duration: "Current",
    description:
      "Currently building scalable web applications using Laravel, PHP, MySQL, and modern frontend technologies.",
    tags: ["Laravel", "PHP", "MySQL", "TailwindCSS"],
    current: true,
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-timeline-wrap">
          {experiences.map((exp, i) => (
            <div className={`career-card ${exp.current ? "career-card-current" : ""}`} key={exp.id}>
              {/* Left: index + line */}
              <div className="career-card-left">
                <div className="career-card-dot">
                  {exp.current && <span className="career-dot-pulse" />}
                </div>
                {i < experiences.length - 1 && <div className="career-card-line" />}
              </div>

              {/* Right: content */}
              <div className="career-card-content">
                <div className="career-card-header">
                  <div className="career-card-title-wrap">
                    <h4 className="career-card-role">{exp.role}</h4>
                    <p className="career-card-company">
                      {exp.company}
                      <span className="career-card-location"> · {exp.location}</span>
                    </p>
                  </div>
                  <div className="career-card-period-wrap">
                    <span className={`career-card-badge ${exp.current ? "career-badge-active" : ""}`}>
                      {exp.duration}
                    </span>
                    <p className="career-card-period">{exp.period}</p>
                  </div>
                </div>
                <p className="career-card-desc">{exp.description}</p>
                <div className="career-card-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="career-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
