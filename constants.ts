
import { Profile, Job, Education, SkillCategory, Project } from './types';

export const PROFILE: Profile = {
  name: "Lalith Ebinezer",
  title: "Digital Twin Consultant | Autodesk Partner - KSA",
  image: "https://i.ibb.co/ttZB0vp/1756943023970.png", // Replace with your actual image URL
  location: "Riyadh, Saudi Arabia",
  contact: {
    phone: "+91 8099999387",
    email: "lalithebinezer26@gmail.com",
    linkedin: "linkedin.com/in/lalith-ebinezer",
    address: "#206 Radha Govinda Residency, Tirupati 51701 (Home Base)"
  },
  summary: [
    "Driving Digital Transformation in Saudi Construction with Autodesk & GBS.",
    "Helping engineering and construction companies across Saudi Arabia unlock the full potential of Autodesk’s world-class solutions. From AutoCAD to the AEC Collection and BIM Collaborate Pro, delivering the tools and expertise needed to design, build, and manage projects efficiently.",
    "Mission: Streamline workflows, accelerate project delivery, and empower teams with cutting-edge technology and skilled resources to shape the future of construction in the Kingdom."
  ]
};

export const EXPERIENCE: Job[] = [
  {
    company: "Gulf Business Solutions",
    location: "Riyadh, Saudi Arabia",
    roles: [
      {
        title: "Business Development Manager – Autodesk",
        period: "Feb 2025 - Present",
        description: [
          "Lead pre-sales technical demonstrations and deliver compelling solution presentations for the Autodesk Construction Cloud (ACC).",
          "Manage the complete client lifecycle by delivering expert implementation, customized training, and dedicated support to AEC clients.",
          "Collaborate with sales to develop persuasive technical proposals and PoCs to secure new business.",
          "Oversee customer onboarding to ensure smooth transition and high adoption rates for Autodesk ACC & AEC solutions.",
          "Cultivate strategic partnerships with Autodesk to drive mutual growth and business objectives."
        ]
      }
    ]
  },
  {
    company: "Novatr",
    location: "Remote / Hybrid",
    roles: [
      {
        title: "Lead Mentor",
        period: "Aug 2024 - Present",
        description: [
          "Mentoring professionals in BIM and AEC technologies.",
          "Guiding students through complex industry workflows and software mastery."
        ]
      }
    ]
  },
  {
    company: "CNS Middle East",
    location: "Dubai",
    roles: [
      {
        title: "Account Manager",
        period: "Aug 2024 - Nov 2025",
        description: [
          "Sales & Business Development: Identifying opportunities, delivering demos, preparing proposals, and closing deals.",
          "Client Relationship Management: Building relationships, ensuring satisfaction, and providing ongoing support.",
          "Market Knowledge: Monitoring industry trends, competitors, and maintaining product expertise.",
          "Revenue Growth: Meeting sales targets, upselling, and driving account retention."
        ]
      }
    ]
  },
  {
    company: "MicroGenesis CADSoft Pvt. Ltd.",
    location: "Hyderabad, Telangana, India",
    roles: [
      {
        title: "BIM Consultant",
        period: "Jan 2024 - Aug 2024",
        description: [
          "Solution Implementation: Deploy and tailor BIM software to meet client needs.",
          "Project Management: Manage BIM projects end-to-end, ensuring scope, schedule, and budget alignment.",
          "Pre-Sales Engagement: Partner with sales to identify opportunities and consult with clients.",
          "Project Leadership: Lead cross-functional teams to meet project goals and foster innovation."
        ]
      },
      {
        title: "Senior Application Engineer",
        period: "Jun 2023 - Dec 2023",
        description: [
          "Autodesk Platform Services (APS) Specialist | BIM & Cloud Solutions.",
          "Spearheaded the integration of Autodesk Construction Cloud (ACC) and BIM 360 data with Microsoft Power BI.",
          "Explored custom extensions for the Autodesk Platform Services (APS) Viewer, enhancing model interrogation capabilities.",
          "Engineered robust Revit automation solutions using the APS Design Automation API."
        ]
      },
      {
        title: "Application Engineer",
        period: "Jun 2022 - May 2023",
        description: [
          "Pioneered the development of 4D construction phasing simulations by integrating project schedules with 3D models via APS.",
          "Actively collaborated with the Autodesk APS teams to prototype, test, and deploy innovative cloud-based solutions.",
          "Strategic Upselling Collaboration: Partnered with sales to identify upselling opportunities aligned with client needs."
        ]
      }
    ]
  },
  {
    company: "Ebinezer Homes",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Interior Designer",
        period: "Oct 2017 - May 2022",
        description: [
          "Aligned various Interior Site executions. Lead multiple projects independently.",
          "Developed individual project plans and completed them within budget.",
          "Collaborated and coordinated project objectives with team members involved."
        ]
      }
    ]
  },
  {
    company: "Capricot Technologies Pvt. Ltd.",
    location: "Bangalore Urban, Karnataka",
    roles: [
      {
        title: "Solutions Specialist",
        period: "Dec 2015 - Sep 2017",
        description: [
          "Strategic Upselling Collaboration: Collaborate seamlessly with the sales team.",
          "Software Expertise Support: Assist clients in software licensing, installation processes, and general queries.",
          "Technological Proficiency: Stay current with software advancements through dedicated self-learning."
        ]
      }
    ]
  },
  {
    company: "EDS Technologies",
    location: "Bangalore Urban, Karnataka",
    roles: [
      {
        title: "BIM Trainer",
        period: "2014 - 2015",
        description: [
          "Conducted training sessions for BIM technologies and workflows."
        ]
      }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "NICMAR, Institution for Construction & Management Education",
    degree: "PGP in Digital Construction: Mastering BIM",
    period: "Pursuing"
  },
  {
    institution: "Sree Vidyanikethan Education Trust (SVET), Tirupati",
    degree: "Bachelor of Technology - BTech, Civil Engineering",
    period: "June 2009 - May 2013"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Top Skills",
    skills: [
      "Industrialized Construction Strategy",
      "Software Infrastructure",
      "Application Engineering",
      "BIM Implementation",
      "Digital Transformation"
    ]
  },
  {
    title: "Technical",
    skills: [
      "AutoCAD",
      "Autodesk Construction Cloud (ACC)",
      "BIM Collaborate Pro",
      "Revit Automation",
      "Microsoft Power BI Integration",
      "Autodesk Platform Services (APS)",
      "PlanGrid",
      "Autodesk Build"
    ]
  },
  {
    title: "Languages",
    skills: [
      "English (Professional Working)",
      "Hindi (Professional Working)",
      "Telugu (Native or Bilingual)"
    ]
  },
  {
    title: "Certifications",
    skills: [
      "Autodesk Certified Professional: Revit Architecture 2014",
      "Autodesk Pre-construction: Design & Planning",
      "Autodesk Site Construction & Operations",
      "Project Administration",
      "Certified Professional AutoCAD 2014",
      "Issues in Docs",
      "Packages"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "ACC Data Connector for Power BI",
    category: "Data Visualization",
    description: "Built a robust data pipeline extracting BIM 360/ACC issues, RFIs, and submittals directly into Microsoft Power BI to overcome the limitations of static reporting. This solution enabled real-time project health monitoring and custom executive dashboards, significantly reducing manual data compilation time and improving decision-making speed for project stakeholders.",
    technologies: ["Node.js", "APS (Forge) API", "Power BI API", "Azure Functions"],
    links: {
      demo: "https://www.autodesk.com",
      code: "https://github.com"
    },
    features: [
      "Automated extraction of BIM 360 & ACC data",
      "Interactive Power BI dashboard templates",
      "Serverless architecture with Azure Functions",
      "Scheduled data refreshes for real-time reporting"
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555421689-4928a88793af?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "4D Construction Phasing Simulator",
    category: "Web Development",
    description: "Developed a web-based 4D visualization tool that integrates Primavera P6 schedules with 3D models using the APS Viewer to address complex logistics and scheduling conflicts. The tool allows project managers to visualize construction progress over time, facilitating better stakeholder communication and proactively identifying schedule deviations before they occur on site.",
    technologies: ["React", "TypeScript", "Three.js", "APS Viewer"],
    links: {
      demo: "https://developer.autodesk.com"
    },
    features: [
      "Integration with Primavera P6 XML Schedules",
      "Interactive time-slider for phase visualization",
      "Color-coded status (Planned vs. Actual)",
      "Cloud-based model rendering via APS Viewer"
    ],
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "Revit Design Automation Suite",
    category: "Cloud Automation",
    description: "Engineered a cloud-native service to handle repetitive Revit tasks—such as family standardization, model health checks, and PDF generation—without the need for local hardware. By offloading these intensive processes to the cloud, the suite drastically reduced idle time for design teams and ensured consistent model quality across all project files.",
    technologies: ["C#", ".NET", "Design Automation API", "AWS Lambda"],
    links: {
      code: "https://github.com"
    },
    features: [
      "Automated PDF & DWG exports",
      "Cloud-based Revit Model Health Checks",
      "Family library standardization",
      "Scalable processing on AWS Lambda"
    ],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "Automation Experience Center",
    category: "3D Simulation",
    description: "Created an immersive automated warehouse simulation for Amara Raja / Silver Lining using Twinmotion to visually validate complex automation workflows. Facing strict project timelines, I delivered high-fidelity 3D visualizations that effectively showcased the proposed warehouse automation capabilities, helping the client secure stakeholder buy-in and clarify operational concepts.",
    technologies: ["Twinmotion", "3D Visualization", "Warehouse Automation"],
    links: {},
    features: [
      "High-fidelity real-time rendering",
      "Simulated AGV and robotic arm paths",
      "Walkthrough VR experience",
      "Dynamic lighting and texture mapping"
    ],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565514020176-ade3f047b463?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "C-130 Service Center 4D",
    category: "Construction Simulation",
    description: "Supported the C-130 Service Center project by developing a detailed 4D timeline simulation using Revit and Twinmotion to tackle complex sequencing challenges. This visualization of construction logistics played a crucial role in validating the project schedule, identifying potential clashes in the phasing plan, and ensuring smoother site operations.",
    technologies: ["Revit", "Twinmotion", "4D Phasing"],
    links: {},
    features: [
      "Detailed site logistics planning",
      "Crane movement simulation",
      "Complex structural steel sequencing",
      "High-resolution video output for stakeholders"
    ],
    images: [
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "Digital Twin MetaHuman",
    category: "Virtual Reality",
    description: "Created a hyper-realistic MetaHuman avatar in Unreal Engine using 3D scan data to explore the frontiers of digital identity in virtual environments. This project validated advanced character creation workflows for digital twins, establishing a foundation for future applications in virtual presence, training simulations, and immersive client interactions.",
    technologies: ["Unreal Engine", "MetaHuman", "3D Scanning"],
    links: {},
    features: [
      "3D facial scanning and mapping",
      "Unreal Engine 5 integration",
      "Real-time facial motion capture",
      "Physics-based hair and clothing simulation"
    ],
    images: [
      "https://images.unsplash.com/photo-1617802690992-1ce567c9780e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614726365775-4652285df4b3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "BIM Implementation at Titan",
    category: "Consultancy",
    description: "Supported the strategic implementation of Building Information Modeling (BIM) workflows at Titan's Bangalore facility to modernize their design and construction processes. By helping establish robust standards and digital protocols, I enabled the team to transition from traditional CAD workflows to a collaborative BIM environment, resulting in improved coordination and reduced documentation errors.",
    technologies: ["BIM Strategy", "Revit", "Implementation"],
    links: {},
    features: [
      "Custom Revit Template creation",
      "BIM Execution Plan (BEP) development",
      "Employee training workshops",
      "Legacy CAD to BIM conversion strategy"
    ],
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];
