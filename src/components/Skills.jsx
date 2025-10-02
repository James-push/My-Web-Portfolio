import React from "react";
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
  { name: "OpenAI", icon: SiOpenai },
  { name: "MySQL", icon: SiMysql },
  { name: "Linux", icon: SiLinux },
  { name: "Bash", icon: SiGnubash},
  { name: "Figma", icon:  PiFigmaLogoBold},
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-base-100 border-t border-base-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6 text-center">My Tech Stack</h2>
        <div className="w-20 h-1 bg-blue-500 rounded-full mt-2 mb-12 mx-auto"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2"
              >
                <Icon size={48} className="text-red-400 dark:text-gray-600" />
                <p className="text-base-content font-medium">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
