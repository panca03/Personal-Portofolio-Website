import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import checklist from './checklist.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import send_icon_white from './send-icon-white.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import react from './react.svg';
import gitbash from './gitbash.svg';
import github from './github.svg';
import gitkraken from './gitkraken.svg';
import googlecolaboratory from './googlecolaboratory.svg';
import flutter from './flutter.svg';
import laravel from './laravel.svg';
import xampp from './xampp.svg';
import bootstrap from './bootstrap.svg';
import nextjs from './nextjs.svg';
import tailwindcss from './tailwindcss.svg';
import nodejs from './nodejs.svg';
import mysql from './mysql.svg';
import tensorflow from './tensorflow.svg';
import jupyter from './jupyter.svg';
import vercel from './vercel.svg';
import motion from './motion.svg';
import external_link from './external_link_icon.png';
import external_link_dark from './external_link_icon_dark.png';

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  send_icon_white,
  right_arrow_bold,
  right_arrow_bold_dark,
  react,
  github,
  gitbash,
  gitkraken,
  googlecolaboratory,
  flutter,
  laravel,
  xampp,
  bootstrap,
  nextjs,
  tailwindcss,
  nodejs,
  mysql,
  tensorflow,
  jupyter,
  vercel,
  motion,
  external_link,
  external_link_dark,
  checklist,
};

export const workData = [
  {
    title: 'Web Portofolio',
    description:
      'A responsive and modern personal portfolio website built with Next.js, Vercel, Tailwind CSS, and Motion to showcase about me, projects, experience, and contact information. Features dynamic routing and dark mode for an enhanced user experience.',
    techStack: ['Next.js', 'Vercel', 'Tailwind CSS', 'Motion'],
    techIcons: [
      assets.nextjs,
      assets.vercel,
      assets.tailwindcss,
      assets.motion,
    ],
    gallery: ['/work-1-dark.png', '/work-1.png'],
    bgImageLight: '/work-1-dark.png',
    bgImageDark: '/work-1.png',
    githubUrl: 'https://github.com/username/project-repo',
    liveDemoUrl: 'https://live-demo-url.com',
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Programming Languages',
    description: 'Pyhton, Dart, JavaScript',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Bachelor of Engineering in Computer Engineering',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built more than 1 projects',
  },
];

export const toolsData = [
  { icon: assets.googlecolaboratory, name: 'Google Colab' },
  { icon: assets.jupyter, name: 'Jupyter' },
  { icon: assets.tensorflow, name: 'TensorFlow' },
  { icon: assets.vscode, name: 'Visual Code Studio' },
  { icon: assets.flutter, name: 'Flutter' },
  { icon: assets.firebase, name: 'Firebase' },
  { icon: assets.react, name: 'React.js' },
  { icon: assets.laravel, name: 'Laravel' },
  { icon: assets.nextjs, name: 'Next.js' },
  { icon: assets.nodejs, name: 'Node.js' },
  { icon: assets.bootstrap, name: 'Bootstrap' },
  { icon: assets.tailwindcss, name: 'Tailwind CSS' },
  { icon: assets.motion, name: 'Motion' },
  { icon: assets.vercel, name: 'Vercel' },
  { icon: assets.mysql, name: 'MySql' },
  { icon: assets.xampp, name: 'Xampp' },
  { icon: assets.figma, name: 'Figma' },
  { icon: assets.git, name: 'Git' },
  { icon: assets.github, name: 'GitHub' },
  { icon: assets.gitbash, name: 'Git Bash' },
  { icon: assets.gitkraken, name: 'GitKraken' },
];

export const experience = [
  {
    year: 'Sept 2023 - Dec 2023',
    role: 'Programming I Laboratory Assistant',
    company: 'Syiah Kuala University',
    description: `◦ Assisted lecturers in delivering fundamental programming materials using Scratch and Python to undergraduate students.
◦ Supported the evaluation process by grading assignments, quizzes, and programming lab exams.
◦ Guided and evaluated students during lab sessions to enhance their understanding of the course materials.`,
  },
  {
    year: 'Jan 2024 - Jun 2024',
    role: 'Programming II Laboratory Assistant',
    company: 'Syiah Kuala University',
    description: `◦ Assisted lecturers in teaching advanced programming concepts, including Object-Oriented Programming (OOP), modules and packages, database management with SQLite, and GUI development using Tkinter.
◦ Supported the evaluation process by grading assignments, quizzes, and practical exams on topics such as Flask, web scraping, data science with NumPy, and machine learning with Scikit-Learn.
◦ Guided and mentored students during lab sessions and final project development, helping them implement computer vision with OpenCV and integrate multiple technologies into practical applications.`,
  },
  {
    year: 'Aug 2023 - Jan 2024',
    role: 'Machine Learning  Path',
    company: 'Bangkit Academy By Google, GoTo, Traveloka',
    description: `◦ Completed intensive training in the fundamentals of machine learning, Python programming, data analysis, and applied mathematics for machine learning through platforms such as Dicoding and Coursera.
◦ Improved soft skills including communication, time management, and problem solving through workshops, English training, and collaborative sessions.
◦ Worked closely with a diverse team on a capstone project, applying machine learning techniques to address real-world challenges and presenting the results to mentors and peers.`,
    certificateUrl:
      'https://drive.google.com/file/d/1o2A92hLNbs2j_8NB4PdX7ghFjfNxSAv3/view?usp=sharing',
  },
  {
    year: 'Jul 2024 - Aug 2024',
    role: 'Front-End Development Intern',
    company: 'Pengadilan Negeri Banda Aceh',
    description: `◦ Developed the front-end interface of a web-based reporting system using Laravel, supporting internal super-vision and data submission through a responsive and user-friendly design for multiple user roles.
◦ Collaborated with the team to implement key features such as report upload/download, report history, status tracking, and automated reminders, improving efficiency and accuracy in report management.`,
  },
  {
    year: 'Jan 2025 - Jun 2025',
    role: 'Laboratory Assistant and Website Administratorr',
    company: 'Computer Vision Lab - Syiah Kuala University',
    description: `◦ Assisted students in applying computer vision concepts such as image enhancement (CLAHE), filtering, edge detection, and object/face detection using OpenCV.
◦ Guided students to write and understand Python code based on provided materials to strengthen their programming skills.
◦ Managed and updated the official Computer Vision Lab website (https://comvis.mystrikingly.com) to ensure that the information, content, and resources were accessible and up to date.`,
  },
  {
    year: '2024 - 2021',
    role: 'Website & Apps Development Learnig Path',
    company: 'E-Learning - MySkill',
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    certificateUrl:
      'https://storage.googleapis.com/myskill-v2-certificates/topic-IXppB88r5Rj19e8Pm65p/bF0sUbxOkEgfC0NUhOAJlzCLsGC2-qwg22Frlp1gHMMkSeKhy.pdf',
  },
];

const Github = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-github"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const ExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-external-link"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export { Github, ExternalLink };
