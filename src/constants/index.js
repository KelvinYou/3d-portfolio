// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  jonvi,
  techtics,
  finexus,
  beyondsoft,

  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../assets";

// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/Technical-Shubham-tech/3d-portfolio/",
  // },
];

// Services
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

// Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Experiences
const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Beyondsoft (Malaysia) Sdn. Bhd.",
    icon: beyondsoft,
    iconBg: "#FFF",
    date: "Aug 2023 - Today",
    points: [
      // ""
      // "Focused on Java-based project maintenance, utilizing JSP and Tomcat. Conducted R&D for innovative features such as reusable custom dialogs and remote log file retrieval. Conducted comprehensive testing and documentation for quality assurance.",
      // "Contributed to large-scale projects involving multiple teams, including frontend, backend, and mobile, fostering effective collaboration and coordination for successful project execution.",
      // "Skilled in utilizing log files for debugging, adept at efficient web resource searching, and knowledgeable in SIT and UAT workflows.",
      // "Proficient in deploying applications using Tomcat, SQLDeveloper, and FileZilla for streamlined server management and file transfer."
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tools: [
      "ReactJS",
      "Git",
      // ""
    ],
  },
  {
    title: "Java Software Engineer Intern",
    company_name: "Finexus International Sdn. Bhd.",
    icon: finexus,
    iconBg: "#383E56",
    date: "Feb 2023 - Jul 2023",
    points: [
      "Focused on Java-based project maintenance, utilizing JSP and Tomcat. Conducted R&D for innovative features such as reusable custom dialogs and remote log file retrieval. Conducted comprehensive testing and documentation for quality assurance.",
      "Contributed to large-scale projects involving multiple teams, including frontend, backend, and mobile, fostering effective collaboration and coordination for successful project execution.",
      "Skilled in utilizing log files for debugging, adept at efficient web resource searching, and knowledgeable in SIT and UAT workflows.",
      "Proficient in deploying applications using Tomcat, SQLDeveloper, and FileZilla for streamlined server management and file transfer."
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tools: [
      "NextJS",
      "ReactJS",
      "Java for Android",
      "Firebase",
      "Oracle SQL",
      "XML",
      "JavaServer Pages (JSP)",
      "Linux",
      "Jasper",
      "TortoiseSVN"
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Techtics Blockchain PLT",
    icon: techtics,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Jan 2021",
    points: [
      "Revitalized project's frontend using ReactJS for enhanced maintenance, modernization, and dynamic website capabilities.",
      "Developed a cutting-edge blockchain application utilizing ReactJS and Solidity to seamlessly integrate smart contracts with MetaMask for secure and streamlined transactions.",
      "Explored Laravel's router functionality, MVC architecture, ORM, events, listeners, and data seeding techniques for efficient database testing.",
      "Implemented key functionalities such as authentication, real-time exchange rate fetching, dynamic UI updates, and built APIs for seamless CRUD operations on transactions.",
      
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tools: [
      "Laravel PHP",
      "PhpMyAdmin",
      "Typescript",
      "Javascript",
      "Solidity",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "PuppeteerJS",
      "Git",
      "MetaMask"
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Jonvi Marketing Sdn. Bhd.",
    icon: jonvi,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2019",
    points: [
      "Master website design with HTML, CSS, JavaScript and some simple Bootstrap.",
      "Understand how to connect the frontend and backend through APIs.",
      "Explore HTTPS methods (GET, POST, DELETE, PUT) and practice testing with Postman. Learn how to call APIs in HTML or PHP files.",
      "Acquired Python scripting skills.",
      "Gained expertise in using Google Scripts to automate data entry tasks in Google Sheets.",
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Php",
      "Python",
      "MySQL",
      "Git",
      "NodeJS",
      "Bootstrap",
      "Postman API"
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projects
const projects = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Technical-Shubham-tech/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Technical-Shubham-tech/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link:
      "https://github.com/Technical-Shubham-tech/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Technical-Shubham-tech/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Technical-Shubham-tech/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link:
      "https://github.com/Technical-Shubham-tech/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
