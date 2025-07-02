"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, ExternalLink, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ProjectModal } from "@/components/project-modal";
import { Timeline } from "@/components/timeline";
import { SectionWrapper } from "@/components/section-wrapper";

const projects = [
  {
    title: "E-Commerce Backend API",
    description:
      "A secure and scalable REST API built with Java & Spring Boot. Supports JWT auth, MySQL triggers, and AWS deployment.",
    fullDescription:
      "A comprehensive e-commerce backend system featuring secure JWT authentication, role-based access control, and automated MySQL triggers for inventory management. The API handles user management, product catalog, order processing, and payment integration. Deployed on AWS EC2 with Docker containerization and CI/CD pipeline for seamless updates.",
    techStack: "Java, Spring Boot, MySQL, Docker, AWS EC2",
    github: "https://github.com/Nitin3290/ecommerce-api",
  },
  {
    title: "AutoInsight AI",
    description:
      "A resume analyzer platform that uses GPT for smart scoring and feedback. Full-stack app with secure uploads and dashboards.",
    fullDescription:
      "An intelligent resume analysis platform that leverages OpenAI's GPT models to provide detailed feedback and scoring. Features include secure file upload, real-time analysis, personalized recommendations, and comprehensive dashboards. Built with modern React.js frontend and Node.js backend with MongoDB for data persistence.",
    techStack: "React.js, Node.js, MongoDB, Vercel",
    github: "https://github.com/Nitin3290/AutoInsight-AI",
  },
  {
    title: "Diabetic Retinopathy Detector",
    description:
      "A CNN model that detects diabetic retinopathy stages from retinal images with a live Gradio interface.",
    fullDescription:
      "A deep learning solution for early detection of diabetic retinopathy using convolutional neural networks. The model analyzes retinal images to classify different stages of the disease with high accuracy. Features a user-friendly Gradio interface for real-time predictions and includes comprehensive image preprocessing and augmentation techniques.",
    techStack: "Python, TensorFlow, OpenCV, Gradio",
    github: "https://github.com/Nitin3290/Retinal-Image-Analysis-DR-CNN",
  },
];

const experienceItems = [
  {
    title: "Data Analyst Intern",
    subtitle: "Hypweb Solutions LLP (Remote)",
    period: "Jan 2025 – May 2025",
    description: [
      "Built internal APIs using Python and SQL to automate data workflows",
      "Designed ETL pipelines and reduced manual work by 35%",
      "Integrated backend scripts with dashboards used by 50+ users",
      "Worked in Agile sprints, contributed to 5+ production releases",
    ],
  },
];

const educationItems = [
  {
    title: "Bachelor of Technology in Computer Science",
    subtitle: "Malla Reddy College of Engineering & Technology, Hyderabad",
    period: "2021 – 2025",
    description:
      "Graduated with foundational experience in backend development and software systems",
  },
  {
    title: "Intermediate – MPC Stream",
    subtitle: "Pinegrove Junior College, Hyderabad",
    period: "2019 – 2021",
    description:
      "Studied Mathematics, Physics, and Chemistry with emphasis on logical reasoning",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50"
        style={{ scaleX }}
      />

      <Navigation />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-indigo-400/35 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-blue-300/25 rounded-full animate-float-medium"></div>
      </div>

      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  K S Nitin
                </span>{" "}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                >
                  👋
                </motion.span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I build the logic behind the buttons | Cloud-Native Builder |
                Recent CS Graduate
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I love building backend systems with Spring Boot, and deploying
                them on AWS with CI/CD.
              </motion.p>
            </div>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="https://github.com/Nitin3290"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                </motion.div>
                <span className="font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="https://linkedin.com/in/nitin3290"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                </motion.div>
                <span className="font-medium">LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 font-mono text-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground ml-4">
                    portfolio.java
                  </span>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div>
                    <span className="text-purple-400">public class</span>{" "}
                    <span className="text-cyan-400">Developer</span> {"{"}
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">String</span> name ={" "}
                    <span className="text-green-400">"K S Nitin"</span>;
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">String[]</span> skills ={" "}
                    {"{"}
                  </div>
                  <div className="ml-8">
                    <span className="text-green-400">"Java"</span>,{" "}
                    <span className="text-green-400">"Spring Boot"</span>,
                  </div>
                  <div className="ml-8">
                    <span className="text-green-400">"AWS"</span>,{" "}
                    <span className="text-green-400">"Docker"</span>
                  </div>
                  <div className="ml-4">{"}"};</div>
                  <div className="ml-4">
                    <span className="text-purple-400">boolean</span> passionate
                    = <span className="text-cyan-400">true</span>;
                  </div>
                  <div>{"}"}</div>
                </div>
              </motion.div>

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-75"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="about" backgroundLabel="ABOUT" className="py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/50 border border-border rounded-lg p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    I'm a recent Computer Science graduate from Hyderabad with a
                    passion for backend development and building useful tools. I
                    primarily work with Java and Spring Boot, and have deployed
                    several projects using Docker and AWS.
                  </p>
                  <p className="text-lg">
                    As a Data Analyst Intern at Hypweb Solutions, I developed
                    REST APIs, automated data processes, and collaborated across
                    teams to deliver working features. I enjoy solving problems
                    and improving systems through clean and scalable code.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  title: "Graduated in June 2025",
                  description: "Computer Science Degree",
                },
                {
                  title: "Built & Deployed Real-World Projects",
                  description: "Full-stack applications with modern tech",
                },
                {
                  title: "Tech Stack",
                  description: "Java, Spring Boot, Docker, AWS",
                },
                {
                  title: "Internship Experience in Backend Development",
                  description: "REST APIs and system automation",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 border border-border rounded-lg p-6 hover:bg-card/80 transition-all duration-200"
                >
                  <h3 className="text-foreground font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        backgroundLabel="PROJECTS"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card/50 border border-border rounded-lg p-6 hover:bg-card/80 transition-all duration-300 flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                      Tech Stack
                    </span>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.techStack}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-all duration-200"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">
              More projects available on my{" "}
              <Link
                href="https://github.com/Nitin3290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                GitHub profile
              </Link>
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="experience"
        backgroundLabel="EXPERIENCE"
        className="py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
          </motion.div>

          <Timeline items={experienceItems} />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="education"
        backgroundLabel="EDUCATION"
        className="py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
          </motion.div>

          <Timeline items={educationItems} />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="certifications"
        backgroundLabel="CERTIFICATIONS"
        className="py-28"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications
            </h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(6, 182, 212, 0.15)",
              }}
              className="bg-card/50 border border-border rounded-lg p-5 hover:bg-card/80 transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                    CS50: Introduction to Computer Science
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    HarvardX (edX) | 2025
                  </p>
                </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    C
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    SQL
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Algorithms
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(6, 182, 212, 0.15)",
              }}
              className="bg-card/50 border border-border rounded-lg p-5 hover:bg-card/80 transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                    J.P. Morgan Software Engineering Virtual Experience
                  </h3>
                  <p className="text-muted-foreground text-sm">Forage | 2025</p>
                </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Dashboard
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Fintech
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(6, 182, 212, 0.15)",
              }}
              className="bg-card/50 border border-border rounded-lg p-5 hover:bg-card/80 transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                    BCG X – Data Science Job Simulation
                  </h3>
                  <p className="text-muted-foreground text-sm">Forage | 2025</p>
                </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Business Analysis
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Data Modeling
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-200">
                    Recommendations
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" backgroundLabel="CONTACT" className="py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in working together or want to say hi? Feel free to
              reach out 👇
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.a
              href="mailto:nitin38261@icloud.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg min-w-[160px] justify-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email Me</span>
            </motion.a>

            <motion.a
              href="https://github.com/Nitin3290"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-background transition-all duration-200 min-w-[160px] justify-center"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/nitin3290"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-background transition-all duration-200 min-w-[160px] justify-center"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>
      </SectionWrapper>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 K S Nitin. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </footer>

      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-full hover:bg-card transition-all duration-200 z-30 shadow-lg"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
