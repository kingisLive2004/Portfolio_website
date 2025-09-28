import profileImg from "../assets/profile.avif";
import facebookImg from "../assets/facebook.avif";
import twitterImg from "../assets/twitter.avif";
import linkedinImg from "../assets/linkedin.avif";
import instagramImg from "../assets/instagram.avif";
import project1Img from "../assets/project1.jpeg";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.jpeg";
import project4Img from "../assets/project4.jpg";
import project5Img from "../assets/project5.jpg";

export const assets = {
  profileImg,
  project1Img,
  project2Img,
  project3Img,
  project4Img,
  project5Img,
};

export const socialLinks = [
  { img: facebookImg, url: "https://www.facebook.com/samik.bhattacharya.2025" },
  { img: twitterImg, url: "https://x.com/SamikBh49445479" },
  {
    img: linkedinImg,
    url: "https://www.linkedin.com/in/samik-bhattacharya-aa4843290/",
  },
  {
    img: instagramImg,
    url: "https://www.instagram.com/samik.bhattacharya.2004/",
  },
];

export const experienceData = [
  {
    timeline: "Jan 2021 – Present",
    position: "Senior Project Manager",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    description: `Leading a team of 10+ developers and designers to deliver SaaS-based solutions for enterprise clients.
    Implemented Agile practices, improved delivery speed by 30%, and managed cross-functional collaboration across departments.
    Responsible for client communication, risk assessment, and end-to-end project lifecycle.`,
  },
  {
    timeline: "Jun 2018 – Dec 2020",
    position: "Project Manager",
    company: "InnoTech Systems",
    location: "Pune, India",
    description: `Managed multiple mid-sized web and mobile app development projects simultaneously.
    Introduced JIRA for project tracking and improved sprint velocity.
    Successfully delivered 12+ projects with 95% on-time delivery record while handling stakeholder expectations and change requests.`,
  },
  {
    timeline: "Mar 2016 – May 2018",
    position: "Assistant Project Manager",
    company: "NextWave Technologies",
    location: "Hyderabad, India",
    description: `Assisted senior project managers in planning and executing software development projects.
    Coordinated with QA, design, and backend teams to ensure smooth communication.
    Created project documentation, maintained Gantt charts, and tracked daily task progress.`,
  },
  {
    timeline: "Jul 2014 – Feb 2016",
    position: "Project Coordinator",
    company: "Skyline Corp.",
    location: "Mumbai, India",
    description: `Supported project teams by scheduling meetings, maintaining project calendars, and ensuring timely reporting.
    Managed client communication logs and status reports.
    Helped transition manual processes to digital tools, reducing reporting time by 40%.`,
  },
];

export const educationData = [
  {
    timeline: "2022 – 2026",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Future Institute of Engineering and Management",
    location: "Kolkata, India",
    description: `Undergoing 4-year undergraduate program with specialization in Software Development and Project Management.
    Working on a capstone project on AI-based Expense Management, and served as coordinator of the film fest committee.`,
  },
  {
    timeline: "2020 – 2022",
    degree: "Higher Secondary Education (Class 12th, Science Stream)",
    institution: "Ram Mohan Mission High School",
    location: "Kolkata, India",
    description: `Secured 93% overall with distinction in Physics, Chemistry, and Mathematics.`,
  },
  {
    timeline: "2019 – 2020",
    degree: "Secondary Education (Class 10th)",
    institution: "De Paul School",
    location: "Kolkata, India",
    description: `Secured 95% overall. Active member of the science club and won multiple quiz competitions.
    Developed early interest in computers and logical problem solving.`,
  },
];

export const skillSets = [
  "Full-Stack Development (MERN)",
  "API Development & Integration",
  "Responsive Front-End Development (React.js)",
  "Back-End Development (Node.js, Express.js)",
  "Database Design & Management (MySQL, MongoDB)",
  "Object-Oriented Programming (Java)",
  "Data Structures & Algorithms (C++, Java)",
  "Software Engineering & DBMS",
  "Git-Based Version Control",
  "Teamwork & Collaboration",
  "Problem-Solving & Debugging",
  "Quick Learning & Adaptability",
];
export const projectDatas = [
  {
    name: "Expense Tracker",
    role: "Project Lead",
    designation: "Senior Project Manager",
    description: `Built a full-stack Expense Tracker that enables users to manage and categorize expenses with secure authentication and interactive spending insights.`,
    image: project1Img,
    link: "https://github.com/kingisLive2004/Expense_Tracker",
  },
  {
    name: "Portfolio Website",
    role: "Project Lead",
    designation: "Project Manager",
    description: `Designed and developed a responsive portfolio website using ReactJS. Implemented smooth navigation, animations, and a clean UI/UX for an engaging presentation. Deployed the website online for accessibility across devices.`,
    image: project2Img,
    link: "https://portfolio-website-xi-sooty.vercel.app/",
  },
  {
    name: "Crop Yield Prediction",
    role: "Project Lead",
    designation: "Assistant Project Manager",
    description: `Developed a machine learning model to predict crop yield based on environmental and agricultural parameters such as rainfall, temperature, and soil quality. Used a Decision Tree Regressor for predictions, along with data preprocessing, feature selection, and model evaluation to improve accuracy and generalization.`,
    image: project3Img,
    link: "https://github.com/kingisLive2004/Crop_Yield",
  },
];
