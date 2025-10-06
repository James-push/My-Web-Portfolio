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
        description: "Provide expert-level technical support to employees and end-users, diagnosing and resolving issues across the platform’s customization tools and infrastructure. Responsible for maintaining and tracking support tickets through the company’s internal ticketing system to ensure timely issue resolution and service quality."
      },
      {
        title: "Network Infrastructure Management",
        description: "Manage and configure network infrastructure — including VPNs, ports, DNS, and TCP/UDP protocols — ensuring high availability, scalability, and security. Implemented a site-to-site VPN to centralize network connectivity across remote sites and deployed Pi-hole on Linux to block unwanted ads and malicious websites, serving as a DNS server for enhanced network security. Contributed to configuring load balancing and failover mechanisms using TP-Link Omada, which completely eliminated manual processes such as switching between ISPs, resulting in a fully automated and more reliable network environment. "
      },
      {
        title: "Account & User Management",
        description: "Collaborated with the team in the creation and management of user accounts through cPanel, including setting up email accounts, managing access permissions, and maintaining proper server organization. Ensured accurate configurations and adherence to security standards across all hosted accounts"
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
        title: "Technical Support",
        description: "Assist in diagnosing and resolving hardware and software issues for employees and end-users, ensuring minimal downtime and smooth daily operations. Support troubleshooting tasks involving desktops, laptops, and peripheral devices. Maintain and monitor support tickets using the company’s internal ticketing system, ensuring timely response and resolution of technical concerns.."
      },
      {
        title: "System Maintenance & User Support",
        description: "Provide assistance in configuring and maintaining system tools, software installations, and updates. Support senior IT staff in network monitoring, user account setup, and ensuring devices comply with company standards and security protocols."
      },
    ]
  },
  {
    title: "BS Information Technology",
    company: "STI College - Angeles",
    period: "Jul 2021 - May 2025",
    year: "2025",
    responsibilities: [
      {
        title: "Capstone Project / Thesis",
        description: "Led the development of a mobile application built with Flutter, focused on providing innovative solutions for transportation and community services. The project was recognized with the Best Thesis Award for its technical excellence, innovation, and real-world impact."
      },
      {
        title: "Academic Experience",
        description: "Gained comprehensive knowledge in system administration, network technology, cloud computing, and cybersecurity, covering both theoretical and practical applications. Developed strong programming skills in Java, C#, Python, HTML, CSS, and JavaScript, applying these languages in various academic and project-based activities."
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
    <section id="experience" className="py-24 md:py-32 bg-base-100 text-base-content transition-colors duration-500">
      <Timeline data={experiences} />
    </section>
  )
}