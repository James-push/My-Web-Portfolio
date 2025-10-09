import React from "react";
import "./custom-fix.css";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiFlutter, SiFirebase, SiOpenai, SiMysql, SiLinux, SiGnubash, SiPython,  } from "react-icons/si";
import {PiFileCSharpFill , PiFigmaLogoBold } from "react-icons/pi";
import { RiJavaLine } from "react-icons/ri";


const skills = [
  { name: "C#", icon: PiFileCSharpFill},
  { name: "Java", icon: RiJavaLine},
  { name: "Python", icon: SiPython},
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "Firebase", icon: SiFirebase },
  { name: "MySQL", icon: SiMysql },
  { name: "Linux", icon: SiLinux },
  { name: "Bash", icon: SiGnubash},
  { name: "Figma", icon:  PiFigmaLogoBold},
  { name: "OpenAI", icon: SiOpenai },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen bg-base-100 transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-6xl font-bold mb-4 text-center">My Tech Stack</h2>
  <div className="w-28 h-1 bg-primary rounded-full mt-2 mb-8 mx-auto"></div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-18 justify-items-center">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2"
              >
                <Icon size={48} className="custom-skill-label" />
                <p className="custom-skill-label font-medium">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
  </motion.section>
  );
};

export default Skills;
