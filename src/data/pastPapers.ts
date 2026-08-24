export interface PastPaper {
  id: string;

  educationLevel: string;

  phase: string;

  grade: string;

  subject: string;

  language?: string;

  discipline?: string;

  year: number;

  term: string;

  paperType: string;

  title: string;

  description: string;

  fileUrl?: string;

  uploadedBy: string;
}

/*
|--------------------------------------------------------------------------
| SAMPLE PAST PAPERS
|--------------------------------------------------------------------------
|
| These are sample records for testing the application.
| Later, these will come from the database.
|
*/

export const pastPapers: PastPaper[] = [
  // =====================================================
  // FOUNDATION PHASE
  // GRADE 1
  // =====================================================

  {
    id: "fp-g1-math-2025-t1-test",
    educationLevel: "Primary School",
    phase: "Foundation Phase",
    grade: "1",
    subject: "mathematics",
    year: 2025,
    term: "Term 1",
    paperType: "Test",
    title: "Grade 1 Mathematics Term 1 Test",
    description:
      "Grade 1 Mathematics assessment for Term 1.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "fp-g1-english-2025-t2-test",
    educationLevel: "Primary School",
    phase: "Foundation Phase",
    grade: "1",
    subject: "home-language",
    language: "english",
    year: 2025,
    term: "Term 2",
    paperType: "Test",
    title: "Grade 1 English Home Language Term 2",
    description:
      "Grade 1 English Home Language assessment.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "fp-g1-isizulu-2025-t3-test",
    educationLevel: "Primary School",
    phase: "Foundation Phase",
    grade: "1",
    subject: "home-language",
    language: "isizulu",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    title: "Grade 1 isiZulu Home Language Term 3",
    description:
      "Grade 1 isiZulu Home Language assessment.",
    uploadedBy: "PastPaperHub",
  },

  // =====================================================
  // FOUNDATION PHASE
  // GRADE 3
  // =====================================================

  {
    id: "fp-g3-math-2025-t4-exam",
    educationLevel: "Primary School",
    phase: "Foundation Phase",
    grade: "3",
    subject: "mathematics",
    year: 2025,
    term: "Term 4",
    paperType: "Examination",
    title: "Grade 3 Mathematics Final Examination",
    description:
      "Grade 3 Mathematics final examination paper.",
    uploadedBy: "PastPaperHub",
  },

  // =====================================================
  // INTERMEDIATE PHASE
  // GRADE 4
  // =====================================================

  {
    id: "ip-g4-math-2025-t1-test",
    educationLevel: "Primary School",
    phase: "Intermediate Phase",
    grade: "4",
    subject: "mathematics",
    year: 2025,
    term: "Term 1",
    paperType: "Test",
    title: "Grade 4 Mathematics Term 1 Test",
    description:
      "Grade 4 Mathematics Term 1 test paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "ip-g4-english-2025-t2-exam",
    educationLevel: "Primary School",
    phase: "Intermediate Phase",
    grade: "4",
    subject: "home-language",
    language: "english",
    year: 2025,
    term: "Term 2",
    paperType: "Examination",
    title: "Grade 4 English Home Language Examination",
    description:
      "Grade 4 English Home Language examination paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "ip-g4-isizulu-2025-t3-test",
    educationLevel: "Primary School",
    phase: "Intermediate Phase",
    grade: "4",
    subject: "home-language",
    language: "isizulu",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    title: "Grade 4 isiZulu Home Language Test",
    description:
      "Grade 4 isiZulu Home Language test paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "ip-g4-natural-sciences-2025-t4-exam",
    educationLevel: "Primary School",
    phase: "Intermediate Phase",
    grade: "4",
    subject: "natural-sciences-technology",
    year: 2025,
    term: "Term 4",
    paperType: "Examination",
    title: "Grade 4 Natural Sciences & Technology",
    description:
      "Grade 4 Natural Sciences and Technology examination.",
    uploadedBy: "PastPaperHub",
  },

  // =====================================================
  // INTERMEDIATE PHASE
  // GRADE 5
  // =====================================================

  {
    id: "ip-g5-math-2025-t2-exam",
    educationLevel: "Primary School",
    phase: "Intermediate Phase",
    grade: "5",
    subject: "mathematics",
    year: 2025,
    term: "Term 2",
    paperType: "Examination",
    title: "Grade 5 Mathematics Term 2 Examination",
    description:
      "Grade 5 Mathematics examination paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "ip-g5-social-sciences-2025-t3-test",
    educationLevel: "Primary School",
    phase: "Intermediate Phase",
    grade: "5",
    subject: "social-sciences",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    title: "Grade 5 Social Sciences Term 3 Test",
    description:
      "Grade 5 Social Sciences test paper.",
    uploadedBy: "PastPaperHub",
  },

  // =====================================================
  // INTERMEDIATE PHASE
  // GRADE 6
  // =====================================================

  {
    id: "ip-g6-math-2025-t4-exam",
    educationLevel: "Primary School",
    phase: "Intermediate Phase",
    grade: "6",
    subject: "mathematics",
    year: 2025,
    term: "Term 4",
    paperType: "Examination",
    title: "Grade 6 Mathematics Final Examination",
    description:
      "Grade 6 Mathematics final examination paper.",
    uploadedBy: "PastPaperHub",
  },

  // =====================================================
  // SENIOR PHASE
  // GRADE 7
  // =====================================================

  {
    id: "sp-g7-math-2025-t1-test",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "7",
    subject: "mathematics",
    year: 2025,
    term: "Term 1",
    paperType: "Test",
    title: "Grade 7 Mathematics Term 1 Test",
    description:
      "Grade 7 Mathematics test paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "sp-g7-english-2025-t2-exam",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "7",
    subject: "home-language",
    language: "english",
    year: 2025,
    term: "Term 2",
    paperType: "Examination",
    title: "Grade 7 English Home Language Examination",
    description:
      "Grade 7 English Home Language examination paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "sp-g7-isizulu-2025-t3-test",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "7",
    subject: "home-language",
    language: "isizulu",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    title: "Grade 7 isiZulu Home Language Test",
    description:
      "Grade 7 isiZulu Home Language test paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "sp-g7-technology-2025-t4-exam",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "7",
    subject: "technology",
    year: 2025,
    term: "Term 4",
    paperType: "Examination",
    title: "Grade 7 Technology Examination",
    description:
      "Grade 7 Technology examination paper.",
    uploadedBy: "PastPaperHub",
  },

  // =====================================================
  // SENIOR PHASE
  // GRADE 8
  // =====================================================

  {
    id: "sp-g8-math-2025-t2-exam",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "8",
    subject: "mathematics",
    year: 2025,
    term: "Term 2",
    paperType: "Examination",
    title: "Grade 8 Mathematics Term 2 Examination",
    description:
      "Grade 8 Mathematics examination paper.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "sp-g8-creative-dance-2025-t3-test",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "8",
    subject: "creative-arts",
    discipline: "dance",
    year: 2025,
    term: "Term 3",
    paperType: "Test",
    title: "Grade 8 Creative Arts - Dance",
    description:
      "Grade 8 Dance assessment.",
    uploadedBy: "PastPaperHub",
  },

  // =====================================================
  // SENIOR PHASE
  // GRADE 9
  // =====================================================

  {
    id: "sp-g9-math-2025-t4-exam",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "9",
    subject: "mathematics",
    year: 2025,
    term: "Term 4",
    paperType: "Examination",
    title: "Grade 9 Mathematics Final Examination",
    description:
      "Grade 9 Mathematics final examination.",
    uploadedBy: "PastPaperHub",
  },

  {
    id: "sp-g9-english-2025-t4-exam",
    educationLevel: "Primary School",
    phase: "Senior Phase",
    grade: "9",
    subject: "home-language",
    language: "english",
    year: 2025,
    term: "Term 4",
    paperType: "Examination",
    title: "Grade 9 English Home Language Examination",
    description:
      "Grade 9 English Home Language examination.",
    uploadedBy: "PastPaperHub",
  },
];

/*
|--------------------------------------------------------------------------
| GET YEARS
|--------------------------------------------------------------------------
*/

export function getYears(): number[] {
  return Array.from(
    new Set(
      pastPapers.map(
        (paper) => paper.year
      )
    )
  ).sort((a, b) => b - a);
}

/*
|--------------------------------------------------------------------------
| GET TERMS
|--------------------------------------------------------------------------
*/

export function getTerms(): string[] {
  return Array.from(
    new Set(
      pastPapers.map(
        (paper) => paper.term
      )
    )
  );
}

/*
|--------------------------------------------------------------------------
| GET PAPER TYPES
|--------------------------------------------------------------------------
*/

export function getPaperTypes(): string[] {
  return Array.from(
    new Set(
      pastPapers.map(
        (paper) => paper.paperType
      )
    )
  );
}

/*
|--------------------------------------------------------------------------
| FILTER PAPERS
|--------------------------------------------------------------------------
*/

export interface PaperFilters {
  grade?: string;
  phase?: string;
  subject?: string;
  language?: string;
  discipline?: string;
  year?: number;
  term?: string;
  paperType?: string;
}

export function filterPastPapers(
  filters: PaperFilters
): PastPaper[] {
  return pastPapers.filter((paper) => {

    if (
      filters.grade &&
      paper.grade !== filters.grade
    ) {
      return false;
    }

    if (
      filters.phase &&
      paper.phase !== filters.phase
    ) {
      return false;
    }

    if (
      filters.subject &&
      paper.subject !== filters.subject
    ) {
      return false;
    }

    if (
      filters.language &&
      paper.language !== filters.language
    ) {
      return false;
    }

    if (
      filters.discipline &&
      paper.discipline !== filters.discipline
    ) {
      return false;
    }

    if (
      filters.year &&
      paper.year !== filters.year
    ) {
      return false;
    }

    if (
      filters.term &&
      paper.term !== filters.term
    ) {
      return false;
    }

    if (
      filters.paperType &&
      paper.paperType !== filters.paperType
    ) {
      return false;
    }

    return true;
  });
}