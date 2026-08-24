export interface PastPaper {
  id: string;
  title: string;

  grade: string;

  subject: string;

  language?: string;

  year: number;

  term: string;

  paperType: string;

  fileName: string;

  fileUrl: string;

  memorandumAvailable: boolean;

  memorandumUrl?: string;

  description: string;
}

export const pastPapers: PastPaper[] = [
  // ==========================================
  // GRADE R
  // ==========================================

  {
    id: "gr-math-2025-t1-test",
    title: "Grade R Mathematics Term 1 Test",
    grade: "R",
    subject: "mathematics",
    year: 2025,
    term: "Term 1",
    paperType: "Test",
    fileName: "Grade-R-Mathematics-Term-1-2025.pdf",
    fileUrl: "/papers/Grade-R-Mathematics-Term-1-2025.pdf",
    memorandumAvailable: false,
    description:
      "Grade R Mathematics assessment covering Term 1 learning.",
  },

  {
    id: "gr-life-skills-2025-t2-test",
    title: "Grade R Life Skills Term 2 Test",
    grade: "R",
    subject: "life-skills",
    year: 2025,
    term: "Term 2",
    paperType: "Test",
    fileName: "Grade-R-Life-Skills-Term-2-2025.pdf",
    fileUrl: "/papers/Grade-R-Life-Skills-Term-2-2025.pdf",
    memorandumAvailable: false,
    description:
      "Grade R Life Skills assessment for Term 2.",
  },

  {
    id: "gr-hl-english-2025-t3",
    title: "Grade R English Home Language Term 3",
    grade: "R",
    subject: "home-language",
    language: "english",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    fileName: "Grade-R-English-Home-Language-Term-3-2025.pdf",
    fileUrl:
      "/papers/Grade-R-English-Home-Language-Term-3-2025.pdf",
    memorandumAvailable: false,
    description:
      "Grade R English Home Language Term 3 assessment.",
  },

  // ==========================================
  // GRADE 1 MATHEMATICS
  // ==========================================

  {
    id: "g1-math-2025-t1-test",
    title: "Grade 1 Mathematics Term 1 Test",
    grade: "1",
    subject: "mathematics",
    year: 2025,
    term: "Term 1",
    paperType: "Test",
    fileName: "Grade-1-Mathematics-Term-1-2025.pdf",
    fileUrl: "/papers/Grade-1-Mathematics-Term-1-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-1-Mathematics-Term-1-2025-Memo.pdf",
    description:
      "Grade 1 Mathematics Term 1 test.",
  },

  {
    id: "g1-math-2025-t2-exam",
    title: "Grade 1 Mathematics Term 2 Examination",
    grade: "1",
    subject: "mathematics",
    year: 2025,
    term: "Term 2",
    paperType: "Examination",
    fileName: "Grade-1-Mathematics-Term-2-2025.pdf",
    fileUrl: "/papers/Grade-1-Mathematics-Term-2-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-1-Mathematics-Term-2-2025-Memo.pdf",
    description:
      "Grade 1 Mathematics Term 2 examination.",
  },

  {
    id: "g1-math-2024-t3-test",
    title: "Grade 1 Mathematics Term 3 Test",
    grade: "1",
    subject: "mathematics",
    year: 2024,
    term: "Term 3",
    paperType: "Test",
    fileName: "Grade-1-Mathematics-Term-3-2024.pdf",
    fileUrl: "/papers/Grade-1-Mathematics-Term-3-2024.pdf",
    memorandumAvailable: false,
    description:
      "Grade 1 Mathematics Term 3 test.",
  },

  {
    id: "g1-math-2024-t4-exam",
    title: "Grade 1 Mathematics Final Examination",
    grade: "1",
    subject: "mathematics",
    year: 2024,
    term: "Term 4",
    paperType: "Examination",
    fileName: "Grade-1-Mathematics-Term-4-2024.pdf",
    fileUrl: "/papers/Grade-1-Mathematics-Term-4-2024.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-1-Mathematics-Term-4-2024-Memo.pdf",
    description:
      "Grade 1 Mathematics final examination.",
  },

  // ==========================================
  // GRADE 1 ENGLISH
  // ==========================================

  {
    id: "g1-hl-english-2025-t1",
    title: "Grade 1 English Home Language Term 1",
    grade: "1",
    subject: "home-language",
    language: "english",
    year: 2025,
    term: "Term 1",
    paperType: "Test",
    fileName: "Grade-1-English-Home-Language-Term-1-2025.pdf",
    fileUrl:
      "/papers/Grade-1-English-Home-Language-Term-1-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-1-English-Home-Language-Term-1-2025-Memo.pdf",
    description:
      "Grade 1 English Home Language Term 1 assessment.",
  },

  {
    id: "g1-hl-isizulu-2025-t2",
    title: "Grade 1 isiZulu Home Language Term 2",
    grade: "1",
    subject: "home-language",
    language: "isizulu",
    year: 2025,
    term: "Term 2",
    paperType: "Test",
    fileName: "Grade-1-isiZulu-Home-Language-Term-2-2025.pdf",
    fileUrl:
      "/papers/Grade-1-isiZulu-Home-Language-Term-2-2025.pdf",
    memorandumAvailable: false,
    description:
      "Grade 1 isiZulu Home Language Term 2 assessment.",
  },

  // ==========================================
  // GRADE 1 FIRST ADDITIONAL LANGUAGE
  // ==========================================

  {
    id: "g1-fal-english-2025-t2",
    title: "Grade 1 English First Additional Language Term 2",
    grade: "1",
    subject: "first-additional-language",
    language: "english",
    year: 2025,
    term: "Term 2",
    paperType: "Test",
    fileName:
      "Grade-1-English-First-Additional-Language-Term-2-2025.pdf",
    fileUrl:
      "/papers/Grade-1-English-First-Additional-Language-Term-2-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-1-English-First-Additional-Language-Term-2-2025-Memo.pdf",
    description:
      "Grade 1 English First Additional Language Term 2 test.",
  },

  // ==========================================
  // GRADE 1 LIFE SKILLS
  // ==========================================

  {
    id: "g1-life-2025-t3",
    title: "Grade 1 Life Skills Term 3 Test",
    grade: "1",
    subject: "life-skills",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    fileName: "Grade-1-Life-Skills-Term-3-2025.pdf",
    fileUrl: "/papers/Grade-1-Life-Skills-Term-3-2025.pdf",
    memorandumAvailable: false,
    description:
      "Grade 1 Life Skills Term 3 assessment.",
  },

  // ==========================================
  // GRADE 2
  // ==========================================

  {
    id: "g2-math-2025-t1",
    title: "Grade 2 Mathematics Term 1 Test",
    grade: "2",
    subject: "mathematics",
    year: 2025,
    term: "Term 1",
    paperType: "Test",
    fileName: "Grade-2-Mathematics-Term-1-2025.pdf",
    fileUrl: "/papers/Grade-2-Mathematics-Term-1-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-2-Mathematics-Term-1-2025-Memo.pdf",
    description:
      "Grade 2 Mathematics Term 1 test.",
  },

  {
    id: "g2-math-2025-t4",
    title: "Grade 2 Mathematics Final Examination",
    grade: "2",
    subject: "mathematics",
    year: 2025,
    term: "Term 4",
    paperType: "Examination",
    fileName: "Grade-2-Mathematics-Term-4-2025.pdf",
    fileUrl: "/papers/Grade-2-Mathematics-Term-4-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-2-Mathematics-Term-4-2025-Memo.pdf",
    description:
      "Grade 2 Mathematics final examination.",
  },

  // ==========================================
  // GRADE 3
  // ==========================================

  {
    id: "g3-math-2025-t2",
    title: "Grade 3 Mathematics Term 2 Examination",
    grade: "3",
    subject: "mathematics",
    year: 2025,
    term: "Term 2",
    paperType: "Examination",
    fileName: "Grade-3-Mathematics-Term-2-2025.pdf",
    fileUrl: "/papers/Grade-3-Mathematics-Term-2-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-3-Mathematics-Term-2-2025-Memo.pdf",
    description:
      "Grade 3 Mathematics Term 2 examination.",
  },

  {
    id: "g3-life-2024-t4",
    title: "Grade 3 Life Skills Final Examination",
    grade: "3",
    subject: "life-skills",
    year: 2024,
    term: "Term 4",
    paperType: "Examination",
    fileName: "Grade-3-Life-Skills-Term-4-2024.pdf",
    fileUrl: "/papers/Grade-3-Life-Skills-Term-4-2024.pdf",
    memorandumAvailable: false,
    description:
      "Grade 3 Life Skills final examination.",
  },

  {
    id: "g3-hl-english-2025-t3",
    title: "Grade 3 English Home Language Term 3",
    grade: "3",
    subject: "home-language",
    language: "english",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    fileName: "Grade-3-English-Home-Language-Term-3-2025.pdf",
    fileUrl:
      "/papers/Grade-3-English-Home-Language-Term-3-2025.pdf",
    memorandumAvailable: true,
    memorandumUrl:
      "/papers/Grade-3-English-Home-Language-Term-3-2025-Memo.pdf",
    description:
      "Grade 3 English Home Language Term 3 assessment.",
  },
];

/* ==================================================
   HELPER FUNCTIONS
================================================== */

export function getPapersByGrade(
  grade: string
): PastPaper[] {
  return pastPapers.filter(
    (paper) => paper.grade === grade
  );
}

export function getPapersBySubject(
  grade: string,
  subject: string
): PastPaper[] {
  return pastPapers.filter(
    (paper) =>
      paper.grade === grade &&
      paper.subject === subject
  );
}

export function getPapersByLanguage(
  grade: string,
  subject: string,
  language: string
): PastPaper[] {
  return pastPapers.filter(
    (paper) =>
      paper.grade === grade &&
      paper.subject === subject &&
      paper.language === language
  );
}

export function getYears(
  papers: PastPaper[]
): number[] {
  return Array.from(
    new Set(papers.map((paper) => paper.year))
  ).sort((a, b) => b - a);
}

export function getTerms(
  papers: PastPaper[]
): string[] {
  return Array.from(
    new Set(papers.map((paper) => paper.term))
  );
}

export function getPaperTypes(
  papers: PastPaper[]
): string[] {
  return Array.from(
    new Set(
      papers.map((paper) => paper.paperType)
    )
  );
}