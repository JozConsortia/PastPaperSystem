// =========================================
// TVET DATA
// =========================================

export interface TVETProgramme {
  id: string;
  name: string;
  description: string;
  category: string;
  levels?: string[];
}

export interface TVETNATEDProgramme {
  id: string;
  name: string;
  description: string;
  levels: string[];
}

/* =========================================
   NC(V) PROGRAMMES
========================================= */

export const ncvProgrammes: TVETProgramme[] = [
  {
    id: "civil-engineering-building-construction",
    name: "Civil Engineering and Building Construction",
    description:
      "Vocational studies covering construction and civil engineering fields.",
    category: "Engineering",
    levels: ["2", "3", "4"],
  },

  {
    id: "drawing-office-practice",
    name: "Drawing Office Practice",
    description:
      "Technical drawing, drafting and design office-related studies.",
    category: "Engineering",
    levels: ["2", "3", "4"],
  },

  {
    id: "education-development",
    name: "Education and Development",
    description:
      "Studies related to education, development and learning support.",
    category: "Education",
    levels: ["2", "3", "4"],
  },

  {
    id: "electrical-infrastructure-construction",
    name: "Electrical Infrastructure Construction",
    description:
      "Electrical infrastructure, installation and related technical studies.",
    category: "Engineering",
    levels: ["2", "3", "4"],
  },

  {
    id: "engineering-related-design",
    name: "Engineering and Related Design",
    description:
      "Engineering design and related practical technical studies.",
    category: "Engineering",
    levels: ["2", "3", "4"],
  },

  {
    id: "finance-economics-accounting",
    name: "Finance, Economics and Accounting",
    description:
      "Financial, economic and accounting studies for the vocational sector.",
    category: "Business",
    levels: ["2", "3", "4"],
  },

  {
    id: "hospitality",
    name: "Hospitality",
    description:
      "Hospitality services, food preparation and related vocational studies.",
    category: "Services",
    levels: ["2", "3", "4"],
  },

  {
    id: "information-technology-computer-science",
    name: "Information Technology and Computer Science",
    description:
      "Computer programming, information technology and computer science studies.",
    category: "Information Technology",
    levels: ["2", "3", "4"],
  },

  {
    id: "management",
    name: "Management",
    description:
      "Management, administration and business-related vocational studies.",
    category: "Business",
    levels: ["2", "3", "4"],
  },

  {
    id: "marketing",
    name: "Marketing",
    description:
      "Marketing principles, customer relations and promotional activities.",
    category: "Business",
    levels: ["2", "3", "4"],
  },

  {
    id: "mechatronics",
    name: "Mechatronics",
    description:
      "Integrated mechanical, electrical, electronic and control technology.",
    category: "Engineering",
    levels: ["2", "3", "4"],
  },

  {
    id: "office-administration",
    name: "Office Administration",
    description:
      "Office procedures, administration and business support studies.",
    category: "Business",
    levels: ["2", "3", "4"],
  },

  {
    id: "primary-agriculture",
    name: "Primary Agriculture",
    description:
      "Agricultural production and related practical vocational studies.",
    category: "Agriculture",
    levels: ["2", "3", "4"],
  },

  {
    id: "primary-health",
    name: "Primary Health",
    description:
      "Introductory health-related vocational studies.",
    category: "Health",
    levels: ["2", "3", "4"],
  },

  {
    id: "process-instrumentation",
    name: "Process Instrumentation",
    description:
      "Instrumentation, control systems and process measurement studies.",
    category: "Engineering",
    levels: ["2", "3", "4"],
  },

  {
    id: "process-plant-operations",
    name: "Process Plant Operations",
    description:
      "Industrial process operations, safety and plant-related studies.",
    category: "Engineering",
    levels: ["2", "3", "4"],
  },

  {
    id: "safety-in-society",
    name: "Safety in Society",
    description:
      "Safety, security and community-related vocational studies.",
    category: "Safety and Security",
    levels: ["2", "3", "4"],
  },

  {
    id: "tourism",
    name: "Tourism",
    description:
      "Tourism operations, travel services and tourism-related studies.",
    category: "Services",
    levels: ["2", "3", "4"],
  },

  {
    id: "transport-logistics",
    name: "Transport and Logistics",
    description:
      "Transport, logistics and supply-related vocational studies.",
    category: "Transport and Logistics",
    levels: ["2", "3", "4"],
  },
];

/* =========================================
   NATED / REPORT 191 PROGRAMMES
========================================= */

export const natedProgrammes: TVETNATEDProgramme[] = [
  /* BUSINESS STUDIES */

  {
    id: "business-management",
    name: "Business Management",
    description:
      "Business management and commercial studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "financial-management",
    name: "Financial Management",
    description:
      "Accounting, financial management and related business studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "human-resource-management",
    name: "Human Resource Management",
    description:
      "Human resources, personnel and labour-related studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "management-assistant",
    name: "Management Assistant",
    description:
      "Administrative and management support studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "marketing-management",
    name: "Marketing Management",
    description:
      "Marketing, sales and promotional management studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "public-management",
    name: "Public Management",
    description:
      "Public administration and management studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "public-relations",
    name: "Public Relations",
    description:
      "Communication, public relations and organisational communication.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "legal-secretary",
    name: "Legal Secretary",
    description:
      "Legal office administration and secretarial studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "medical-secretary",
    name: "Medical Secretary",
    description:
      "Medical administration and secretarial studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "labour-relations",
    name: "Labour Relations",
    description:
      "Labour relations, employment and workplace studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "mercantile-law",
    name: "Mercantile Law",
    description:
      "Commercial and business law studies.",
    levels: ["N4", "N5", "N6"],
  },

  /* SERVICES / GENERAL */

  {
    id: "hospitality-catering-services",
    name: "Hospitality and Catering Services",
    description:
      "Hospitality, catering, nutrition and practical service studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "tourism-nated",
    name: "Tourism",
    description:
      "Tourism operations and tourism-related studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "educare",
    name: "Educare",
    description:
      "Early childhood and educational care-related studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "art-and-design",
    name: "Art and Design",
    description:
      "Art, design and creative studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "clothing-production",
    name: "Clothing Production",
    description:
      "Clothing production and textile-related studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "textiles",
    name: "Textiles",
    description:
      "Textile production and related studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "hair-care",
    name: "Hair Care",
    description:
      "Hair care and related personal service studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "interior-decorating",
    name: "Interior Decorating",
    description:
      "Interior decoration, design and related practical studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "popular-music-composition",
    name: "Popular Music: Composition",
    description:
      "Popular music composition and creative music studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "popular-music-performance",
    name: "Popular Music: Performance",
    description:
      "Popular music performance studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "popular-music-studio-work",
    name: "Popular Music: Studio Work",
    description:
      "Music recording and studio-related studies.",
    levels: ["N4", "N5", "N6"],
  },

  {
    id: "farming-management",
    name: "Farming Management",
    description:
      "Agricultural and farming management studies.",
    levels: ["N4", "N5", "N6"],
  },

  /* ENGINEERING */

  {
    id: "engineering-studies",
    name: "Engineering Studies",
    description:
      "Engineering theory and technical subjects under Report 191.",
    levels: ["N1", "N2", "N3", "N4", "N5", "N6"],
  },
];

/* =========================================
   OCCUPATIONAL CATEGORIES
========================================= */

export const occupationalCategories = [
  {
    id: "occupational-qualifications",
    name: "Occupational Qualifications",
    description:
      "Industry-aligned qualifications designed around specific occupations.",
    icon: "🎯",
  },

  {
    id: "skills-programmes",
    name: "Skills Programmes",
    description:
      "Focused practical skills programmes for workplace and occupational development.",
    icon: "🛠️",
  },
];

/* =========================================
   NC(V) LEVELS
========================================= */

export const ncvLevels = [
  {
    id: "2",
    name: "NC(V) Level 2",
    description:
      "National Certificate (Vocational) Level 2.",
  },

  {
    id: "3",
    name: "NC(V) Level 3",
    description:
      "National Certificate (Vocational) Level 3.",
  },

  {
    id: "4",
    name: "NC(V) Level 4",
    description:
      "National Certificate (Vocational) Level 4.",
  },
];

/* =========================================
   NATED LEVELS
========================================= */

export const natedLevels = [
  "N4",
  "N5",
  "N6",
];