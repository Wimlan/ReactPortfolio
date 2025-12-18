import "./assets/coding.css";

const projects = [
  {
    title: "Rock Paper Monsters",
    link: "https://wilmayasuda.se/projects/rockpapermonstersintro.html",
    languages: ["Javascript", "HTML5", "Sass"],
    img: "assets/img/monsterprojectsimg.jpg",
    description:
      "Won shared first place for the Junior Dev Sverige's Halloween competition 2025. This simple but fun twist on the classic Rock Paper Scissors game, challenges the player to survive against monsters in a style reminiscent of text-based RPGs.",
  },
  {
    title: "Dream Villiage",
    link: "https://dreamvilliage.se/",
    languages: ["Javascript", "HTML5", "CSS"],
    img: "assets/img/dreamvilliage.jpg",
    description:
      "Designed and developed a modern, responsive homepage for the band Dream Villiage to establish their online presence and engage fans. Created the user interface design in Figma, focusing on brand identity and user-friendly navigation.",
  },
];

function Projects() {
  return (
    <>
      <div id="projects"></div>
      <div data-aos="fade-left" id="projects-page">
        <h2>Projects</h2>

        <div id="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>
                <a target="_blank" href={project.link}>
                  {project.title}
                </a>
                {" >"}
              </h3>

              <h4>
                {"["}
                {project.languages.join(", ")}
                {"]"}
              </h4>

              <img
                src={project.img}
                alt={project.title}
                style={{ width: "600px" }}
              />

              <h4 className="information-label">DESCRIPTION</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
