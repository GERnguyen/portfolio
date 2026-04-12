import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const ASSET_BASE_URL = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Socially - Social Media Website",
    description:
      "A modern social media platform built with Next.js and Prisma, featuring user authentication via Clerk, real-time interactions, and integrated image uploads with UploadThing. ",
    image: `${ASSET_BASE_URL}projects/project1.png`,
    tags: ["React", "Next.js", "Typescript", "Prisma", "Tailwind"],
    link: "https://social-app-nextjs-xi.vercel.app/",
    github: "https://github.com/GERnguyen/social-app-nextjs",
  },
  {
    title: "Lumina - E Learning Platform",
    description:
      "A comprehensive web-based e-learning ecosystem featuring a robust administrative dashboard for instructors and an intuitive learning interface for students. The platform handles complex workflows, including multi-step course creation, dynamic content delivery, and integrated payment processing.",
    image: `${ASSET_BASE_URL}projects/project2.png`,
    tags: ["React", "NodeJS", "TypeScript", "Tailwind", "TypeORM", "MySQL"],
    link: "https://lumina-elearning.vercel.app/",
    github: "https://github.com/GERnguyen/lumina-fe-oose",
  },
  {
    title: "Lumina Mobile Native - E Learning Mobile App",
    description:
      "A cross-platform mobile application designed to bring the Lumina learning experience to iOS and Android. It focuses on high-performance content delivery, on-the-go learning tracking, and a native-feel interface optimized for mobile interactions.",
    image: `${ASSET_BASE_URL}projects/project3.png`,
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "REST API",
      "NativeWind",
      "Zustand",
    ],
    link: "#",
    github: "https://github.com/iamkvnn/cinx-native/tree/main",
  },
  {
    title: "CoCoCord - Discord Clone",
    description:
      "Built the client-side logic utilizing Vanilla JS and JSP. Managed direct DOM manipulations and optimized client state effectively without relying on external frameworks. Integrated WebSockets to instantly sync messages, notifications, and user presence (online/offline, typing status) across multiple clients.",
    image: `${ASSET_BASE_URL}projects/project4.gif`,
    tags: [
      "Vanilla JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "JSP",
      "WebSockets",
      "WebRTC",
    ],
    link: "#",
    github: "https://github.com/thanhquan123hi1/cococord-website",
  },
  {
    title: "PyGit - Git clone in Python",
    description:
      "A lightweight implementation of the Git version control system built from scratch in Python. This project delves into the internals of Git, focusing on how data is stored, tracked, and managed through low-level file manipulations. It provides a CLI for core versioning operations, mimicking the behavior of the original Git.",
    image: `${ASSET_BASE_URL}projects/project5.png`,
    tags: ["Python", "Git", "CLI"],
    link: "#",
    github: "https://github.com/GERnguyen/pygit-git-clone",
  },
  {
    title: "Kaibi - Backend Server from scratch",
    description:
      "Kaibi is a lightweight, low-level web framework built entirely from scratch using Python, without relying on any third-party web libraries. The project serves as a deep dive into the internals of the HTTP protocol, simulating the complete lifecycle of a web request. From managing raw TCP socket connections to parsing headers and delivering static assets, Kaibi demonstrates a fundamental understanding of how modern web servers operate under the hood.",
    image: `${ASSET_BASE_URL}projects/project6.png`,
    tags: ["Python", "socket", "threading", "TCP/IP", "HTTP protocol"],
    link: "#",
    github: "https://github.com/GERnguyen/pygit-git-clone",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
