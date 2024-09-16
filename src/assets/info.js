import programming from "@/assets/images/programming.png";
import frontend from "@/assets/images/frontend.png";
import backend from "@/assets/images/backend.png";
import database from "@/assets/images/database.png";
import mobile from "@/assets/images/mobile.png";
import ml from "@/assets/images/ml.png";
import development from "@/assets/images/development.png";
import os from "@/assets/images/os.png";
import methodologies from "@/assets/images/methodologies.png";
import { de } from "vuetify/locale";

let info = {
  name: "Sin Chung Ho",
  description: ["I am a year 4 Information Engineering student at The Chinese University of Hong Kong with an academic background in programming, data analytics, security, and cloud development, including building scalable systems, and seeking valuable opportunities related to my interest and professional.", 
                "I am an innovative and collaborative individual who keeps goals and tasks organized to maintain productivity. A broad spectrum of software skills, ranging from design and development to diagnosing and resolving root causes of issues, would be invaluable in a work environment. I believe that the abilities I have acquired from my academic and professional experiences define me, and I am eager to apply and refine them in any opportunity that comes my way.",],
  links: {
    linkedin: "https://www.linkedin.com/in/sinchungho/",
    github: "https://github.com/1314spb",
  },
  education: [
    {
      name: "The Chinese University of Hong Kong",
      place: "Hong Kong",
      date: "September 2021 - Present",
      degree: "Bachelor of Engineering in Information Engineering",
      skills: [
        "Data Structure", "Algorithm", 
        "C", "Python", "HTML", "CSS", "Javascript", "C#", "PHP", 
        "Node.js", "Express.js", "Nginx", "Flask",
        "Vue.js", "React.js", 
        "MySQL", "MariaDB", "MongoDB","SQL",
        "React Native",
        "Docker",
        "Linux",
        "Git", "Github",
        "LangChain", 
        "AWS", "AWS auto scaling", "Google Cloud Platform",
      ]
    }
  ],
  experiences: [
    {
      name: "Hospital Authority",
      position: "Summer Intern in IT&HID (Internship)",
      date: "Jun 2024 - Aug 2024",
      description: "I am utilizing my skills in HTML, CSS, JavaScript, and React.js to develop an automation system for data center server approval. I was responsible for building dynamic and responsive user interfaces, ensuring a seamless user experience. I collaborated closely with the IT team to integrate the new system with existing infrastructure, significantly improving workflow efficiency. Additionally, I implemented robust form validation and error handling mechanisms to enhance the system's reliability and user satisfaction.",
      skills: ["HTML", "CSS", "Javascript", "React.js", "Node.js", "Express.js", "ExcelJS", "LDAP"],
    },
    {
      name: "Fortune Information Technology Ltd",
      position: "Software Programmer (Part time)",
      date: "Nov 2023 - May 2024",
      description: "During my tenure in full-stack development, I collaborated on a project with two public hospitals. My role focused on ensuring system quality and security through system development tasks. Leveraging my expertise, I contributed to creating robust, secure, and user-friendly applications, ensuring seamless operations critical to healthcare services.",
      skills: ["Linux", "Node.js", "Vue.js", "MariaDB", "Python", "HTML", "CSS", "Javascript"],
    },
    {
      name: "The Chinese University of Hong Kong - AIoT Lab",
      position: "Junior Research Assistant (Part time) (Student Helper)",
      date: "September 2021 - Present",
      description: "I provided technical support for healthcare research, focusing on system development, data processing and analysis, and embedded AI. Additionally, I engaged in a Smart Mobile Health System project aimed at addressing the global health issue of Alzheimer's Disease, collaborating closely with PhD students to develop innovative solutions.",
      skills: ["Linux", "Python", "Shell", "Jumpserver"],
    },
    {
      name: "MeriSKILL",
      position: "Data Analyst (Internship)",
      date: "November 2023 - December 2023",
      description: "I utilized statistical techniques and Machine Learning modules such as Sklearn to uncover insights and trends from data related to HR attrition, diabetes prediction, and sales data analysis. By analyzing and visualizing this data, I provided actionable recommendations that informed decision-making processes and helped drive strategic initiatives.",
      skills: ["Python", "PowerBI", "Scikit-Learn", "Numpy", "Pandas", "Seaborn", "PyTorch", "Pipeline"],
    },
    {
      name: "Alcodes International Limited",
      position: "Project Executive (Internship)",
      date: "July 2023 - August 2023",
      description: "I operated and managed an innovative NFT platform with integrated social media features, ensuring it met the evolving needs of clients through active engagement and liaison. Additionally, I was responsible for AI data collection from the internet to support and enhance business operations.",
      skills: ["Microsoft suite", "AI data collection", "NFT platform", "Social media features", "Business operations"],
    },
    {
      name: "The Chinese University of Hong Kong",
      position: "Education Mentor (Student Helper)",
      date: "July 2022 - November 2022",
      description: "I supported practical projects where students transformed their STEM ideas into prototypes and products, providing hands-on guidance in technical coding and engineering. Through this, I shared my knowledge and expertise, helping students bring their innovative concepts to life.",
      skills: ["Linux", "Python", "App Inventor", "Mentorship"],
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      data: [
        "C", "C++", "Python", "C#", "Java", "PHP", "Javascript", "Typescript",
      ],
      icon: programming,
      hue: 0,
    },
    {
      title: "Front-End Technologies",
      data: [
        "HTML", "CSS", "Vue.js", "React.js", "Next.js", "Typescript",
      ],
      icon: frontend,
      hue: 40,
    },
    {
      title: "Back-End Technologies",
      data: [
        "Node.js", "Express.js", "Flask", "Nginx", "Next.js",
      ],
      icon: backend,
      hue: 80,
    },
    {
      title: "Databases",
      data: [
        "SQL", "MySQL", "MariaDB", "MongoDB", "Redis", 
      ],
      icon: database,
      hue: 120,
    },
    {
      title: "Mobile Development",
      data: [
        "Flutter", "React Native",
      ],
      icon: mobile,
      hue: 160,
    },
    {
      title: "Data Analysis and Machine Learning",
      data: [
        "PowerBI", "Scikit-Learn", "Numpy", "Pandas", "Seaborn", "Pytorch", "Pipeline", 
      ],
      icon: ml,
      hue: 200,
    },
    {
      title: "Development Tools",
      data: [
        "Git", "Docker", "LangChain", "Shell", "AWS", "AWS auto scaling", "Google Cloud Platform",
      ],
      icon: development,
      hue: 240,
    },
    {
      title: "Operating Systems",
      data: [
        "Kali Linux", "Ubuntu Linux", "Amazon Linux", "MacOs", "Windows",
      ],
      icon: os,
      hue: 280,
    },
    {
      title: "Development Methodologies",
      data: [
        "Agile", "Scrum", "Waterfall"
      ],
      icon: methodologies,
      hue: 320,
    },
  ],
  portfolios: [
    {
      title: "Temp1",
      skills: ["Python", "HTML", "CSS", "Javascript"],
      description: "This is a description of the project",
      link: "",
    },
    {
      title: "Temp2",
      skills: ["Python", "HTML", "CSS", "Javascript"],
      description: "This is a description of the project",
      link: "",
    },
    {
      title: "Temp3",
      skills: ["Python", "HTML", "CSS", "Javascript"],
      description: "This is a description of the project",
      link: "",
    },
  ]
}

export default info;