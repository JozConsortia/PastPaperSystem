// =========================================
// GLOBAL SEARCH DATA
// PastPaperHub
// =========================================

export type SearchCategory =
  | "Primary School"
  | "High School"
  | "TVET"
  | "University";

export type SearchResourceType =
  | "Education Level"
  | "Phase"
  | "Grade"
  | "Subject"
  | "Study Area"
  | "Programme"
  | "Module"
  | "Qualification"
  | "Institution"
  | "Paper";

export interface SearchResource {
  id: string;

  title: string;

  category: SearchCategory;

  type: SearchResourceType;

  description: string;

  keywords: string[];

  path: string;
}

// =========================================
// SEARCH INDEX
//
// This is the first version of the global
// search index.
//
// Later this can be replaced by data from
// your database/API.
// =========================================

export const searchResources: SearchResource[] = [

  // =======================================
  // PRIMARY SCHOOL
  // =======================================

  {
    id: "primary-school",
    title: "Primary School",
    category: "Primary School",
    type: "Education Level",
    description:
      "Explore Foundation, Intermediate and Senior Phase resources.",
    keywords: [
      "primary",
      "school",
      "foundation",
      "intermediate",
      "senior",
      "grades",
      "school papers",
    ],
    path: "/primary",
  },

  {
    id: "foundation-phase",
    title: "Foundation Phase",
    category: "Primary School",
    type: "Phase",
    description:
      "Foundation Phase resources for Grades R to 3.",
    keywords: [
      "foundation",
      "phase",
      "grade r",
      "grade 1",
      "grade 2",
      "grade 3",
      "primary",
    ],
    path: "/primary/phases/foundation",
  },

  {
    id: "intermediate-phase",
    title: "Intermediate Phase",
    category: "Primary School",
    type: "Phase",
    description:
      "Intermediate Phase resources for Grades 4 to 6.",
    keywords: [
      "intermediate",
      "phase",
      "grade 4",
      "grade 5",
      "grade 6",
      "primary",
    ],
    path: "/primary/phases/intermediate",
  },

  {
    id: "senior-phase",
    title: "Senior Phase",
    category: "Primary School",
    type: "Phase",
    description:
      "Senior Phase resources for Grades 7 to 9.",
    keywords: [
      "senior",
      "phase",
      "grade 7",
      "grade 8",
      "grade 9",
      "primary",
    ],
    path: "/primary/phases/senior",
  },

  {
    id: "grade-r",
    title: "Grade R",
    category: "Primary School",
    type: "Grade",
    description:
      "Foundation Phase Grade R resources.",
    keywords: [
      "grade r",
      "r",
      "foundation",
      "primary",
      "school",
    ],
    path: "/primary/phases/foundation/grade/R",
  },

  {
    id: "grade-1",
    title: "Grade 1",
    category: "Primary School",
    type: "Grade",
    description:
      "Foundation Phase Grade 1 resources.",
    keywords: [
      "grade 1",
      "1",
      "foundation",
      "primary",
      "school",
    ],
    path: "/primary/phases/foundation/grade/1",
  },

  {
    id: "grade-2",
    title: "Grade 2",
    category: "Primary School",
    type: "Grade",
    description:
      "Foundation Phase Grade 2 resources.",
    keywords: [
      "grade 2",
      "2",
      "foundation",
      "primary",
      "school",
    ],
    path: "/primary/phases/foundation/grade/2",
  },

  {
    id: "grade-3",
    title: "Grade 3",
    category: "Primary School",
    type: "Grade",
    description:
      "Foundation Phase Grade 3 resources.",
    keywords: [
      "grade 3",
      "3",
      "foundation",
      "primary",
      "school",
    ],
    path: "/primary/phases/foundation/grade/3",
  },

  {
    id: "grade-4",
    title: "Grade 4",
    category: "Primary School",
    type: "Grade",
    description:
      "Intermediate Phase Grade 4 resources.",
    keywords: [
      "grade 4",
      "4",
      "intermediate",
      "primary",
      "school",
    ],
    path: "/primary/phases/intermediate/grade/4",
  },

  {
    id: "grade-5",
    title: "Grade 5",
    category: "Primary School",
    type: "Grade",
    description:
      "Intermediate Phase Grade 5 resources.",
    keywords: [
      "grade 5",
      "5",
      "intermediate",
      "primary",
      "school",
    ],
    path: "/primary/phases/intermediate/grade/5",
  },

  {
    id: "grade-6",
    title: "Grade 6",
    category: "Primary School",
    type: "Grade",
    description:
      "Intermediate Phase Grade 6 resources.",
    keywords: [
      "grade 6",
      "6",
      "intermediate",
      "primary",
      "school",
    ],
    path: "/primary/phases/intermediate/grade/6",
  },

  {
    id: "grade-7",
    title: "Grade 7",
    category: "Primary School",
    type: "Grade",
    description:
      "Senior Phase Grade 7 resources.",
    keywords: [
      "grade 7",
      "7",
      "senior",
      "primary",
      "school",
    ],
    path: "/primary/phases/senior/grade/7",
  },

  {
    id: "grade-8",
    title: "Grade 8",
    category: "Primary School",
    type: "Grade",
    description:
      "Senior Phase Grade 8 resources.",
    keywords: [
      "grade 8",
      "8",
      "senior",
      "primary",
      "school",
    ],
    path: "/primary/phases/senior/grade/8",
  },

  {
    id: "grade-9",
    title: "Grade 9",
    category: "Primary School",
    type: "Grade",
    description:
      "Senior Phase Grade 9 resources.",
    keywords: [
      "grade 9",
      "9",
      "senior",
      "primary",
      "school",
    ],
    path: "/primary/phases/senior/grade/9",
  },

  // =======================================
  // HIGH SCHOOL
  // =======================================

  {
    id: "high-school",
    title: "High School",
    category: "High School",
    type: "Education Level",
    description:
      "Explore FET Phase resources for Grades 10 to 12.",
    keywords: [
      "high school",
      "school",
      "fet",
      "grade 10",
      "grade 11",
      "grade 12",
      "matric",
      "caps",
    ],
    path: "/high-school",
  },

  {
    id: "fet-phase",
    title: "FET Phase",
    category: "High School",
    type: "Phase",
    description:
      "Further Education and Training Phase for Grades 10 to 12.",
    keywords: [
      "fet",
      "phase",
      "high school",
      "grade 10",
      "grade 11",
      "grade 12",
      "matric",
    ],
    path: "/high-school/fet",
  },

  {
    id: "high-grade-10",
    title: "Grade 10",
    category: "High School",
    type: "Grade",
    description:
      "Grade 10 FET Phase resources.",
    keywords: [
      "grade 10",
      "10",
      "fet",
      "high school",
      "mathematics",
      "english",
      "science",
    ],
    path: "/high-school/fet/grade/10",
  },

  {
    id: "high-grade-11",
    title: "Grade 11",
    category: "High School",
    type: "Grade",
    description:
      "Grade 11 FET Phase resources.",
    keywords: [
      "grade 11",
      "11",
      "fet",
      "high school",
      "mathematics",
      "english",
      "science",
    ],
    path: "/high-school/fet/grade/11",
  },

  {
    id: "high-grade-12",
    title: "Grade 12",
    category: "High School",
    type: "Grade",
    description:
      "Grade 12 FET Phase and matric resources.",
    keywords: [
      "grade 12",
      "12",
      "matric",
      "matriculation",
      "fet",
      "high school",
      "mathematics",
      "english",
      "science",
    ],
    path: "/high-school/fet/grade/12",
  },

  {
    id: "grade-10-mathematics",
    title: "Grade 10 Mathematics",
    category: "High School",
    type: "Subject",
    description:
      "Grade 10 Mathematics resources and past papers.",
    keywords: [
      "grade 10",
      "mathematics",
      "maths",
      "math",
      "high school",
      "fet",
      "subject",
    ],
    path: "/high-school/fet/grade/10/mathematics",
  },

  {
    id: "grade-11-mathematics",
    title: "Grade 11 Mathematics",
    category: "High School",
    type: "Subject",
    description:
      "Grade 11 Mathematics resources and past papers.",
    keywords: [
      "grade 11",
      "mathematics",
      "maths",
      "math",
      "high school",
      "fet",
      "subject",
    ],
    path: "/high-school/fet/grade/11/mathematics",
  },

  {
    id: "grade-12-mathematics",
    title: "Grade 12 Mathematics",
    category: "High School",
    type: "Subject",
    description:
      "Grade 12 Mathematics and matric past papers.",
    keywords: [
      "grade 12",
      "mathematics",
      "maths",
      "math",
      "matric",
      "high school",
      "fet",
    ],
    path: "/high-school/fet/grade/12/mathematics",
  },

  // =======================================
  // TVET
  // =======================================

  {
    id: "tvet-college",
    title: "TVET College",
    category: "TVET",
    type: "Education Level",
    description:
      "Explore TVET College pathways including NC(V), NATED and Occupational Programmes.",
    keywords: [
      "tvet",
      "college",
      "technical",
      "vocational",
      "ncv",
      "nated",
      "report 191",
      "occupational",
    ],
    path: "/tvet",
  },

  {
    id: "ncv",
    title: "NC(V)",
    category: "TVET",
    type: "Programme",
    description:
      "National Certificate (Vocational) levels and programmes.",
    keywords: [
      "ncv",
      "nc(v)",
      "national certificate vocational",
      "level 2",
      "level 3",
      "level 4",
      "tvet",
    ],
    path: "/tvet/ncv",
  },

  {
    id: "ncv-level-2",
    title: "NC(V) Level 2",
    category: "TVET",
    type: "Qualification",
    description:
      "National Certificate (Vocational) Level 2 resources.",
    keywords: [
      "ncv",
      "level 2",
      "tvet",
      "vocational",
      "national certificate",
    ],
    path: "/tvet/ncv?level=2",
  },

  {
    id: "ncv-level-3",
    title: "NC(V) Level 3",
    category: "TVET",
    type: "Qualification",
    description:
      "National Certificate (Vocational) Level 3 resources.",
    keywords: [
      "ncv",
      "level 3",
      "tvet",
      "vocational",
      "national certificate",
    ],
    path: "/tvet/ncv?level=3",
  },

  {
    id: "ncv-level-4",
    title: "NC(V) Level 4",
    category: "TVET",
    type: "Qualification",
    description:
      "National Certificate (Vocational) Level 4 resources.",
    keywords: [
      "ncv",
      "level 4",
      "tvet",
      "vocational",
      "national certificate",
    ],
    path: "/tvet/ncv?level=4",
  },

  {
    id: "ncv-it",
    title: "Information Technology and Computer Science",
    category: "TVET",
    type: "Programme",
    description:
      "NC(V) Information Technology and Computer Science programme.",
    keywords: [
      "it",
      "information technology",
      "computer science",
      "computers",
      "programming",
      "ncv",
      "tvet",
    ],
    path: "/tvet/ncv/information-technology-computer-science",
  },

  {
    id: "ncv-mathematics",
    title: "NC(V) Mathematics",
    category: "TVET",
    type: "Subject",
    description:
      "Mathematics resources within NC(V) study.",
    keywords: [
      "mathematics",
      "maths",
      "math",
      "ncv",
      "tvet",
      "subject",
    ],
    path: "/tvet/ncv",
  },

  {
    id: "nated",
    title: "NATED / Report 191",
    category: "TVET",
    type: "Programme",
    description:
      "Report 191 / NATED programmes and N-level resources.",
    keywords: [
      "nated",
      "report 191",
      "n1",
      "n2",
      "n3",
      "n4",
      "n5",
      "n6",
      "tvet",
    ],
    path: "/tvet/nated",
  },

  {
    id: "engineering-studies",
    title: "NATED Engineering Studies",
    category: "TVET",
    type: "Programme",
    description:
      "Engineering Studies under the NATED / Report 191 pathway.",
    keywords: [
      "engineering",
      "engineering studies",
      "nated",
      "report 191",
      "n4",
      "n5",
      "n6",
      "tvet",
    ],
    path: "/tvet/nated/engineering-studies",
  },

  {
    id: "engineering-mathematics-n4",
    title: "Engineering Mathematics N4",
    category: "TVET",
    type: "Module",
    description:
      "Engineering Mathematics N4 resources.",
    keywords: [
      "engineering mathematics",
      "engineering maths",
      "mathematics",
      "maths",
      "n4",
      "nated",
      "tvet",
      "engineering",
    ],
    path: "/tvet/nated/engineering-studies",
  },

  {
    id: "business-management-n4",
    title: "Business Management N4",
    category: "TVET",
    type: "Programme",
    description:
      "Business Management N4 resources.",
    keywords: [
      "business management",
      "business",
      "management",
      "n4",
      "nated",
      "tvet",
    ],
    path: "/tvet/nated/business-management",
  },

  {
    id: "occupational-programmes",
    title: "Occupational Programmes",
    category: "TVET",
    type: "Programme",
    description:
      "Workplace-aligned occupational qualifications and skills programmes.",
    keywords: [
      "occupational",
      "occupational programmes",
      "skills",
      "workplace",
      "qualification",
      "tvet",
    ],
    path: "/tvet/occupational",
  },

  // =======================================
  // UNIVERSITY
  // =======================================

  {
    id: "university",
    title: "University",
    category: "University",
    type: "Education Level",
    description:
      "Explore university institutions, qualifications, study areas and modules.",
    keywords: [
      "university",
      "higher education",
      "institution",
      "qualification",
      "course",
      "module",
      "degree",
      "diploma",
    ],
    path: "/university",
  },

  {
    id: "university-institutions",
    title: "South African Universities",
    category: "University",
    type: "Institution",
    description:
      "Browse South African universities and universities of technology.",
    keywords: [
      "university",
      "universities",
      "institution",
      "higher education",
      "south africa",
    ],
    path: "/university/institutions",
  },

  {
    id: "tut",
    title: "Tshwane University of Technology",
    category: "University",
    type: "Institution",
    description:
      "Tshwane University of Technology.",
    keywords: [
      "tut",
      "tshwane",
      "university",
      "technology",
      "higher education",
    ],
    path: "/university/tut",
  },

  {
    id: "up",
    title: "University of Pretoria",
    category: "University",
    type: "Institution",
    description:
      "University of Pretoria.",
    keywords: [
      "up",
      "university of pretoria",
      "pretoria",
      "university",
    ],
    path: "/university/up",
  },

  {
    id: "uj",
    title: "University of Johannesburg",
    category: "University",
    type: "Institution",
    description:
      "University of Johannesburg.",
    keywords: [
      "uj",
      "university of johannesburg",
      "johannesburg",
      "university",
    ],
    path: "/university/uj",
  },

  {
    id: "wits",
    title: "University of the Witwatersrand",
    category: "University",
    type: "Institution",
    description:
      "University of the Witwatersrand.",
    keywords: [
      "wits",
      "witwatersrand",
      "university",
      "johannesburg",
    ],
    path: "/university/wits",
  },

  {
    id: "unisa",
    title: "University of South Africa",
    category: "University",
    type: "Institution",
    description:
      "University of South Africa.",
    keywords: [
      "unisa",
      "university of south africa",
      "distance",
      "university",
    ],
    path: "/university/unisa",
  },

  {
    id: "computer-science-it",
    title: "Computer Science and IT",
    category: "University",
    type: "Study Area",
    description:
      "Computer science, information technology, software and computing studies.",
    keywords: [
      "computer science",
      "information technology",
      "it",
      "software",
      "programming",
      "computing",
      "university",
    ],
    path: "/university/study-area/computer-science-it",
  },

  {
    id: "engineering-university",
    title: "Engineering",
    category: "University",
    type: "Study Area",
    description:
      "Engineering and technology-related university study.",
    keywords: [
      "engineering",
      "civil",
      "mechanical",
      "electrical",
      "chemical",
      "technology",
      "university",
    ],
    path: "/university/study-area/engineering",
  },

  {
    id: "business-management-university",
    title: "Business and Management",
    category: "University",
    type: "Study Area",
    description:
      "Business, management, administration and entrepreneurship.",
    keywords: [
      "business",
      "management",
      "finance",
      "accounting",
      "marketing",
      "entrepreneurship",
      "university",
    ],
    path: "/university/study-area/business-management",
  },

  {
    id: "bachelors-degree",
    title: "Bachelor's Degree",
    category: "University",
    type: "Qualification",
    description:
      "Undergraduate bachelor's degree study.",
    keywords: [
      "bachelor",
      "bachelors",
      "degree",
      "undergraduate",
      "nqf 7",
      "nqf 8",
      "university",
    ],
    path: "/university/qualifications",
  },

  {
    id: "diploma",
    title: "Diploma",
    category: "University",
    type: "Qualification",
    description:
      "Higher-education diploma qualifications.",
    keywords: [
      "diploma",
      "qualification",
      "nqf 6",
      "university",
      "higher education",
    ],
    path: "/university/qualifications",
  },

  {
    id: "honours-degree",
    title: "Bachelor Honours Degree",
    category: "University",
    type: "Qualification",
    description:
      "Postgraduate honours degree study.",
    keywords: [
      "honours",
      "honors",
      "postgraduate",
      "degree",
      "nqf 8",
      "university",
    ],
    path: "/university/qualifications",
  },

  {
    id: "masters-degree",
    title: "Master's Degree",
    category: "University",
    type: "Qualification",
    description:
      "Master's degree study at NQF Level 9.",
    keywords: [
      "masters",
      "master",
      "postgraduate",
      "nqf 9",
      "research",
      "university",
    ],
    path: "/university/qualifications",
  },

  {
    id: "doctoral-degree",
    title: "Doctoral Degree",
    category: "University",
    type: "Qualification",
    description:
      "Doctoral degree study at NQF Level 10.",
    keywords: [
      "doctoral",
      "doctorate",
      "phd",
      "nqf 10",
      "research",
      "university",
    ],
    path: "/university/qualifications",
  },

  {
    id: "csc101",
    title: "CSC101",
    category: "University",
    type: "Module",
    description:
      "Example university computer science module.",
    keywords: [
      "csc101",
      "computer science",
      "programming",
      "module",
      "university",
      "tut",
    ],
    path: "/university/tut/module/tut-csc101",
  },

  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    category: "University",
    type: "Module",
    description:
      "Programming fundamentals module resources.",
    keywords: [
      "programming",
      "programming fundamentals",
      "computer science",
      "prg101",
      "module",
      "university",
    ],
    path: "/university/tut/module/tut-programming",
  },

  {
    id: "database-programming",
    title: "Database Programming",
    category: "University",
    type: "Module",
    description:
      "Database programming module resources.",
    keywords: [
      "database",
      "databases",
      "database programming",
      "dbp201",
      "sql",
      "module",
      "university",
    ],
    path: "/university/tut/module/tut-database",
  },
];

// =========================================
// SEARCH FUNCTION
// =========================================

export function searchResourcesByQuery(
  query: string
): SearchResource[] {

  const normalizedQuery =
    query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const words = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  return searchResources
    .map((resource) => {

      const searchableText = [
        resource.title,
        resource.category,
        resource.type,
        resource.description,
        ...resource.keywords,
      ]
        .join(" ")
        .toLowerCase();

      let score = 0;

      // Exact title gets the strongest match.
      if (
        resource.title
          .toLowerCase()
          .includes(normalizedQuery)
      ) {
        score += 100;
      }

      // Category match.
      if (
        resource.category
          .toLowerCase()
          .includes(normalizedQuery)
      ) {
        score += 30;
      }

      // Type match.
      if (
        resource.type
          .toLowerCase()
          .includes(normalizedQuery)
      ) {
        score += 20;
      }

      // Every individual search word.
      words.forEach((word) => {

        if (
          resource.title
            .toLowerCase()
            .includes(word)
        ) {
          score += 25;
        }

        if (
          resource.keywords.some(
            (keyword) =>
              keyword.toLowerCase().includes(word)
          )
        ) {
          score += 15;
        }

        if (
          resource.description
            .toLowerCase()
            .includes(word)
        ) {
          score += 5;
        }

      });

      // Final safety check.
      if (
        searchableText.includes(normalizedQuery)
      ) {
        score += 10;
      }

      return {
        resource,
        score,
      };

    })
    .filter(
      (item) => item.score > 0
    )
    .sort(
      (a, b) => b.score - a.score
    )
    .map(
      (item) => item.resource
    );
}