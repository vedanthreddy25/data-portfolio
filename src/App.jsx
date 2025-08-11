import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiTableau, SiPowerbi, SiAmazonaws } from "react-icons/si";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900 relative overflow-hidden">
      {/* Animated Data Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="dataPattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="#14b8a6">
                <animate attributeName="cy" values="10;90;10" dur="6s" repeatCount="indefinite" />
              </circle>
              <rect x="50" y="50" width="4" height="4" fill="#14b8a6">
                <animate attributeName="x" values="50;80;20;50" dur="8s" repeatCount="indefinite" />
              </rect>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dataPattern)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-teal-600">Vedanth Reddy</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-teal-600">About</a>
              <a href="#experience" className="hover:text-teal-600">Experience</a>
              <a href="#projects" className="hover:text-teal-600">Projects</a>
              <a href="#contact" className="hover:text-teal-600">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4" id="hero">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold">
            Vedanth Reddy Doddannagari
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600">
            Data Science Graduate | SQL | Python | Tableau | Power BI | AWS
          </p>
          <div className="mt-6 space-x-4">
            <a href="#" className="px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">View Resume</a>
            <a href="#contact" className="px-5 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50">Contact Me</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
            Data Science graduate student with a strong foundation in analytics, proficient in deriving actionable insights from complex datasets. Skilled in SQL, Python, Tableau, and Power BI, with hands-on experience in AWS cloud-based data integration.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <Skill icon={<FaPython />} label="Python" />
            <Skill icon={<FaDatabase />} label="SQL" />
            <Skill icon={<FaChartBar />} label="ML" />
            <Skill icon={<SiTableau />} label="Tableau" />
            <Skill icon={<SiPowerbi />} label="Power BI" />
            <Skill icon={<SiAmazonaws />} label="AWS" />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-50 py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <ExperienceCard company="Downtown Evening Soup Kitchen (DESK)" role="Data Analyst Intern" duration="May 2025 – Present" description="Cleaned and analyzed data on 12,000+ pantry visits using Excel, Alteryx, and Tableau. Designed dashboards and automated reports to track KPIs, increasing pantry reach by 10%." />
            <ExperienceCard company="NeoDocto" role="Data Analyst Intern" duration="Jan 2023 – Mar 2023" description="Delivered weekly analytical reports, conducted A/B tests improving campaign performance by 15%, and built engagement KPI dashboards." />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <ProjectCard title="AI Lecturer (Capstone)" description="GPT-4–driven pipeline to auto-generate narrated lecture videos, reducing production time by 90%. Developed adaptive quizzes and chatbot with 95% relevance." tech="Python, React, FastAPI" />
            <ProjectCard title="Uber & Lyft Data Analysis" description="Analyzed 7M+ ride records using AWS S3, Athena, and Alteryx. Built Tableau dashboards to reveal traffic trends and ride patterns." tech="AWS, Tableau, Alteryx" />
            <ProjectCard title="IPL Data Analysis" description="Analyzed IPL cricket data to identify trends and player performance. Created interactive Tableau dashboards for stakeholder insights." tech="Tableau, Data Visualization" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="mailto:vedanthreddy.doddannagari@gmail.com" className="hover:text-teal-600"><FaEnvelope /></a>
            <a href="https://github.com" className="hover:text-teal-600"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vedanthreddy7/" className="hover:text-teal-600"><FaLinkedin /></a>
          </div>
        </section>

        <footer className="py-6 text-center text-gray-500 text-sm border-t">
          © {new Date().getFullYear()} Vedanth Reddy | Built with ❤️ and Data
        </footer>
      </div>
    </div>
  );
}

function Skill({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-teal-600 mb-2">{icon}</div>
      <p>{label}</p>
    </div>
  );
}

function ExperienceCard({ company, role, duration, description }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="text-teal-600">{company}</p>
      <p className="text-gray-500 text-sm">{duration}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tech }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 text-sm text-teal-600">Tech: {tech}</p>
    </div>
  );
}
