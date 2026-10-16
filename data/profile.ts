// All portfolio content lives here, taken from the CV (complete, not trimmed).
// Edit this file to update the site; components only render it.

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
export const ORACLE_LOGO = `${DEVICON}/oracle/oracle-original.svg`;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const cvPath = "/Zain-Ul-Abdin-CV.pdf";

export const profile = {
  name: "Zain Ul Abdin",
  titles: [
    "Senior Oracle APEX and Forms & Reports Developer (ERP)",
    "Oracle PL/SQL Developer",
    "Oracle Functional Consultant",
  ],
  current: "Head of IT & MIS, Mesk Specialized Contracting Company",
  location: "Al-Khobar, Saudi Arabia",
  availability: "Immediate",
  email: "zain_arif007@hotmail.com",
  phone: "+966-58-1523870",
  phoneHref: "tel:+966581523870",
  linkedin: "https://www.linkedin.com/in/zain-ul-abdin-b27479166/",
  linkedinHandle: "in/zain-ul-abdin-b27479166",
  summary:
    "Experienced Oracle Applications Developer with 7+ years specializing in Oracle Forms, Reports, APEX, and PL/SQL. Proven track record in designing, customizing, and optimizing Oracle applications to meet complex business needs. Expertise in Oracle Database 19c/21c and key ERP modules, including Accounts Payable, Receivable, Sales, GL, Inventory, HR, and Fixed Assets. Adept at leading teams and delivering innovative solutions to enhance system functionality and drive business success.",
  description:
    "Zain Ul Abdin: Head of IT & MIS, Senior Oracle APEX, Forms & Reports and PL/SQL Developer and Oracle Functional Consultant in Al-Khobar, Saudi Arabia. 7+ years building custom Oracle ERP applications for 30+ clients.",
  references: "References available upon request.",
};

export type ClientGroup = { industry: string; clients: string[] };

export type Group = { title: string; items: string[] };

export type Job = {
  company: string;
  monogram: string;
  color: string;
  location: string;
  role: string;
  subrole: string;
  period: string;
  current?: boolean;
  intro?: string;
  pointsLabel: string;
  points: string[];
  groups?: Group[];
  clientsLead?: string;
  clients?: ClientGroup[];
  morePoints?: string[];
  closing?: string;
};

export const experience: Job[] = [
  {
    company: "Mesk Specialized Contracting Company",
    monogram: "M",
    color: "#0F766E",
    location: "Al Khobar, Saudi Arabia",
    role: "Head of Department, Information Technology & MIS",
    subrole: "Oracle APEX, Forms & Reports, PL/SQL Developer | IT Infrastructure & Cybersecurity Lead",
    period: "January 2025 - Present",
    current: true,
    intro:
      "Lead the IT Department with full responsibility for technology strategy, enterprise systems, digital transformation, and operational excellence. Architect and develop customized Oracle APEX applications, manage Oracle databases, and oversee all IT infrastructure, hosting, cybersecurity, and compliance functions. Drive continuous improvement across systems, workflows, and user experience while ensuring reliability, security, and alignment with organizational goals.",
    pointsLabel: "Key responsibilities & achievements",
    points: [],
    groups: [
      {
        title: "Oracle APEX Development",
        items: [
          "Design, develop, and maintain fully customized APEX applications with complete backend PL/SQL logic and frontend UI/UX.",
          "Integrate APEX solutions with ERP modules and external systems.",
          "Deliver responsive, user-friendly interfaces tailored to business workflows.",
        ],
      },
      {
        title: "Oracle Forms & Reports Development",
        items: [
          "Develop and enhance Oracle Forms (6i, 10g, 11g) and Oracle Reports for operational and analytical needs.",
          "Automate business processes and improve efficiency through customized modules.",
          "Troubleshoot and resolve complex form/report issues with minimal downtime.",
        ],
      },
      {
        title: "Oracle Database Development & Administration",
        items: [
          "Build PL/SQL procedures, functions, packages, triggers, and optimize performance.",
          "Manage database design, schema optimization, and high-accuracy data migration (SQL Server to Oracle).",
          "Implement API integrations using JSON in Oracle 21c.",
          "Ensure database security, integrity, backup strategy, and high availability.",
        ],
      },
      {
        title: "ERP Development & Customization",
        items: [
          "Develop and customize ERP modules: Sales, Purchase, GL, Inventory, Production, Fixed Assets, HR.",
          "Configure financial effects, IN/OUT effects, and workflow automation.",
          "Integrate ERP modules with Oracle APEX and Oracle Forms.",
        ],
      },
      {
        title: "IT Infrastructure & Hosting Management",
        items: [
          "Lead IT infrastructure operations, network troubleshooting, and system performance optimization.",
          "Manage business email hosting: DNS, SPF, DKIM, DMARC, PTR records.",
          "Oversee cPanel hosting, domains, SSL, backups, FTP, and website deployments.",
          "Develop and secure corporate websites (frontend + backend).",
        ],
      },
      {
        title: "Cybersecurity & Aramco CCC Compliance",
        items: [
          "Prepare and implement IT compliance documentation aligned with Aramco CCC standards.",
          "Configure MFA, secure access, remote access policies, and cybersecurity controls.",
          "Prepare evidence and documentation for audits.",
        ],
      },
      {
        title: "Desktop Support & Enterprise Software Installation",
        items: [
          "Install and configure Windows OS (10/11), Microsoft Office, AutoCAD, and engineering tools.",
          "Troubleshoot OS, drivers, licensing, and performance issues.",
          "Provide technical support to employees and ensure smooth system operations.",
        ],
      },
      {
        title: "IT Governance & Leadership",
        items: [
          "Implement IT governance frameworks and cybersecurity policies.",
          "Lead vendor coordination, procurement, and contract management.",
          "Conduct root cause analysis for critical issues and ensure system stability.",
          "Drive modernization initiatives to streamline processes and elevate user experience.",
        ],
      },
    ],
  },
  {
    company: "Vision Plus",
    monogram: "V+",
    color: "#1D4ED8",
    location: "Lahore, Punjab, Pakistan",
    role: "Senior Oracle Application Developer",
    subrole: "Forms and Reports, APEX Application and PL/SQL Developer",
    period: "November 2020 - October 2024",
    pointsLabel: "Key achievements",
    points: [
      "Designed and developed a standard application, Oracle Customize ERP Application, which automated invoice processing and reduced manual effort. Used by 30+ clients.",
    ],
    clientsLead: "Designed, developed, and implemented Customize ERP Applications for:",
    clients: [
      {
        industry: "Engineering",
        clients: [
          "S.T Engineering Services Private Limited Pakistan",
          "Standard Engineering Services Private Limited Pakistan",
          "Pakistan Springs Private Limited Pakistan",
          "Zahoor Die Casting Private Limited Pakistan",
        ],
      },
      {
        industry: "Textile",
        clients: ["Bedouin Textile Industry", "Mir Yousaf Leatherware"],
      },
      {
        industry: "Pharmaceutical",
        clients: [
          "MTI Pharmaceutical Private Limited",
          "Liven Pharmaceutical Private Limited",
          "PDH Pharmaceutical Private Limited",
          "Sehat Pharmaceutical Private Limited",
          "GT Pharmaceutical Private Limited",
        ],
      },
      {
        industry: "Trading & Manufacturers",
        clients: [
          "VIVO Electric Private Limited Pakistan",
          "Nishan Cables",
          "Al-Khair Group",
          "Dura Group of Companies Private Limited Pakistan",
          "Ghrasa Laboratory Private Limited Pakistan",
        ],
      },
    ],
    morePoints: [
      "Successfully developed modules such as Sales, Purchase, General Ledger, Hostel Management, Production, Inventories, and Fixed Assets in Oracle ERP.",
      "Proficient in data migration, notably transferring large datasets from SQL Server to Oracle Database with precision.",
      "Skilled in API integration with JSON in Oracle 21c for data migration.",
      "Strong ability to research, identify, and eliminate software bugs, ensuring 100% error-free applications.",
      "Capable of resolving technical issues, creating new forms, integrating them, and developing reports for authentic information.",
      "Expertise in maintaining database procedures to enhance software efficiency and professionalism.",
      "Proficiency in SQL and PL/SQL for database design, querying, and stored procedures.",
      "Understanding of Oracle database architecture and optimization techniques.",
      "Proficiency in tools: Oracle Forms, Oracle Toad, Oracle Reports, Oracle APEX for reporting.",
      "Understanding of IN-OUT effects in Oracle ERP.",
      "Understanding of financial effects of Oracle ERP according to standards.",
      "Exceptional skills in creating, integrating, and maintaining forms, reports, and database procedures, ensuring Oracle applications are not just functional but highly efficient.",
      "Effective communication skills for collaborating with cross-functional teams and understanding client requirements.",
      "Problem-solving abilities and a proactive approach to identifying and addressing challenges.",
    ],
    closing:
      "Having a combination of technical and soft skills enables Oracle Application Developers to excel in creating robust, efficient, and secure applications that meet business requirements.",
  },
  {
    company: "PMS Private Limited",
    monogram: "PMS",
    color: "#B45309",
    location: "Gujranwala, Punjab, Pakistan",
    role: "Oracle Forms & Reports Developer Internee",
    subrole: "Oracle Forms & Reports, OAF 6i and 10g",
    period: "August 2020 - October 2020",
    pointsLabel: "Key achievements",
    points: [
      "Gained hands-on experience in Oracle Forms & Reports development using Oracle Application Framework (OAF) versions 6i and 10g.",
      "Utilized development tools such as Toad and SQL Plus to efficiently manage and query database systems.",
      "Collaborated with experienced developers to understand and apply best practices in software development.",
      "Contributed to the development and maintenance of Oracle Forms & Reports applications.",
      "Learned to troubleshoot and resolve technical issues related to Oracle Forms & Reports.",
    ],
  },
];

export const education = {
  school: "University of Sargodha",
  degree: "ADS (Computer Sciences)",
  year: "2024",
};

export const certification = {
  name: "Oracle APEX Cloud Developer Certified Professional",
  issuer: "Oracle University",
  year: "2023",
  logo: ORACLE_LOGO,
};

export type Skill = { name: string; detail: string; icon?: string; mark?: string };

export const technicalSkills: Skill[] = [
  {
    name: "Oracle Application Framework (OAF)",
    detail: "Expertise in building custom applications using Oracle's OAF technology.",
    icon: ORACLE_LOGO,
  },
  {
    name: "Oracle Application Express (APEX)",
    detail: "Proficient in developing scalable web applications with Oracle APEX.",
    icon: ORACLE_LOGO,
  },
  {
    name: "Oracle ERP Cloud",
    detail: "Experienced with implementing and managing Oracle ERP Cloud solutions.",
    icon: ORACLE_LOGO,
  },
  {
    name: "Oracle Forms",
    detail: "Skilled in designing and customizing Oracle Forms for enterprise applications.",
    icon: ORACLE_LOGO,
  },
  {
    name: "Oracle Reports",
    detail: "Proficient in generating and customizing Oracle Reports for business intelligence and reporting needs.",
    icon: ORACLE_LOGO,
  },
  {
    name: "Oracle PL/SQL Development",
    detail: "Strong experience in writing and optimizing PL/SQL code for database programming.",
    mark: "PL/SQL",
  },
  {
    name: "Oracle RDBMS",
    detail:
      "Expertise in managing and optimizing Oracle Relational Database Management Systems (RDBMS) for high-performance operations.",
    icon: ORACLE_LOGO,
  },
];

export const tools: Skill[] = [
  { name: "Oracle Database 19c / 21c", detail: "", icon: ORACLE_LOGO },
  { name: "SQL Server", detail: "", icon: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
  { name: "JSON APIs", detail: "", icon: `${DEVICON}/json/json-original.svg` },
  { name: "Toad", detail: "", mark: "T" },
  { name: "SQL Plus", detail: "", mark: "SQL" },
];

export const softSkills = [
  { name: "Communication", detail: "Clear and effective written and verbal skills." },
  { name: "Teamwork", detail: "Collaborative and able to work well in groups." },
  { name: "Problem-Solving", detail: "Strong analytical and solution-oriented mindset." },
  { name: "Adaptability", detail: "Flexible and quick to adjust to new challenges." },
  { name: "Time Management", detail: "Efficient in prioritizing and meeting deadlines." },
  { name: "Leadership", detail: "Capable of motivating and guiding teams." },
  { name: "Conflict Resolution", detail: "Skilled in resolving disagreements calmly." },
  { name: "Critical Thinking", detail: "Logical and sound decision-making abilities." },
  { name: "Customer Focus", detail: "Dedicated to delivering excellent service." },
  { name: "Creativity", detail: "Innovative and open to new ideas." },
];

export const languages = [
  { code: "UR", name: "Urdu", level: "Native / Bilingual Proficiency" },
  { code: "EN", name: "English", level: "Professional Working Proficiency" },
  { code: "AR", name: "Arabic", level: "Basic" },
];
