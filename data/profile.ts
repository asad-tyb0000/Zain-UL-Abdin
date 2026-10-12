// All portfolio content lives here, taken from the CV.
// Edit this file to update the site; components only render it.

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const cvPath = "/Zain-Ul-Abdin-CV.pdf";

export const profile = {
  name: "Zain Ul Abdin",
  firstName: "Zain",
  title: "Senior Oracle Forms & Reports (OAF) and APEX Developer",
  subtitle: "Oracle PL/SQL Developer · ERP Specialist",
  location: "Al-Khobar, Saudi Arabia",
  availability: "Available immediately",
  email: "zain_arif007@hotmail.com",
  phone: "+966 58 152 3870",
  phoneHref: "tel:+966581523870",
  linkedin: "https://www.linkedin.com/in/zain-ul-abdin-b27479166/",
  linkedinHandle: "in/zain-ul-abdin",
  summary:
    "Experienced Oracle Applications Developer with 5+ years specialising in Oracle Forms, Reports, APEX and PL/SQL. A proven track record of designing, customising and optimising Oracle applications to meet complex business needs, with expertise in Oracle Application Framework (OAF), Oracle Database 19c/21c and core ERP modules. Adept at leading teams and delivering solutions that improve how systems work and help the business succeed.",
  description:
    "Zain Ul Abdin: Head of IT and Senior Oracle Forms, Reports, APEX & PL/SQL Developer in Al-Khobar, Saudi Arabia. 5+ years building custom Oracle ERP applications for 30+ clients.",
};

export const stats = [
  { value: "5+", label: "Years with Oracle" },
  { value: "30+", label: "Clients on his ERP" },
  { value: "16", label: "Custom ERP rollouts" },
  { value: "19c/21c", label: "Oracle Database" },
];

export type Company = {
  name: string;
  monogram: string;
  color: string;
  location: string;
  role: string;
  subrole: string;
  period: string;
  current?: boolean;
  intro?: string;
  points: string[];
  tags: string[];
};

export const experience: Company[] = [
  {
    name: "Mesk Specialized Contracting Company",
    monogram: "M",
    color: "#0F766E",
    location: "Al-Khobar, Eastern Province, Saudi Arabia",
    role: "Head of Department, Information Technology",
    subrole: "Forms & Reports, APEX Application and PL/SQL Developer",
    period: "Jan 2025 – Present",
    current: true,
    intro:
      "Leads the IT department with full responsibility for technology strategy, system development and day-to-day operations. Primary architect and developer of the company's custom Oracle APEX applications, covering both the backend logic and the user interface.",
    points: [
      "Designs, builds and maintains fully custom Oracle APEX applications, covering both backend PL/SQL logic and frontend UI/UX.",
      "Builds and optimises Oracle Forms, Reports and PL/SQL modules that automate workflows and improve efficiency.",
      "Manages database performance, security and integrity across mission-critical systems.",
      "Works with management and functional teams to turn business requirements into scalable technical solutions.",
      "Implements IT governance, cybersecurity standards and compliance policies.",
      "Leads troubleshooting and root-cause analysis to keep downtime minimal.",
      "Oversees IT infrastructure, support services, vendor coordination and technology procurement.",
      "Drives continuous improvement to modernise systems, streamline processes and improve the user experience.",
    ],
    tags: ["Oracle APEX", "PL/SQL", "Forms & Reports", "IT Governance", "Leadership"],
  },
  {
    name: "Vision Plus",
    monogram: "V+",
    color: "#1D4ED8",
    location: "Lahore, Punjab, Pakistan",
    role: "Senior Oracle Application Developer",
    subrole: "Forms & Reports, APEX Application and PL/SQL Developer",
    period: "Nov 2020 – Oct 2024",
    points: [
      "Designed and built the standard Oracle Customize ERP Application, which automated invoice processing and cut manual effort. More than 30 clients use it.",
      "Built Sales, Purchase, General Ledger, Hostel Management, Production, Inventory and Fixed Assets modules in Oracle ERP.",
      "Migrated large datasets from SQL Server to Oracle Database accurately.",
      "Integrated APIs with JSON in Oracle 21c for data migration.",
      "Found and fixed software bugs so that applications shipped error-free.",
      "Created and integrated new forms and built reports that give accurate business information.",
      "Maintained database procedures to make the software faster and more reliable.",
      "Understands IN-OUT effects and the financial impact of Oracle ERP transactions according to accounting standards.",
    ],
    tags: ["Oracle ERP", "Oracle Forms", "Oracle Reports", "APEX", "SQL Server → Oracle", "JSON APIs", "Toad"],
  },
  {
    name: "PMS Private Limited",
    monogram: "PMS",
    color: "#B45309",
    location: "Gujranwala, Punjab, Pakistan",
    role: "Oracle Forms & Reports Developer (Intern)",
    subrole: "Oracle Forms 6i & 10g",
    period: "Aug 2020 – Oct 2020",
    points: [
      "Gained hands-on experience developing Oracle Forms & Reports in versions 6i and 10g.",
      "Used Toad and SQL*Plus to manage and query database systems.",
      "Worked with senior developers to learn and apply software development best practices.",
      "Helped develop and maintain Oracle Forms & Reports applications and resolve technical issues.",
    ],
    tags: ["Forms 6i/10g", "Reports", "Toad", "SQL*Plus"],
  },
];

export const clientGroups = [
  {
    industry: "Engineering",
    icon: "gear",
    clients: [
      "S.T Engineering Services (Pvt) Ltd",
      "Standard Engineering Services (Pvt) Ltd",
      "Pakistan Springs (Pvt) Ltd",
      "Zahoor Die Casting (Pvt) Ltd",
    ],
  },
  {
    industry: "Textile",
    icon: "textile",
    clients: ["Bedouin Textile Industry", "Mir Yousaf Leatherware"],
  },
  {
    industry: "Pharmaceutical",
    icon: "pill",
    clients: [
      "MTI Pharmaceutical (Pvt) Ltd",
      "Liven Pharmaceutical (Pvt) Ltd",
      "PDH Pharmaceutical (Pvt) Ltd",
      "Sehat Pharmaceutical (Pvt) Ltd",
      "GT Pharmaceutical (Pvt) Ltd",
    ],
  },
  {
    industry: "Trading & Manufacturing",
    icon: "factory",
    clients: [
      "VIVO Electric (Pvt) Ltd",
      "Nishan Cables",
      "Al-Khair Group",
      "Dura Group of Companies (Pvt) Ltd",
      "Ghrasa Laboratory (Pvt) Ltd",
    ],
  },
] as const;

export type Skill = { name: string; detail: string; icon?: string; mark?: string };

export const technicalSkills: Skill[] = [
  { name: "Oracle APEX", detail: "Scalable web applications", icon: `${DEVICON}/oracle/oracle-original.svg` },
  { name: "Oracle Forms", detail: "Enterprise forms (6i, 10g)", icon: `${DEVICON}/oracle/oracle-original.svg` },
  { name: "Oracle Reports", detail: "Business reporting & BI", icon: `${DEVICON}/oracle/oracle-original.svg` },
  { name: "Oracle OAF", detail: "Custom Application Framework apps", icon: `${DEVICON}/oracle/oracle-original.svg` },
  { name: "PL/SQL", detail: "Writing & tuning database code", mark: "PL" },
  { name: "Oracle RDBMS 19c/21c", detail: "Performance & optimisation", icon: `${DEVICON}/oracle/oracle-original.svg` },
  { name: "Oracle ERP Cloud", detail: "Implementation & management", icon: `${DEVICON}/oracle/oracle-original.svg` },
  { name: "SQL Server", detail: "Migration to Oracle", icon: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
  { name: "JSON & REST APIs", detail: "API integration in 21c", icon: `${DEVICON}/json/json-original.svg` },
  { name: "Toad & SQL*Plus", detail: "Database tooling", mark: "T" },
];

export const erpModules = [
  "Accounts Payable",
  "Accounts Receivable",
  "General Ledger",
  "Sales",
  "Purchase",
  "Inventory",
  "Production",
  "Fixed Assets",
  "HR",
  "Hostel Management",
];

export const softSkills = [
  "Leadership",
  "Communication",
  "Problem-Solving",
  "Teamwork",
  "Critical Thinking",
  "Adaptability",
  "Time Management",
  "Conflict Resolution",
  "Customer Focus",
  "Creativity",
];

export const education = {
  school: "University of Sargodha",
  degree: "ADS, Computer Sciences",
  year: "2024",
};

export const certification = {
  name: "Oracle APEX Cloud Developer Certified Professional",
  issuer: "Oracle University",
  year: "2023",
};

export const languages = [
  { code: "EN", name: "English", level: "Professional working proficiency" },
  { code: "UR", name: "Urdu", level: "Native / bilingual proficiency" },
];
