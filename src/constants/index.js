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
  meta,
  fp,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  starbucks,
  abos,
  klasshour,
  btsw,
  myfaires,
  news,
} from "../assets";

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
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

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

const experiences = [
  {
    title: "Web Developer",
    company_name: "MathClinic Int.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Developing and maintaining web applications using Html,css,Javascript,Php and Xamarin with other related technologies.",
      "Managing the web interface and c-panel configurations",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "FountainPay Payment service",
    icon: fp,
    iconBg: "#fff",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Web development instructor for Intern",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Abos Technologies",
    icon: abos,
    iconBg: "#E6DEDD",
    date: "March 2022 - Dec 2022",
    points: [
      "Creation of APIs for T-bobo app(An uber-like app)",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Writing and fetching clean GraphQL queries for created APIs",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Klasshour",
    icon: klasshour,
    iconBg: "#002",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining the company learning management system(LMS) software.",
      "Collaborating with cross-functional teams including designers, product managers,marketers, and other developers to bring about the best for the LMS software.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other CTO.",
    ],
  },
  {
    title: "Backend Volunteer",
    company_name: "Yoris Africa",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2023 - present",
    points: [
      "Developing and maintaining microservice architecture for the yoris mobile app",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Configuring the superadmin controllers logic, and communication of microservices viz RabbitMq technology",
      "Writing unit and Integration tests for controller logics",
      "Participating in code reviews and providing constructive feedback to other CTO.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Folajimi proved me wrong.",
    name: "Oyinlade Demola",
    designation: "CEO",
    company: "Abos Technology",
    image:
      "https://media.licdn.com/dms/image/C4D03AQGUet2n_vq-cQ/profile-displayphoto-shrink_800_800/0/1598174760414?e=1692835200&v=beta&t=62fDbl25cbt8TEUuYDPZ6aUx9lgatGajX-wvEFCEpVg",
  },
  {
    testimonial:
      "After Folajimi optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Olabode Eto",
    designation: "CTO",
    company: "Klasshour",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFP7vr5f3Mkxw/profile-displayphoto-shrink_800_800/0/1678918964236?e=1692835200&v=beta&t=-MQhSGDuf9tI8o8GtmDXeTuY0zUOqB4tPQ45ZZJGVOE",
  },
  {
    testimonial:
      "I've never met a web developer who truly pay attention to details like Folajimi does.",
    name: "Adedapo Tiamiyu",
    designation: "Chief Designer",
    company: "fountainpay",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHOch6etwsVvQ/profile-displayphoto-shrink_200_200/0/1672213586439?e=1692835200&v=beta&t=jDUuasljDlwtU9Ew7no6K4u-0Br9uLu2uR2GA83pqUc",
  },
];

const projects = [
  {
    name: "BTSW",
    description:
      "Business the simple way(BTSW) is websie that gives business tips for upcoming business on how they can build,grow and scale their businesses",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux  ",
        color: "green-text-gradient",
      },
      {
        name: "vimeo",
        color: "pink-text-gradient",
      },
    ],
    image: btsw,
    source_code_link: "https://www.businessthesimpleway.com/",
  },
  {
    name: "MyFaires",
    description:
      "MyFaires is the web version of MyFaires App, which monitor ladies monthly flow and gives them healthy tips and update on their personal hygiene",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "storybook",
        color: "green-text-gradient",
      },
    ],
    image: myfaires,
    source_code_link: "https://myfairies.co.uk/",
  },
  {
    name: "CR News",
    description:
      "CR news is a News and current affairs website, that track real-time user feeds, comments and news update",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://citizenrapporteurs.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
