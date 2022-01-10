/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello!",
  title2: "Benny",
  logo_name: "benny.lin()",
  nickname: "benny / benny",
  full_name: "Benny Lin",
  subTitle: "Frontend Developer, Data Visualization Enthusiast, Science Nerd.",
  resumeLink: "https://github.com/bennylinn",
  mail: "mailto:bennylin1995@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/bennylinn",
  linkedin: "https://www.linkedin.com/in/benny-lin-94704886/",
  gmail: "bennylin1995@gmail.com",
  gitlab: "https://github.com/bennylinn",
  facebook: "https://github.com/bennylinn",
  twitter: "https://github.com/bennylinn",
  instagram: "https://github.com/bennylinn",
};

const skills = {
  data: [
    {
      title: "Frontend Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive UI for web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter",
        "⚡ Creating application backend in Node, Express, and Flask",
        "⚡ Integration of third party services such as Firebase and AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Responsible for working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Continuous integration and deployment environment",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of British Columbia",
      subtitle: "Bachelor's Degree in Biology",
      logo_path: "ubc.png",
      alt_name: "SSEC",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Focused in academic research in Molecular Biology and Bioinformatics",
        "⚡ Took multiple programming courses relevant to Bioinformatics and Data Visualization",
        "⚡ Involved with a competitive science fair (iGEM), three research labs, and two hackathons.",
      ],
      website_link: "http://ubc.ca",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteering",
  description:
    "A competitive athlete to biologist to bioinformatician to software developer. One year's journey into the tech industry and it doesn't seem like it's slowing down. 🚀",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Frontend Developer",
          company: "ProInstinct",
          company_url: "http://proinstinctapp.com/",
          logo_path: "proinstinct.jpeg",
          duration: "July 2021 - Current",
          location: "Vancouver, BC",
          description: `Used a stack of ReactJS, AWS, Netlify to host a web interface to register, sign up, and access content. In charge of making technical decisions in steering the company towards
          scaling into the future. Redesigned and implemented a new landing page as well.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Frontend Developer (Contract)",
          company: "Preception",
          company_url: "https://preception.io/",
          logo_path: "preception.jpeg",
          duration: "Jan 2021 - May 2021",
          location: "Vancouver, BC",
          description: `Redesigned and implemented a new landing page for the startup.
          Assisted and data visualization of initial raw data.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteer",
      experiences: [
        {
          title: "Research Developer",
          company: "WeQual Foundation",
          company_url: "https://weqaul.com/",
          logo_path: "cwoc.png",
          duration: "May - Aug 2019",
          location: "Vancouver, BC",
          description:
            "Discovering novel algorithm to track competitive player rankings in badminton games. An adaptation of the Elo ranking system was used as inspiration for our methods.",
          color: "#4285F4",
        },
        {
          title: "Bioinformatician",
          company: "Hallam Lab @ UBC",
          company_url: "https://hallamlab.com/",
          logo_path: "ubc.png",
          duration: "Jan - Aug 2019",
          location: "Vancouver, BC",
          description:
            "Completion of a research project in phylogenetic relationhips using ML techniques to explore those relationships. Data visualization and ML usage in Python.",
          color: "#196acf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpeg",
    description: "You can contact me through email or LinkedIn!",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "R.E.D. Assignment Project",
      url: "https://github.com/bennylinn",
      description:
        "My second undergrad project. Studying phylogenetics using ML techniques. Sci-kit Learn for ML and Seaborn for visualiztion.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "WorldRank",
      url: "https://github.com/bennylinn",
      description:
        "A web project in collaboration with two PhD candidates studying a massive multiplayer elo ranking system for Codeforce players.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "OnceWing Mobile Ranking App",
      url: "https://github.com/bennylinn",
      description:
        "A fully functional flutter app designed to rank players on court. Completed beta-testing of elo system. Looking to release app to AppStore soon.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "FireBase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "3",
      name: "OnceWing Training App",
      url: "https://github.com/bennylinn",
      description:
        "Cross platform training app in development to create programs for high school athletes. Using the elegant and lightning fast Flutter framework.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "FireBase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
