// =========================================
// UNIVERSITY DATA
// PastPaperHub
// =========================================

export interface University {
  id: string;
  name: string;
  abbreviation: string;
  type: "University" | "University of Technology";
  description: string;
}

export interface QualificationType {
  id: string;
  name: string;
  level: string;
  description: string;
}

export interface StudyArea {
  id: string;
  name: string;
  description: string;
}

export interface UniversityModule {
  id: string;
  code: string;
  name: string;
  level: string;
  year: string;
  description: string;
}

// =========================================
// SOUTH AFRICAN PUBLIC UNIVERSITIES
// =========================================

export const universities: University[] = [
  {
    id: "cput",
    name: "Cape Peninsula University of Technology",
    abbreviation: "CPUT",
    type: "University of Technology",
    description:
      "A university of technology offering career-focused qualifications across applied and professional fields.",
  },

  {
    id: "cut",
    name: "Central University of Technology, Free State",
    abbreviation: "CUT",
    type: "University of Technology",
    description:
      "A university of technology focused on science, engineering, technology and professional studies.",
  },

  {
    id: "dut",
    name: "Durban University of Technology",
    abbreviation: "DUT",
    type: "University of Technology",
    description:
      "A university of technology offering career-oriented programmes across technology, management, health and creative fields.",
  },

  {
    id: "mut",
    name: "Mangosuthu University of Technology",
    abbreviation: "MUT",
    type: "University of Technology",
    description:
      "A university of technology offering professional and technology-oriented qualifications.",
  },

  {
    id: "mandela",
    name: "Nelson Mandela University",
    abbreviation: "NMU",
    type: "University",
    description:
      "A comprehensive university offering undergraduate and postgraduate qualifications.",
  },

  {
    id: "nwu",
    name: "North-West University",
    abbreviation: "NWU",
    type: "University",
    description:
      "A comprehensive university with academic programmes across multiple faculties and campuses.",
  },

  {
    id: "rhodes",
    name: "Rhodes University",
    abbreviation: "RU",
    type: "University",
    description:
      "A research-intensive university known for humanities, science, commerce and education.",
  },

  {
    id: "smu",
    name: "Sefako Makgatho Health Sciences University",
    abbreviation: "SMU",
    type: "University",
    description:
      "A specialist university focused primarily on health sciences and related disciplines.",
  },

  {
    id: "spu",
    name: "Sol Plaatje University",
    abbreviation: "SPU",
    type: "University",
    description:
      "A public university offering undergraduate and postgraduate programmes.",
  },

  {
    id: "sun",
    name: "Stellenbosch University",
    abbreviation: "SU",
    type: "University",
    description:
      "A research-focused university offering a broad range of undergraduate and postgraduate studies.",
  },

  {
    id: "tut",
    name: "Tshwane University of Technology",
    abbreviation: "TUT",
    type: "University of Technology",
    description:
      "A large university of technology offering career-focused qualifications across many fields.",
  },

  {
    id: "uct",
    name: "University of Cape Town",
    abbreviation: "UCT",
    type: "University",
    description:
      "A research-intensive university offering a broad range of undergraduate and postgraduate studies.",
  },

  {
    id: "ufh",
    name: "University of Fort Hare",
    abbreviation: "UFH",
    type: "University",
    description:
      "A comprehensive public university offering qualifications across several academic disciplines.",
  },

  {
    id: "uj",
    name: "University of Johannesburg",
    abbreviation: "UJ",
    type: "University",
    description:
      "A comprehensive university offering undergraduate and postgraduate qualifications.",
  },

  {
    id: "ukzn",
    name: "University of KwaZulu-Natal",
    abbreviation: "UKZN",
    type: "University",
    description:
      "A comprehensive research-led university with programmes across many academic disciplines.",
  },

  {
    id: "ul",
    name: "University of Limpopo",
    abbreviation: "UL",
    type: "University",
    description:
      "A public university offering academic and professional programmes across multiple disciplines.",
  },

  {
    id: "ump",
    name: "University of Mpumalanga",
    abbreviation: "UMP",
    type: "University",
    description:
      "A public university offering undergraduate and postgraduate programmes.",
  },

  {
    id: "up",
    name: "University of Pretoria",
    abbreviation: "UP",
    type: "University",
    description:
      "A comprehensive research university offering a broad range of qualifications.",
  },

  {
    id: "unisa",
    name: "University of South Africa",
    abbreviation: "UNISA",
    type: "University",
    description:
      "A distance-learning university offering qualifications across many academic disciplines.",
  },

  {
    id: "ufs",
    name: "University of the Free State",
    abbreviation: "UFS",
    type: "University",
    description:
      "A comprehensive university offering undergraduate and postgraduate programmes.",
  },

  {
    id: "uwc",
    name: "University of the Western Cape",
    abbreviation: "UWC",
    type: "University",
    description:
      "A public research university offering qualifications across a broad range of fields.",
  },

  {
    id: "wits",
    name: "University of the Witwatersrand",
    abbreviation: "WITS",
    type: "University",
    description:
      "A research-intensive university offering undergraduate and postgraduate qualifications.",
  },

  {
    id: "vut",
    name: "Vaal University of Technology",
    abbreviation: "VUT",
    type: "University of Technology",
    description:
      "A university of technology offering career-oriented programmes in technology and related fields.",
  },

  {
    id: "unizulu",
    name: "University of Zululand",
    abbreviation: "UNIZULU",
    type: "University",
    description:
      "A comprehensive university offering undergraduate and postgraduate programmes.",
  },

  {
    id: "univen",
    name: "University of Venda",
    abbreviation: "UNIVEN",
    type: "University",
    description:
      "A comprehensive public university offering undergraduate and postgraduate qualifications.",
  },

  {
    id: "wsu",
    name: "Walter Sisulu University",
    abbreviation: "WSU",
    type: "University",
    description:
      "A comprehensive university offering qualifications across several academic and professional fields.",
  },
];

// =========================================
// QUALIFICATION TYPES
// HEQSF / NQF
// =========================================

export const qualificationTypes: QualificationType[] = [
  {
    id: "higher-certificate",
    name: "Higher Certificate",
    level: "NQF Level 5",
    description:
      "An undergraduate higher-education qualification focused on foundational academic and vocational knowledge.",
  },

  {
    id: "advanced-certificate",
    name: "Advanced Certificate",
    level: "NQF Level 6",
    description:
      "An advanced undergraduate qualification building on prior higher-education learning.",
  },

  {
    id: "diploma",
    name: "Diploma",
    level: "NQF Level 6",
    description:
      "A higher-education qualification with an emphasis on practical and professional knowledge.",
  },

  {
    id: "advanced-diploma",
    name: "Advanced Diploma",
    level: "NQF Level 7",
    description:
      "An advanced undergraduate qualification building on a diploma or related qualification.",
  },

  {
    id: "bachelors-degree",
    name: "Bachelor's Degree",
    level: "NQF Level 7 / 8",
    description:
      "An undergraduate degree comprising structured academic study in a chosen field.",
  },

  {
    id: "postgraduate-diploma",
    name: "Postgraduate Diploma",
    level: "NQF Level 8",
    description:
      "A postgraduate qualification building advanced knowledge in a specialised field.",
  },

  {
    id: "honours-degree",
    name: "Bachelor Honours Degree",
    level: "NQF Level 8",
    description:
      "A postgraduate qualification providing advanced study and specialisation.",
  },

  {
    id: "masters-degree",
    name: "Master's Degree",
    level: "NQF Level 9",
    description:
      "An advanced postgraduate qualification involving research, coursework or a combination of both.",
  },

  {
    id: "doctoral-degree",
    name: "Doctoral Degree",
    level: "NQF Level 10",
    description:
      "The highest academic qualification within the higher-education qualifications framework.",
  },
];

// =========================================
// BROAD STUDY AREAS
// These are categories for navigation/search.
// Institutions will later provide exact
// programme and module lists.
// =========================================

export const studyAreas: StudyArea[] = [
  {
    id: "accounting-finance",
    name: "Accounting & Finance",
    description:
      "Accounting, auditing, finance and financial management.",
  },

  {
    id: "business-management",
    name: "Business & Management",
    description:
      "Business management, administration, entrepreneurship and related fields.",
  },

  {
    id: "computer-science-it",
    name: "Computer Science & IT",
    description:
      "Computer science, information technology, software and computing.",
  },

  {
    id: "engineering",
    name: "Engineering",
    description:
      "Engineering, technology and related technical disciplines.",
  },

  {
    id: "health-sciences",
    name: "Health Sciences",
    description:
      "Medicine, nursing, allied health and health-related disciplines.",
  },

  {
    id: "education",
    name: "Education",
    description:
      "Teacher education, educational studies and related fields.",
  },

  {
    id: "law",
    name: "Law",
    description:
      "Legal studies, law and related professional disciplines.",
  },

  {
    id: "humanities",
    name: "Humanities",
    description:
      "Languages, history, philosophy, communication and related fields.",
  },

  {
    id: "social-sciences",
    name: "Social Sciences",
    description:
      "Psychology, sociology, politics, development and related areas.",
  },

  {
    id: "natural-sciences",
    name: "Natural Sciences",
    description:
      "Mathematics, physics, chemistry, biology and related sciences.",
  },

  {
    id: "agriculture",
    name: "Agriculture",
    description:
      "Agricultural science, production, environmental and related studies.",
  },

  {
    id: "tourism-hospitality",
    name: "Tourism & Hospitality",
    description:
      "Tourism, hospitality, travel and related service industries.",
  },

  {
    id: "arts-design",
    name: "Arts & Design",
    description:
      "Fine art, visual design, performing arts and creative fields.",
  },
];

// =========================================
// SAMPLE MODULES
// These are intentionally clearly marked as
// demo resources. Real university modules
// should be added per institution/qualification.
// =========================================

export const universityModules: UniversityModule[] = [
  {
    id: "tut-csc101",
    code: "CSC101",
    name: "Introduction to Computer Science",
    level: "First Year",
    year: "2026",
    description:
      "Example module demonstrating how university papers will be organised.",
  },

  {
    id: "tut-programming",
    code: "PRG101",
    name: "Programming Fundamentals",
    level: "First Year",
    year: "2026",
    description:
      "Example module for programming and software development resources.",
  },

  {
    id: "tut-database",
    code: "DBP201",
    name: "Database Programming",
    level: "Second Year",
    year: "2026",
    description:
      "Example module for database and data management resources.",
  },
];