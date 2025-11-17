import React from "react";
import vedanth from "./assets/vedanth.jpg";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans bg-gray-900 text-gray-200">
      {/* Navbar */}
      <nav className="bg-gray-800 text-gray-200 fixed w-full top-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1
            className="text-xl font-bold text-teal-400 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Vedanth Reddy Doddannagari
          </h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
            <a href="#experience" className="hover:text-teal-400">
              Experience
            </a>
            <a href="#skills" className="hover:text-teal-400">
              Skills
            </a>
            <a href="#education" className="hover:text-teal-400">
              Education
            </a>
            <a href="#contact" className="hover:text-teal-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center px-6 pt-20"
      >
        <motion.img
          src={vedanth}
          alt="Vedanth Reddy"
          className="w-60 h-60 rounded-full border-4 border-teal-400 mb-6 object-cover shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I’m <span className="text-teal-400">Vedanth Reddy</span> 👋
        </motion.h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          Results-driven Data Analyst with 4 years of experience delivering
          actionable business insights and building scalable data solutions.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#experience"
            className="px-6 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-500 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className=" max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed text-center">
          Results-driven Data Analyst with expertise in SQL, Python, R, Tableau,
          Power BI, AWS, Azure, and Snowflake. Skilled in designing ETL
          pipelines, statistical modeling, and building interactive dashboards
          that drive strategic decision-making.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-teal-400">
              Data Analyst | HCL Tech (Internship) | USA
            </h3>
            <p className="text-sm text-gray-400">Feb 2025 – Current</p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>
                Built ETL pipelines with Python & Snowflake, reducing 30+ hours
                of manual work.
              </li>
              <li>
                Optimized SQL queries, reducing runtime by 40% and improving BI
                reporting speed.
              </li>
              <li>
                Developed Tableau & Power BI dashboards tracking KPIs and
                business trends.
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-teal-400">
              Data Analyst | TCS | India
            </h3>
            <p className="text-sm text-gray-400">Mar 2020 – Jul 2023</p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>
                Built financial/operational models in Excel and automated BI
                dashboards.
              </li>
              <li>
                Created ETL workflows with Talend & Informatica to consolidate
                enterprise data.
              </li>
              <li>
                Conducted time-series forecasting to optimize inventory,
                reducing stockouts by 18%.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-teal-400">Languages</h4>
            <p className="text-gray-300 mt-2">Python, R, SQL</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-teal-400">Visualization</h4>
            <p className="text-gray-300 mt-2">Tableau, Power BI</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-teal-400">Databases</h4>
            <p className="text-gray-300 mt-2">MySQL, SQL Server, MongoDB</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-teal-400">Cloud</h4>
            <p className="text-gray-300 mt-2">AWS, Azure, Snowflake</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-teal-400">
            Master of Science in Data Science
          </h3>
          <p className="text-gray-300">University of West Haven, USA</p>
          <p className="text-sm text-gray-400">Aug 2023 – May 2025</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-4">
          <a
            href="mailto:vedanthreddy.doddannagari@gmail.com"
            className="text-teal-400 hover:underline"
          >
            vedanthreddy.doddannagari@gmail.com
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/vedanthreddy25/"
          target="_blank"
          className="text-teal-400 hover:underline"
        >
          LinkedIn
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 text-gray-400">
        © {new Date().getFullYear()} Vedanth Reddy Doddannagari. All Rights
        Reserved.
      </footer>
    </div>
  );
}
