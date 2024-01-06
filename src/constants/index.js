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
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    tstyle,
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
      icon: tstyle,
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
      company: "Wizza Coolers LLC",
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
      company: "RiverTech Inc",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
  ];
  
  const projects = [
    {
      name: "The Leading Edge",
      description: "A cutting tool e-commerce platform, providing a diverse range of high-quality tools for the mold making industry. Features include advanced search capabilities, tool comparisons, and industry-specific recommendations.",
      tags: [
        { name: "e-commerce", color: "blue-text-gradient" },
        { name: "cutting-tools", color: "green-text-gradient" },
        { name: "mold-making", color: "pink-text-gradient" },
      ],
      image: one,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mocha",
      description: "An AI-powered PDF chatbot platform for business owners, offering a fully customizable dashboard to create and manage digital documents. Simplifies paperwork with advanced AI interactions and data insights.",
      tags: [
        { name: "ai", color: "blue-text-gradient" },
        { name: "pdf-management", color: "green-text-gradient" },
        { name: "chatbot", color: "pink-text-gradient" },
      ],
      image: two,
      source_code_link: "https://github.com/",
    },
    {
      name: "Rose Development",
      description: "Corporate website for a multi-venture software development company, showcasing a range of services and projects. Built with NextJS and Supabase for full-stack capabilities, highlighting company's versatility and innovation.",
      tags: [
        { name: "corporate-site", color: "blue-text-gradient" },
        { name: "software-development", color: "green-text-gradient" },
        { name: "full-stack", color: "pink-text-gradient" },
      ],
      image: three,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hilink",
      description: "A platform enhancing connectivity and collaboration in the corporate sector. Integrates various communication tools and services to streamline workflow and enhance productivity in business environments.",
      tags: [
        { name: "connectivity", color: "blue-text-gradient" },
        { name: "collaboration", color: "green-text-gradient" },
        { name: "corporate-tools", color: "pink-text-gradient" },
      ],
      image: four,
      source_code_link: "https://github.com/",
    },
    {
      name: "SneekPeek",
      description: "An exclusive collaboration project with Vanderbilt, Dior, and Stock X, focusing on a revolutionary LED shoe design. This project combines cutting-edge technology with high fashion, creating a unique market offering.",
      tags: [
        { name: "fashion-tech", color: "blue-text-gradient" },
        { name: "led-shoes", color: "green-text-gradient" },
        { name: "collaboration", color: "pink-text-gradient" },
      ],
      image: five,
      source_code_link: "https://github.com/",
    },
    {
      name: "Therosa",
      description: "An upscale luxury clothing company's web platform, showcasing high-end fashion collections. Offers an immersive shopping experience with high-resolution images, detailed product descriptions, and a sleek user interface.",
      tags: [
        { name: "luxury-fashion", color: "blue-text-gradient" },
        { name: "e-commerce", color: "green-text-gradient" },
        { name: "high-end", color: "pink-text-gradient" },
      ],
      image: six,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tools United",
      description: "A landmark collaboration project bringing thousands of cutting tools online. Features a comprehensive database, intuitive search functionality, and detailed tool specifications for the tool industry.",
      tags: [
        { name: "industry-collaboration", color: "blue-text-gradient" },
        { name: "tools-database", color: "green-text-gradient" },
        { name: "online-tools", color: "pink-text-gradient" },
      ],
      image: seven,
      source_code_link: "https://github.com/",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };