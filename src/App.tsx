import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrimarySchool from "./pages/PrimarySchool";
import FoundationPhase from "./pages/FoundationPhase";
import Grade from "./pages/Grade";
import SubjectPapers from "./pages/SubjectPapers";
import PaperViewer from "./pages/PaperViewer";
import UploadPaper from "./pages/UploadPaper";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Primary School */}
        <Route path="/primary" element={<PrimarySchool />} />
        <Route
          path="/primary/foundation-phase"
          element={<FoundationPhase />}
        />

        <Route
          path="/primary/foundation-phase/grade/:gradeNumber"
          element={<Grade />}
        />

        <Route
          path="/primary/foundation-phase/grade/:gradeNumber/:subjectId"
          element={<SubjectPapers />}
        />

        {/* Papers */}
        <Route path="/paper/:paperId" element={<PaperViewer />} />

        {/* User */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadPaper />} />

        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;