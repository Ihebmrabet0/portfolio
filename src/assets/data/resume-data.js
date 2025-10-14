export const resumeData = {
  personal: {
    name: "Iheb Mrabet",
    title: "Electrical Engineer",
    subtitle: "Robotics & AI Specialist",
    tagline: "Bridging the gap between mechanical design and intelligent software",
    birthDate: "August 15, 1998",
    address: "Waldemarstr.16 18057, Rostock",
    nationality: "Tunisian",
    phone: "0151-12704266",
    email: "ihebmrabet0@gmail.com",
    linkedin: "https://www.linkedin.com/in/iheb-mrabet",
    profileImage: "/images/placeholders/profile.jpg"
  },

  about: {
    summary: "I'm a practice-oriented electrical engineer who bridges the gap between mechanical design and intelligent software. My expertise spans the entire process chain: from CAD design and the practical production of prototypes (3D printing, soldering, assembly) to high-level programming of robotic applications (robotics, AI, TwinCAT, Python, C++). This rare combination of hardware expertise and software depth enables me to develop holistic and robust automation systems from the ground up."
  },

  experience: [
    {
      id: "fraunhofer-current",
      title: "Student Assistant - Factory, Work Organization and Industrial Robots",
      company: "Fraunhofer Institute for Large Structures in Manufacturing Technology IGP",
      location: "Rostock, Deutschland",
      period: "Nov 2021 – Sept 2023 and Oct 2024 – today",
      type: "current",
      projects: [
        {
          name: "Blastman Robot Compiler",
          description: "Design and development of a compiler and specialized development environment using RoboDK for translating and offline programming of Blastman robot programs. The goal was to significantly reduce commissioning times and simplify programming for specialist personnel (for Liebherr).",
          technologies: ["RoboDK", "KRL", "Python", "C++"],
          image: "/images/placeholders/blastman-compiler.jpg"
        },
        {
          name: "Penelope - Pipe Fitting System",
          description: "Responsible for the technical design and implementation of a semi-automatic system in which a robot performs the precise joining of pipe components for subsequent welding processes.",
          technologies: ["ROS2", "KUKA", "Python", "CAD"],
          image: "/images/placeholders/penelope.jpg"
        },
        {
          name: "RoboFlex - Hand-held Control Device",
          description: "Development of a comprehensive control system and motion algorithms in ROS2 for intuitive manual control of KUKA robots. Responsible for the complete integration of relevant sensors and actuators as well as the development of the necessary interfaces to ensure responsive and precise control.",
          technologies: ["ROS2", "KUKA", "Python", "Sensors", "Motion Control"],
          image: "/images/placeholders/robo-flex.jpg"
        },
        {
          name: "Woodbot - 3D Robotic Milling Machine",
          description: "Implementation of the higher-level control system to automate the entire milling process. Development of a robust data exchange algorithm that ensures seamless, real-time communication between the KUKA robot, a downstream PLC, a central database, and an external app.",
          technologies: ["KUKA", "PLC", "Database", "Real-time Communication", "Milling"],
          image: "/images/placeholders/woodbot.jpg"
        }
      ]
    },
    {
      id: "bachelor-thesis-current",
      title: "Bachelor Thesis - AI Pose Estimation",
      company: "University of Rostock + Fraunhofer Institute",
      location: "Rostock, Deutschland",
      period: "Dec 2024 – Jun 2025",
      type: "academic",
      projects: [
        {
          name: "6D Pose Estimation AI Model",
          description: "Development of an AI model for 6D pose estimation using RGB-D measurement data for custom Objects",
          technologies: ["PyTorch", "Computer Vision", "RGB-D", "AI/ML", "Python"],
          image: "/images/placeholders/pose-estimation.jpg"
        }
      ]
    },
    {
      id: "b-t-l",
      title: "Working Student – AI & Software Development",
      company: "B-T-L.ai",
      location: "Giessen, Germany",
      period: "January 2024 – June 2024",
      type: "industry",
      projects: [
        {
          name: "AI Solutions for Marketing",
          description: "Development and implementation of AI solutions for marketing, content creation and task automation",
          technologies: ["AI/ML", "Python", "Marketing Automation"],
          image: "/images/placeholders/ai-marketing.jpg"
        },
        {
          name: "GDPR Compliance Check",
          description: "Creating an AI-based GDPR compliance check for websites",
          technologies: ["AI/ML", "Web Scraping", "Compliance", "Python"],
          image: "/images/placeholders/gdpr-check.jpg"
        }
      ]
    },
    {
      id: "bachelor-thesis-palletizing",
      title: "Bachelor Thesis - Robot Palletizing",
      company: "University of Rostock + Fraunhofer Institute",
      location: "Rostock, Deutschland",
      period: "May 2023 – Dec 2023",
      type: "academic",
      projects: [
        {
          name: "Automated Robot Palletizing Solution",
          description: "Development of an automated robot palletizing solution with machine learning for object recognition, gripping and trajectory planning",
          technologies: ["Machine Learning", "Computer Vision", "Robotics", "Python", "ROS2"],
          image: "/images/placeholders/palletizing.jpg"
        }
      ]
    },
    {
      id: "mechatronics-project",
      title: "Mechatronics Project - Reverse Engineering",
      company: "University of Rostock + Fraunhofer Institute",
      location: "Rostock, Deutschland",
      period: "Mar 2022 – Oct 2022",
      type: "academic",
      projects: [
        {
          name: "Automated CAD Model Creation",
          description: "Reverse engineering: Automated creation of CAD models from measurement data using machine learning and Python software",
          technologies: ["Machine Learning", "CAD", "Python", "3D Modeling", "Reverse Engineering"],
          image: "/images/placeholders/cad-automation.jpg"
        }
      ]
    },
    {
      id: "freelancer",
      title: "Freelancer",
      company: "Various Clients",
      location: "Remote",
      period: "Oct 2019 – Today",
      type: "freelance",
      projects: [
        {
          name: "Nutrition Assistant Chatbot",
          description: "Creation of a chatbot as a nutrition assistant for fitbynature.ai",
          technologies: ["AI/ML", "Chatbot", "Python", "NLP"],
          image: "/images/placeholders/nutrition-chatbot.jpg"
        },
        {
          name: "Website Development",
          description: "Design and development of websites for various private clients: @CertoFotografie and Favolivia",
          technologies: ["Vue.js", "HTML/CSS", "JavaScript", "Web Design"],
          image: "/images/placeholders/website-dev.jpg"
        },
        {
          name: "Social Media Management",
          description: "Social media content management and Facebook ad creation for @decoration.artistou and @parabio2020",
          technologies: ["Social Media", "Marketing", "Content Creation", "Facebook Ads"],
          image: "/images/placeholders/social-media.jpg"
        }
      ]
    }
  ],

  education: [
    {
      id: "electrical-engineering",
      degree: "Bachelor of Science (B.Sc.) in Electrical Engineering",
      institution: "University of Rostock",
      location: "Rostock, Germany",
      period: "October 2023 – June 2025",
      thesis: "Implementation and testing of methods for 6D pose estimation from RGB-D measurement data",
      status: "current"
    },
    {
      id: "mechatronics",
      degree: "Bachelor of Science (B.Sc.) in Mechatronics",
      institution: "University of Rostock",
      location: "Rostock, Germany",
      period: "October 2019 – September 2023",
      thesis: "Development of an automated robot palletizing solution using machine learning for object recognition, gripping, and trajectory planning",
      status: "completed"
    },
    {
      id: "german-course",
      degree: "Language course C1 German",
      institution: "GLS Language Center",
      location: "Berlin, Germany",
      period: "November 2018 – March 2019",
      status: "completed"
    },
    {
      id: "prep-institute",
      degree: "Engineering preparation cycle",
      institution: "The Manar Preparatory Institute for engineers",
      location: "Tunisia",
      period: "October 2017 – June 2018",
      status: "completed"
    },
    {
      id: "high-school",
      degree: "Abitur (general higher education entrance qualification)",
      institution: "Ibn Khaldoun High School",
      location: "Tunis, Tunisia",
      period: "September 2014 – June 2017",
      focus: "Mechatronics (high school diploma + practical tests in mechanical and electrical engineering)",
      achievement: "Top high school student",
      status: "completed"
    }
  ],

  skills: {
    "Robotics & Simulation": [
      "ROS2", "MuJoCo", "RoboDK", "Unity", "KUKA (KRL)", "Universal Robots"
    ],
    "Programming": [
      "Python", "C++", "C", "JavaScript", "SQL", "Pascal", "OpenCV", "REST", "MQTT", "TCP/IP", "Git", "Linux"
    ],
    "AI & Machine Learning": [
      "PyTorch", "Scikit-learn", "Jetson/JetPack", "LLMs", "Unsloth", "Isaac-GR00T"
    ],
    "CAD & Prototyping": [
      "SolidWorks", "CATIA V5", "Fusion 360", "Blender", "Autocad", "Eagle", "3D printing", "soldering", "assembly"
    ],
    "Cloud & Systems": [
      "Docker", "Google Cloud", "SAP"
    ],
    "PLC & Automation": [
      "SIMATIC S7-1200", "TIA-Portal", "TwinCAT"
    ],
    "Web Technologies": [
      "Node.js", "Vue.js", "HTML/CSS", "Headless CMS (Directus)"
    ],
    "Office": [
      "Word", "Excel", "PowerPoint"
    ]
  },

  languages: [
    { name: "Arabic", proficiency: { read: 5, speak: 5, write: 5 }, level: "Native" },
    { name: "French", proficiency: { read: 5, speak: 4.5, write: 4.5 }, level: "Advanced" },
    { name: "English", proficiency: { read: 5, speak: 5, write: 4.5 }, level: "Advanced" },
    { name: "German", proficiency: { read: 5, speak: 4.5, write: 4 }, level: "Advanced" },
    { name: "Chinese", proficiency: { read: 1.5, speak: 1, write: 1 }, level: "Beginner" }
  ],

  certifications: [
    {
      name: "Kreati case study competition",
      description: "2nd place in the preliminary round and 4th place in the semifinals",
      date: "Jun 2023"
    },
    {
      name: "Project Management: The Basics for Success",
      provider: "Coursera",
      date: "Mar 2021"
    },
    {
      name: "Brand Management: Aligning Business, Brand and Behaviour",
      provider: "Coursera",
      date: "Jan-Apr 2020"
    },
    {
      name: "Startup Weekend Competition",
      description: "Start-up development with the project 'EchriTounsi'",
      date: "Oct 2017"
    },
    {
      name: "English General Course",
      provider: "AIESEC",
      date: "Feb - Apr 2017"
    },
    {
      name: "Global Game Jam Competition",
      description: "Game Development at the Tek-Up University",
      date: "Jan 2017"
    },
    {
      name: "BIAT Bank ideas competition for entrepreneurs",
      date: "Nov 2016"
    },
    {
      name: "SolidWorks software course",
      provider: "Mechatronic Association Hammamet",
      date: "Aug 2016"
    },
    {
      name: "Scientific training with various workshops",
      description: "Main project in virtual reality: 'Smart Education' at Youth for Science",
      date: "Jul - Aug 2016"
    }
  ],

  achievements: [
    {
      title: "State Champion in Bench Press",
      description: "Powerlifting athlete (state champion in bench press MV)",
      category: "Sports"
    },
    {
      title: "Top High School Student",
      description: "Ibn Khaldoun High School, Tunis",
      category: "Academic"
    }
  ],

  interests: [
    "Project management: Development of a bionic hand for robots in collaboration with the University of Rostock",
    "Personal project 'Exam Alarm Clock': Conception and development of a web app for automated notification of exam results",
    "Social engagement: Volunteering at a vaccination center in Tunis, Tunisia May 2021",
    "Powerlifting athlete (state champion in bench press MV) + grappling + swimming",
    "Interest in politics, history and economics"
  ],

  projects: [
    {
      id: "exam-alarm-clock",
      name: "Exam Alarm Clock",
      description: "Conception and development of a web app for automated notification of exam results",
      url: "https://pruefung-wecker.web.app",
      technologies: ["Vue.js", "Web App", "Automation", "Notifications"],
      image: "/images/placeholders/exam-alarm.jpg",
      featured: true
    },
    {
      id: "bionic-hand",
      name: "Bionic Hand for Robots",
      description: "Development of a bionic hand for robots in collaboration with the University of Rostock",
      technologies: ["Robotics", "Biomechanics", "3D Printing", "Control Systems"],
      image: "/images/placeholders/bionic-hand.jpg",
      featured: true
    }
  ]
}

