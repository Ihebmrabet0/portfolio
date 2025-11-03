import weckerImage from '../images/Wecker.jpg'
import woodbotImage from '../images/Woodbot.jpg'
import poseEstimationImage from '../images/6D.png'
import blastmanImage from '../images/Blastman.jpg'
// Resolve asset URLs (handles spaces/uppercase safely in Vite)
const cadZUnterREUrl = new URL('../images/CAD Z unter RE.PNG', import.meta.url).href
const diagramREUrl = new URL('../images/DiagramRE.png', import.meta.url).href
const flachpunkteREUrl = new URL('../images/Flachpunkte RE.PNG', import.meta.url).href
const detectionBAUrl = new URL('../images/Detection BA.jpg', import.meta.url).href
const diagramBAUrl = new URL('../images/Diagram BA.png', import.meta.url).href
const uiBAUrl = new URL('../images/UI BA.png', import.meta.url).href
const chatFbnUrl = new URL('../images/Chat FBN.png', import.meta.url).href
const fbnUrl = new URL('../images/FBN.png', import.meta.url).href

export const resumeData = {
  personal: {
    name: "Iheb Mrabet",
    title: {
      en: "Electrical Engineer",
      de: "Elektroingenieur"
    },
    subtitle: {
      en: "Robotics & AI Specialist",
      de: "Robotik & KI Spezialist"
    },
    tagline: {
      en: "Bridging the gap between mechanical design and intelligent software",
      de: "Die Brücke zwischen mechanischem Design und intelligenter Software"
    },
    birthDate: "August 15, 1998",
    address: "Waldemarstr.16 18057, Rostock",
    nationality: "Tunisian",
    phone: "0151-12704266",
    email: "ihebmrabet0@gmail.com",
    linkedin: "https://www.linkedin.com/in/iheb-mrabet",
    profileImage: "/src/assets/images/profile.jpg"
  },

  about: {
    summary: {
      en: "I'm a practice-oriented electrical engineer who bridges the gap between mechanical design and intelligent software. My expertise spans the entire process chain: from CAD design and the practical production of prototypes (3D printing, soldering, assembly) to high-level programming of robotic applications (robotics, AI, TwinCAT, Python, C++). This rare combination of hardware expertise and software depth enables me to develop holistic and robust automation systems from the ground up.",
      de: "Ich bin ein praxisorientierter Elektroingenieur, der die Brücke zwischen mechanischem Design und intelligenter Software schlägt. Meine Expertise umfasst die gesamte Prozesskette: vom CAD-Design und der praktischen Herstellung von Prototypen (3D-Druck, Löten, Montage) bis zur Hochsprachenprogrammierung von Roboteranwendungen (Robotik, KI, TwinCAT, Python, C++). Diese seltene Kombination aus Hardware-Expertise und Software-Tiefe ermöglicht es mir, ganzheitliche und robuste Automatisierungssysteme von Grund auf zu entwickeln."
    }
  },

  experience: [
    {
      id: "fraunhofer-current",
      title: {
        en: "Student Assistant - Factory, Work Organization and Industrial Robots",
        de: "Studentische Hilfskraft - Fabrik, Arbeitsorganisation und Industrieroboter"
      },
      company: {
        en: "Fraunhofer Institute for Large Structures in Manufacturing Technology IGP",
        de: "Fraunhofer-Institut für Großstrukturen in der Produktionstechnik IGP"
      },
      location: {
        en: "Rostock, Deutschland",
        de: "Rostock, Deutschland"
      },
      period: {
        en: "Nov 2021 – Sept 2023 and Oct 2024 – today",
        de: "Nov 2021 – Sept 2023 und Okt 2024 – heute"
      },
      type: "current",
      projects: [
        {
          name: {
            en: "Blastman Robot Compiler",
            de: "Blastman Roboter Compiler"
          },
          description: {
            en: "Design and development of a compiler and specialized development environment using RoboDK for translating and offline programming of Blastman robot programs. The goal was to significantly reduce commissioning times and simplify programming for specialist personnel (for Liebherr).",
            de: "Entwurf und Entwicklung eines Compilers und spezialisierten Entwicklungsumgebung mit RoboDK zur Übersetzung und Offline-Programmierung von Blastman-Roboterprogrammen. Das Ziel war es, Inbetriebnahmezeiten erheblich zu reduzieren und die Programmierung für Fachpersonal zu vereinfachen (für Liebherr)."
          },
          technologies: ["RoboDK", "KRL", "Python", "C++"],
          image: blastmanImage
        },
        {
          name: {
            en: "Automated CAD Model Generation from 3D Scan Data",
            de: "Automatisierte CAD-Modellerstellung aus 3D-Scandaten"
          },
          description: {
            en: "Development of an algorithm for the automated creation of 3D CAD models from point cloud data acquired via laser scanning. The system analyzes scanned sheet pile profiles, cleans the data, extracts geometric features using machine learning, and then automatically generates a parametric 3D model. The goal is to increase efficiency in the reverse engineering of maritime infrastructure.",
            de: "Entwicklung eines Algorithmus zur automatisierten Erstellung von 3D-CAD-Modellen aus Punktwolkendaten, die durch Laserscanning gewonnen wurden. Das System analysiert gescannte Spundwandprofile, bereinigt die Daten, extrahiert mittels maschinellen Lernens geometrische Merkmale und generiert daraus vollautomatisch ein parametrisches 3D-Modell. Ziel ist die Effizienzsteigerung im Reverse Engineering für maritime Infrastrukturen."
          },
          technologies: ["Python", "Scikit-learn", "NumPy", "CadQuery", "Machine Learning", "3D Data Processing"],
          images: [cadZUnterREUrl, diagramREUrl, flachpunkteREUrl]
        },
        {
          name: {
            en: "Automated Robot Palletizing Solution",
            de: "Automatisierte Roboter-Palettierungslösung"
          },
          description: {
            en: "Development of an automated solution where a KUKA industrial robot uses a camera and a machine learning model (Mask R-CNN) for object recognition. The system enables the robot to autonomously pick up objects, process them along a pre-taught trajectory recorded via hand-guiding, and then palletize them according to a defined pattern. This project integrates with an existing hand-guiding framework to enhance the capabilities of a standard industrial robot for flexible automation tasks.",
            de: "Entwicklung einer automatisierten Lösung, bei der ein KUKA-Industrieroboter eine Kamera und ein Machine-Learning-Modell (Mask R-CNN) zur Objekterkennung nutzt. Das System befähigt den Roboter, Objekte selbstständig zu greifen, sie entlang einer zuvor per Handführung eingelernten Bewegungsbahn zu bearbeiten und anschließend nach einem definierten Muster zu palettieren. Dieses Projekt integriert sich in ein bestehendes Handführungssystem, um die Funktionalität eines Standard-Industrieroboters für flexible Automatisierungsaufgaben zu erweitern."
          },
          technologies: ["KUKA", "ROS2", "Python", "TensorFlow", "Machine Learning", "Computer Vision", "Palletizing"],
          images: [uiBAUrl, diagramBAUrl, detectionBAUrl]
        },
        {
          name: {
            en: "Fit by Nature - AI Nutrition Assistant",
            de: "Fit by Nature - KI-Ernährungsassistent"
          },
          description: {
            en: "Freelance development of an AI-powered chatbot on WhatsApp, designed as a personal nutrition assistant. The project involved creating the complete user workflow, including user registration and authentication, a comprehensive onboarding process to determine individual goals and dietary preferences, and the daily delivery of personalized meal plans and advice. The chatbot is engineered to proactively engage with users and provide real-time answers to their nutrition questions.",
            de: "Freelancing-Projekt zur Entwicklung eines KI-gestützten Chatbots als personalisierter Ernährungsassistent auf WhatsApp. Das Projekt umfasste die Konzeption und Umsetzung des gesamten Workflows: von der Registrierung und Authentifizierung der Nutzer über ein detailliertes Onboarding zur Erfassung der Ziele und Vorlieben bis hin zur täglichen, automatisierten Übermittlung von individuellen Ernährungsplänen und Ratschlägen. Der Chatbot ist darauf ausgelegt, proaktiv zu unterstützen und auf Nutzerfragen in Echtzeit zu reagieren."
          },
          technologies: ["WhatsApp Business API", "Python", "AI", "Chatbot", "NLP", "LLM", "Cloud Services", "Database"],
          images: [fbnUrl, chatFbnUrl],
          url: "https://www.fitbynature.ai/"
        },
        {
          name: {
            en: "Penelope - Pipe Fitting System",
            de: "Penelope - Rohrverbindungssystem"
          },
          description: {
            en: "Responsible for the technical design and implementation of a semi-automatic system in which a robot performs the precise joining of pipe components for subsequent welding processes.",
            de: "Verantwortlich für das technische Design und die Implementierung eines halbautomatischen Systems, bei dem ein Roboter das präzise Verbinden von Rohrkomponenten für nachfolgende Schweißprozesse durchführt."
          },
          technologies: ["ROS2", "KUKA", "Python", "CAD"],
          image: "/images/placeholders/penelope.jpg",
          video: "https://youtu.be/EKX9jiWIBXA?si=u3NobVZFzZc1CzPl"
        },
        {
          name: {
            en: "RoboFlex - Hand-held Control Device",
            de: "RoboFlex - Handheld-Steuergerät"
          },
          description: {
            en: "Development of a comprehensive control system and motion algorithms in ROS2 for intuitive manual control of KUKA robots. Responsible for the complete integration of relevant sensors and actuators as well as the development of the necessary interfaces to ensure responsive and precise control.",
            de: "Entwicklung eines umfassenden Steuerungssystems und Bewegungsalgorithmen in ROS2 für intuitive manuelle Steuerung von KUKA-Robotern. Verantwortlich für die vollständige Integration relevanter Sensoren und Aktoren sowie die Entwicklung der notwendigen Schnittstellen für reaktive und präzise Steuerung."
          },
          technologies: ["ROS2", "KUKA", "Python", "Sensors", "Motion Control"],
          image: "/images/placeholders/robo-flex.jpg",
          video: "https://youtu.be/hydjIPM7aWU",
          url: "https://www.igp.fraunhofer.de/de/kompetenzfelder/-fabrik--und-arbeitsorganisation/flexrob.html",
          journalArticle: "https://www.ostsee-zeitung.de/lokales/rostock/roboter-fuer-jeden-zweck-rostocker-fraunhofer-institut-erfindet-arbeitswelt-neu-L6DMPRUM7VG7PD3TO2E4G7UOEM.html"
        },
        {
          name: {
            en: "Woodbot - 3D Robotic Milling Machine",
            de: "Woodbot - 3D Roboter-Fräsmaschine"
          },
          description: {
            en: "Implementation of the higher-level control system to automate the entire milling process. Development of a robust data exchange algorithm that ensures seamless, real-time communication between the KUKA robot, a downstream PLC, a central database, and an external app.",
            de: "Implementierung des übergeordneten Steuerungssystems zur Automatisierung des gesamten Fräsprozesses. Entwicklung eines robusten Datenaustauschalgorithmus, der nahtlose, echtzeitfähige Kommunikation zwischen dem KUKA-Roboter, einer nachgelagerten SPS, einer zentralen Datenbank und einer externen App gewährleistet."
          },
          technologies: ["KUKA", "PLC", "Database", "Real-time Communication", "Milling"],
          image: woodbotImage
        }
      ]
    },
    {
      id: "b-t-l-ai",
      title: {
        en: "Working Student - AI & Robotics",
        de: "Werkstudent - KI & Robotik"
      },
      company: {
        en: "B-T-L.ai",
        de: "B-T-L.ai"
      },
      location: {
        en: "Remote",
        de: "Remote"
      },
      period: {
        en: "Jan 2024 – Aug 2024",
        de: "Jan 2024 – Aug 2024"
      },
      type: "completed",
      projects: [
        {
          name: {
            en: "AI Pose Estimation System",
            de: "KI-Pose-Schätzungssystem"
          },
          description: {
            en: "Development of an AI-powered pose estimation system for industrial applications. Implemented computer vision algorithms and machine learning models to accurately detect and track human poses in manufacturing environments.",
            de: "Entwicklung eines KI-gestützten Pose-Schätzungssystems für industrielle Anwendungen. Implementierung von Computer-Vision-Algorithmen und Machine-Learning-Modellen zur präzisen Erkennung und Verfolgung menschlicher Posen in Fertigungsumgebungen."
          },
          technologies: ["Python", "PyTorch", "OpenCV", "Computer Vision", "Machine Learning"],
          image: poseEstimationImage
        }
      ]
    },
    {
      id: "freelance",
      title: {
        en: "Freelance Robotics Engineer",
        de: "Freiberuflicher Robotikingenieur"
      },
      company: {
        en: "Various Clients",
        de: "Verschiedene Kunden"
      },
      location: {
        en: "Remote",
        de: "Remote"
      },
      period: {
        en: "2023 – Present",
        de: "2023 – Gegenwart"
      },
      type: "current",
      projects: [
        {
          name: {
            en: "Exam Alarm Clock",
            de: "Prüfungswecker"
          },
          description: {
            en: "Development of a smart alarm clock application with AI-powered features for students. The system uses machine learning to optimize wake-up times based on sleep patterns and exam schedules.",
            de: "Entwicklung einer intelligenten Weckeranwendung mit KI-gestützten Funktionen für Studenten. Das System nutzt maschinelles Lernen zur Optimierung der Aufwachzeiten basierend auf Schlafmustern und Prüfungsterminen."
          },
          technologies: ["Python", "Machine Learning", "Mobile App", "IoT"],
          image: weckerImage,
          url: "https://pruefung-wecker.web.app"
        }
      ]
    }
  ],

  education: [
    {
      id: "bachelor-ee",
      degree: {
        en: "Bachelor of Science in Electrical Engineering",
        de: "Bachelor of Science in Elektrotechnik"
      },
      institution: {
        en: "University of Rostock",
        de: "Universität Rostock"
      },
      location: {
        en: "Rostock, Germany",
        de: "Rostock, Deutschland"
      },
      period: {
        en: "2018 – 2024",
        de: "2018 – 2024"
      },
      status: "current",
      thesis: {
        en: "Development of a Robotic Control System for Industrial Applications",
        de: "Entwicklung eines Robotersteuerungssystems für industrielle Anwendungen"
      },
      focus: {
        en: "Robotics, Automation, Control Systems",
        de: "Robotik, Automatisierung, Steuerungssysteme"
      },
      achievement: {
        en: "Dean's List for Academic Excellence",
        de: "Dekansliste für akademische Exzellenz"
      }
    },
    {
      id: "bachelor-me",
      degree: {
        en: "Bachelor of Science in Mechanical Engineering",
        de: "Bachelor of Science in Maschinenbau"
      },
      institution: {
        en: "University of Rostock",
        de: "Universität Rostock"
      },
      location: {
        en: "Rostock, Germany",
        de: "Rostock, Deutschland"
      },
      period: {
        en: "2017 – 2021",
        de: "2017 – 2021"
      },
      status: "completed",
      thesis: {
        en: "Design and Optimization of Mechanical Systems",
        de: "Design und Optimierung mechanischer Systeme"
      },
      focus: {
        en: "CAD Design, Manufacturing, Materials Science",
        de: "CAD-Design, Fertigung, Werkstoffwissenschaften"
      },
      achievement: {
        en: "Summa Cum Laude",
        de: "Summa Cum Laude"
      }
    }
  ],

  skills: {
    "Robotics & Simulation": [
      "ROS2", "MuJoCo", "RoboDK", "Unity", "KUKA (KRL)", "Universal Robots"
    ],
    "Programming": [
      "Python", "C++", "C", "JavaScript", "SQL", "Pascal", "QT", "OpenCV", "REST", "MQTT", "TCP/IP", "Git", "Linux"
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
    "MS Office": [
      "Word", "Excel", "PowerPoint"
    ]
  },

  languages: [
    { 
      name: "Arabic", 
      proficiency: { read: 5, speak: 5, write: 5 }, 
      level: {
        en: "Native",
        de: "Muttersprache"
      }
    },
    { 
      name: "French", 
      proficiency: { read: 5, speak: 4.5, write: 4.5 }, 
      level: {
        en: "Advanced",
        de: "Fortgeschritten"
      }
    },
    { 
      name: "English", 
      proficiency: { read: 5, speak: 5, write: 4.5 }, 
      level: {
        en: "Advanced",
        de: "Fortgeschritten"
      }
    },
    { 
      name: "German", 
      proficiency: { read: 5, speak: 4.5, write: 4 }, 
      level: {
        en: "Advanced",
        de: "Fortgeschritten"
      }
    },
    { 
      name: "Chinese", 
      proficiency: { read: 1.5, speak: 1, write: 1 }, 
      level: {
        en: "Beginner",
        de: "Anfänger"
      }
    }
  ],

  certifications: [
    {
      name: {
        en: "Export Control Fundamentals",
        de: "Grundlagen des Exportkontrolls"
      },
      provider: {
        en: "Fraunhofer IGP",
        de: "Fraunhofer IGP"
      },
      year: "2025"
    },
    {
      name: {
        en: "Data Protection QM General ISO 9001",
        de: "Datenschutz QM General ISO 9001"
      },
      provider: {
        en: "Fraunhofer IGP",
        de: "Fraunhofer IGP"
      },
      year: "2025"
    },
    {
      name: {
        en: "Handling hazardous substances at the IGP",
        de: "Umgang mit gefährlichen Stoffen am IGP"
      },
      provider: {
        en: "Fraunhofer IGP",
        de: "Fraunhofer IGP"
      },
      year: "2025"
    },
    {
      name: {
        en: "Basic Training on Corruption Prevention",
        de: "Grundausbildung zur Korruptionsprävention"
      },
      provider: {
        en: "Fraunhofer IGP",
        de: "Fraunhofer IGP"
      },
      year: "2025"
    },
    {
      name: {
        en: "CATIA V5 + 3D Printing Training",
        de: "CATIA V5 + 3D-Druck Schulung"
      },
      provider: {
        en: "Fraunhofer IGP",
        de: "Fraunhofer IGP"
      },
      year: "2024"
    },
    {
      name: {
        en: "Project Management: The Basics for Success",
        de: "Projektmanagement: Die Grundlagen für den Erfolg"
      },
      provider: {
        en: "Coursera",
        de: "Coursera"
      },
      year: "2021"
    },
    {
      name: {
        en: "Brand Management: Aligning Business, Brand and Behaviour",
        de: "Markenmanagement: Ausrichtung von Geschäft, Marke und Verhalten"
      },
      provider: {
        en: "Coursera",
        de: "Coursera"
      },
      year: "2020"
    },
    {
      name: {
        en: "SolidWorks software course",
        de: "SolidWorks Software Kurs"
      },
      provider: {
        en: "Mechatronic Association Hammamet",
        de: "Mechatronik Verein Hammamet"
      },
      year: "2017"
    }
  ],

  achievements: [
    {
      title: {
        en: "State Champion - Powerlifting",
        de: "Landesmeister - Powerlifting"
      },
      description: {
        en: "First place in the 2023 Mecklenburg-Vorpommern Powerlifting Championships",
        de: "Erster Platz bei den Mecklenburg-Vorpommern Powerlifting Meisterschaften 2023"
      },
      year: "2023"
    },
    {
      title: {
        en: "Best Student Project Award",
        de: "Bester Studentenprojekt Preis"
      },
      description: {
        en: "Recognition for outstanding contribution to the RoboFlex project",
        de: "Anerkennung für herausragenden Beitrag zum RoboFlex-Projekt"
      },
      year: "2022"
    }
  ]
}
