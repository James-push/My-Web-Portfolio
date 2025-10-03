import React from "react"
import Timeline from "./subcomponents/Timeline"

const experiences = [
  {
    title: "IT Support",
    company: "Strata Staff Global",
    period: "May 2025 - Present",
    year: "2025",
    responsibilities: [
      {
        title: "Technical Support & Incident Management",
        description: "Provide expert-level technical support to employees and end-users, diagnosing and resolving issues across the platform’s customization tools and infrastructure."
      },
      {
        title: "Network Infrastructure Management",
        description: "Manage and configure network infrastructure — including VPNs, ports, DNS, and TCP/UDP protocols — while ensuring high availability, scalability, and security. "
      },
      {
        title: "Load Balancing & Failover Solutions",
        description: "Configured and implemented load balancing and failover mechanisms to optimize system performance, enhance uptime, and ensure high reliability across network services."
      }
    ]
  },
  {
    title: "IT Support Intern",
    company: "Strata Staff Global",
    period: "Feb 2025 - May 2025",
    year: "2025",
    responsibilities: [
      {
        title: "Curriculum Development",
        description: "Designed and implemented comprehensive course materials for subjects such as Computer Programming, Computer Graphics, Game Development, and Human-Computer Interaction."
      },
      {
        title: "Project Supervision",
        description: "Guided students in creating innovative web portfolios, programming projects, and capstone projects."
      },
      {
        title: "Technical Workshops",
        description: "Organized and conducted workshops on emerging technologies, providing hands-on experience with tools like Unity and Android Studio."
      },
      {
        title: "Mentorship",
        description: "Acted as a mentor for students, providing guidance on academic and career development."
      }
    ]
  },
  {
    title: "BS Information Technology",
    company: "STI College - Angeles",
    period: "Jul 2021 - May 2025",
    year: "2025",
    responsibilities: [
      {
        title: "Customer Service Excellence",
        description: "Delivered exceptional customer service, ensuring a positive dining experience."
      },
      {
        title: "Operational Efficiency",
        description: "Assisted in various operational tasks, including food preparation and order management."
      }
    ]
  },
  {
    title: "Hello, World!",
    company: "Mauaque National High School",
    period: "2018",
    year: "2018",
    responsibilities: [
      {
        title: "Media Arts",
        description: "Wrote my first 'Hello, World!' in HTML, sparking my passion for programming and technology."
      },
    ]
  }
]

export default function ExperienceTimeline() {
  return (
    <section id="Experience" className="py-24 md:py-32">
      <Timeline data={experiences} />
    </section>
  )
}