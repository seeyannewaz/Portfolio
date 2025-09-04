import { ArrowRight, Github } from "lucide-react";
import hydrawatchImg from "../assets/hydrawatch.webp";
import listernshipsImg from "../assets/Listernships.png";
import weatherwiseImg from "../assets/weatherwise.jpg";
import experteventsImg from "../assets/Expert.webp";
import satelliteImg from "../assets/satellite.png";
import fastfoodImg from "../assets/fastfood.png";

const projects = [
  {
    id: 1,
    title: "HydraWatch",
    description:
      "Built a hydrate prediction web app at HackUTD for EOG Resources — a Flask + Next.js app with real-time dashboards, a 95%-accurate ML model, and scalable data handling for 100k+ IoT sensor points.",
    image: hydrawatchImg,
    tags: [
      "Python",
      "JavaScript",
      "Flask",
      "Next.js",
      "SQLite",
      "SQLAlchemy",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Reevu01/Hydra-Watch",
  },
  {
    id: 2,
    title: "Listernships",
    description:
      "Full-stack app to manage internship applications with CRUD features, real-time status updates, SQLite storage, and a responsive Chakra UI interface with dark mode.",
    image: listernshipsImg,
    tags: [
      "Python",
      "JavaScript",
      "React",
      "SQLite",
      "SQLAlchemy",
      "Flask",
      "Chakra UI",
    ],
    githubUrl: "https://github.com/seeyannewaz/Listernships",
  },
  {
    id: 3,
    title: "WeatherWise",
    description:
      "Responsive app built with HTML, CSS, and JavaScript, integrating the OpenWeatherMap API for real-time forecasts with a light/dark mode toggle and smooth UI transitions.",
    image: weatherwiseImg,
    tags: ["JavaScript", "HTML/CSS", "REST API", "OpenWeatherMap API"],
    githubUrl: "https://github.com/seeyannewaz/WeatherWise",
  },
  {
    id: 4,
    title: "ExpertEvents",
    description:
      "Full-stack app linking 50+ university student organizations with 30k+ students, featuring an AI chatbot (GPT-4 Turbo) for personalized event recommendations and a real-time Firestore calendar.",
    image: experteventsImg,
    tags: ["Dart", "Flutter", "Firebase", "Firestore", "GPT-4 Turbo"],
    githubUrl: "https://github.com/acm-projects/ExpertEvents",
  },
  {
    id: 5,
    title: "Satellite",
    description:
      "C++ program simulating telemetry data collection, storage, and transmission in an embedded satellite system, optimized with OOP, file I/O, and circular arrays for high efficiency and accuracy.",
    image: satelliteImg,
    tags: ["C++"],
    githubUrl: "https://github.com/seeyannewaz/Satellite",
  },
  {
    id: 6,
    title: "Fast-Food Chain Analytics",
    description:
      "C++ program for tracking transactions and inventory of a fast-food chain, featuring OOP design, file I/O with CSVs, business analytics, and robust input validation for efficient, accurate operations.",
    image: fastfoodImg,
    tags: ["C++"],
    githubUrl: "https://github.com/seeyannewaz/Fast-Food-Chain-Analytics",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-start items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/seeyannewaz"
          >
            Checkout My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
