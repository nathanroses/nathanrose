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
    rosedevelopment,
    mocha,
    theleadingedge,
    tesla,
    toolsunited,
    shopify,
    united,
    leading,
    rose,
    threejs,
    therosa,
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
      title: "Web Developer",
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
      title: "Ui Designer",
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
      title: "Full Stack Developer",
      company_name: "Tools United",
      icon: toolsunited,
      iconBg: "#E6DEDD",
      date: "March 2018 - April 2020",
      points: [
        "Managed and strengthened Germany-US relations, facilitating effective communication and collaboration between teams across these regions.",
        "Played a key role in the development of a comprehensive US tooling database, contributing to significant improvements in data organization and accessibility.",
        "Collaborated closely with international teams, ensuring seamless integration of tools and practices between the German and US branches.",
        "Coordinated cross-cultural training and development initiatives, enhancing mutual understanding and efficiency in joint projects between the German and US teams.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "T-Style",
      icon: mocha,
      iconBg: "#383E56",
      date: "May 2020 - December 2020",
      points: [  "Collaborating with teams in the development of virtual reality applications, focusing on apps for MetaMask.", 
     "Playing a key role in the integration of VR technologies with existing web platforms.",  
      "Leading initiatives to integrate cutting-edge technology in web applications.",  
      "Providing expert insights into emerging technologies, specifically in the VR space."],
    },
    {
      title: "CTO",
      company_name: "The Leading Edge",
      icon: theleadingedge,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - May 2023",
      points: [  "Spearheading the development of a full-stack e-commerce website, showcasing over 100 products.",  
      "Driving significant growth in the company's online presence through innovative web solutions.", 
       "Leading the charge in keeping the company at the forefront of technology, ensuring adaptability and relevance in a rapidly evolving tech landscape.", 
       "Focusing on digital transformation strategies to enhance customer experience and operational efficiency."],
    },
    {
      title: "CEO",
      company_name: "Rose Developement",
      icon: rosedevelopment,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [  "Establishing and leading a company focused on modernizing websites and applications to meet current industry standards.",  "Designing and developing bespoke websites, tailoring solutions to client needs.",  "Consulting with various companies on innovation in technology, guiding them in leveraging new tech trends.",  "Committing to continuous learning and adoption of new technologies to provide clients with cutting-edge web solutions."],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Nathan's work on our website was quick and efficient. Truly impressed with the outcome!",
      name: "Emma Clarke",
      designation: "CFO",
      company: "Brighton Goods",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
      testimonial: "Nathan’s design sense is remarkable. Our site has never looked better.",
      name: "Aaron Lee",
      designation: "COO",
      company: "Oakdale Industries",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      testimonial: "Impressed with Nathan's commitment to meeting our needs. Great job on the website revamp!",
      name: "Rachel Tan",
      designation: "CTO",
      company: "RiverTech",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tools United",
      description:
        "Web-based platform that is tailord to the mold making industry. It allows users to search for tools and materials that are used in the industry.",
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
      ],
      image: united,
      source_code_link: "https://github.com/",
    },
    {
      name: "Quill",
      description:
        "A full SaaS Program that Enables Buisness Owners to Create Dashboards Specialized for each Company",
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
      ],
      image: leading,
      source_code_link: "https://github.com/",
    },
    {
      name: "Rose Development",
      description:
        "This is the website I created for my software development company. It is a full stack website that is built with NextJS and Supabase.",
       tags: [ 
        { name: "nextjs",
          color: "blue-text-gradient",
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
      image: rose,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };