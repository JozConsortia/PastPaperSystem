import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// =====================================
// MAIN PAGES
// =====================================

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// =====================================
// PRIMARY SCHOOL
// =====================================

import PrimarySchool from "./pages/PrimarySchool";
import PrimaryPhases from "./pages/PrimaryPhases";

// =====================================
// FOUNDATION PHASE
// GRADES R - 3
// =====================================

import FoundationPhase from "./pages/FoundationPhase";
import Grade from "./pages/Grade";
import LanguageSelection from "./pages/LanguageSelection";

// =====================================
// INTERMEDIATE PHASE
// GRADES 4 - 6
// =====================================

import IntermediatePhase from "./pages/IntermediatePhase";
import IntermediateGrade from "./pages/IntermediateGrade";
import IntermediateLanguageSelection from "./pages/IntermediateLanguageSelection";

// =====================================
// SENIOR PHASE
// GRADES 7 - 9
// =====================================

import SeniorPhase from "./pages/SeniorPhase";
import SeniorGrade from "./pages/SeniorGrade";
import SeniorLanguageSelection from "./pages/SeniorLanguageSelection";
import CreativeArtsSelection from "./pages/CreativeArtsSelection";

// =====================================
// HIGH SCHOOL
// FET PHASE
// GRADES 10 - 12
// =====================================

import HighSchool from "./pages/HighSchool";
import FETPhase from "./pages/FETPhase";
import FETGrade from "./pages/FETGrade";
import FETSubjects from "./pages/FETSubjects";
import FETSubjectPapers from "./pages/FETSubjectPapers";

// =====================================
// TVET COLLEGE
// =====================================

import TVETCollege from "./pages/TVETCollege";
import NCV from "./pages/NCV";
import NATED from "./pages/NATED";
import Occupational from "./pages/Occupational";

// =====================================
// PAPERS
// =====================================

import SubjectPapers from "./pages/SubjectPapers";
import PaperViewer from "./pages/PaperViewer";

// =====================================
// USER
// =====================================

import Dashboard from "./pages/Dashboard";
import UploadPaper from "./pages/UploadPaper";

// =====================================
// ERROR
// =====================================

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================
            HOME
        ====================================== */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* =====================================
            AUTHENTICATION
        ====================================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* =====================================
            PRIMARY SCHOOL
        ====================================== */}

        <Route
          path="/primary"
          element={<PrimarySchool />}
        />

        <Route
          path="/primary/phases"
          element={<PrimaryPhases />}
        />

        {/* =====================================
            FOUNDATION PHASE
            GRADES R - 3
        ====================================== */}

        <Route
          path="/primary/phases/foundation"
          element={<FoundationPhase />}
        />

        {/* FOUNDATION GRADES */}

        <Route
          path="/primary/phases/foundation/grade/:gradeNumber"
          element={<Grade />}
        />

        {/* FOUNDATION LANGUAGE SELECTION */}

        <Route
          path="/primary/phases/foundation/grade/:gradeNumber/language/:subjectId"
          element={<LanguageSelection />}
        />

        {/* FOUNDATION SUBJECT PAPERS */}

        <Route
          path="/primary/phases/foundation/grade/:gradeNumber/:subjectId"
          element={<SubjectPapers />}
        />

        {/* FOUNDATION LANGUAGE PAPERS */}

        <Route
          path="/primary/phases/foundation/grade/:gradeNumber/:subjectId/:language"
          element={<SubjectPapers />}
        />

        {/* =====================================
            INTERMEDIATE PHASE
            GRADES 4 - 6
        ====================================== */}

        <Route
          path="/primary/phases/intermediate"
          element={<IntermediatePhase />}
        />

        {/* INTERMEDIATE GRADES */}

        <Route
          path="/primary/phases/intermediate/grade/:gradeNumber"
          element={<IntermediateGrade />}
        />

        {/* INTERMEDIATE LANGUAGE SELECTION */}

        <Route
          path="/primary/phases/intermediate/grade/:gradeNumber/language/:subjectId"
          element={<IntermediateLanguageSelection />}
        />

        {/* INTERMEDIATE SUBJECT PAPERS */}

        <Route
          path="/primary/phases/intermediate/grade/:gradeNumber/:subjectId"
          element={<SubjectPapers />}
        />

        {/* INTERMEDIATE LANGUAGE PAPERS */}

        <Route
          path="/primary/phases/intermediate/grade/:gradeNumber/:subjectId/:language"
          element={<SubjectPapers />}
        />

        {/* =====================================
            SENIOR PHASE
            GRADES 7 - 9
        ====================================== */}

        <Route
          path="/primary/phases/senior"
          element={<SeniorPhase />}
        />

        {/* SENIOR GRADES */}

        <Route
          path="/primary/phases/senior/grade/:gradeNumber"
          element={<SeniorGrade />}
        />

        {/* SENIOR LANGUAGE SELECTION */}

        <Route
          path="/primary/phases/senior/grade/:gradeNumber/language/:subjectId"
          element={<SeniorLanguageSelection />}
        />

        {/* SENIOR CREATIVE ARTS */}

        <Route
          path="/primary/phases/senior/grade/:gradeNumber/creative-arts"
          element={<CreativeArtsSelection />}
        />

        {/* SENIOR SUBJECT PAPERS */}

        <Route
          path="/primary/phases/senior/grade/:gradeNumber/:subjectId"
          element={<SubjectPapers />}
        />

        {/* SENIOR LANGUAGE PAPERS */}

        <Route
          path="/primary/phases/senior/grade/:gradeNumber/:subjectId/:language"
          element={<SubjectPapers />}
        />

        {/* SENIOR CREATIVE ARTS PAPERS */}

        <Route
          path="/primary/phases/senior/grade/:gradeNumber/creative-arts/:discipline"
          element={<SubjectPapers />}
        />

        {/* =====================================
            HIGH SCHOOL
            FET PHASE
            GRADES 10 - 12
        ====================================== */}

        {/* HIGH SCHOOL LANDING */}

        <Route
          path="/high-school"
          element={<HighSchool />}
        />

        {/* FET PHASE */}

        <Route
          path="/high-school/fet"
          element={<FETPhase />}
        />

        {/* FET GRADES */}

        <Route
          path="/high-school/fet/grade/:gradeNumber"
          element={<FETGrade />}
        />

        {/* FET SUBJECT SELECTION */}

        <Route
          path="/high-school/fet/grade/:gradeNumber/subjects"
          element={<FETSubjects />}
        />

        {/* FET SUBJECT PAPERS */}

        <Route
          path="/high-school/fet/grade/:gradeNumber/:subjectId"
          element={<FETSubjectPapers />}
        />

        {/* =====================================
            TVET COLLEGE
        ====================================== */}

        {/* TVET LANDING */}

        <Route
          path="/tvet"
          element={<TVETCollege />}
        />

        {/* NC(V) */}

        <Route
          path="/tvet/ncv"
          element={<NCV />}
        />

        {/* NC(V) LEVELS */}

        <Route
          path="/tvet/ncv/level/:level"
          element={<NCV />}
        />

        {/* NATED / REPORT 191 */}

        <Route
          path="/tvet/nated"
          element={<NATED />}
        />

        {/* NATED PROGRAMME TYPES */}

        <Route
          path="/tvet/nated/:programmeType"
          element={<NATED />}
        />

        {/* OCCUPATIONAL PROGRAMMES */}

        <Route
          path="/tvet/occupational"
          element={<Occupational />}
        />

        {/* OCCUPATIONAL CATEGORIES */}

        <Route
          path="/tvet/occupational/:category"
          element={<Occupational />}
        />

        {/* =====================================
            PAPER VIEWER
        ====================================== */}

        <Route
          path="/paper/:paperId"
          element={<PaperViewer />}
        />

        {/* =====================================
            USER DASHBOARD
        ====================================== */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* =====================================
            UPLOAD PAPER
        ====================================== */}

        <Route
          path="/upload"
          element={<UploadPaper />}
        />

        {/* =====================================
            404 PAGE
        ====================================== */}

        <Route
          path="/404"
          element={<NotFound />}
        />

        {/* =====================================
            UNKNOWN ROUTES
        ====================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/404"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;