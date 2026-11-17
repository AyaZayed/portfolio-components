import leRub from "./assets/le-rub.jpg";
import mood from "./assets/mood.jpg";
import crowdfundr from "./assets/crowdfundr.jpg";

export const profile = {
  first: "Aya",
  last: "Zayed",
  tagline:
    "MERN Stack Developer based in Egypt and working remotely. Building web experiences with an editorial, modern and unique approach.",
  bio: "From teaching programming to building AI-powered apps, I bring ideas to life with modern technologies.",
  location: "Mansoura, Egypt",
  email: "ayazayedofficial@gmail.com",
  github: "https://github.com/AyaZayed",
  linkedin: "https://www.linkedin.com/in/ayazayed414",
};

export const projects = [
  { title: "Le Rub", description: "Sunscreen e-commerce website", image: leRub, link: "https://lerub.vercel.app/", tech: ["Next.js", "Tailwind CSS", "Prisma", "Neon Database"] },
  { title: "Mood", description: "AI-powered journaling app", image: mood, link: "https://mood-journal-nine.vercel.app/", tech: ["Next.js", "Google Generative AI", "Prisma", "TypeScript"] },
  { title: "Crowdfundr", description: "Crowdfunding platform", image: crowdfundr, link: "https://github.com/AyaZayed/crowdfundr-vanilla-js", tech: ["Vanilla JavaScript", "REST API", "Responsive design"] },
];

export const experiences = [
  { title: "MERN Stack Intern", company: "Information Technology Institute", location: "Zagazig, Egypt", period: "07/2025 – 12/2025", points: ["Built projects using Node.js, MongoDB, JavaScript, React.js, Next.js and Angular", "Worked individually and in teams using Git and Docker"] },
  { title: "Programming Instructor", company: "Nabta Academy", location: "Mansoura, Egypt", period: "07/2024 – 06/2025", points: ["Instructed children in programming languages including Scratch and Python", "Won the Best Programming Award at a Lego competition"] },
  { title: "Freelancer", company: "Self-employed", location: "Remote", period: "2023 – 2025", points: ["Developed a custom dashboard for a client acquired via LinkedIn", "Taught ICDL and programming"] },
  { title: "PR & Front-End Volunteer", company: "CIS Team", location: "Remote", period: "08/2021 – 05/2022", points: ["Completed assigned front-end development tasks efficiently"] },
];

export const skills = [
  { title: "Frontend", items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React.js", "Next.js", "Angular"] },
  { title: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase", "Prisma"] },
  { title: "Languages", items: ["JavaScript", "TypeScript", "English (fluent)", "Arabic (native)"] },
  { title: "Tools", items: ["Git", "Command line", "Docker"] },
];
