import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../container/Dashboard";
import ViewJobPage from "../container/Dashboard/ViewJobPage";
import BookmarkPage from "../container/Dashboard/BookmarkPage";
import UploadCertification from "../container/UploadCertifications";
import Profile from "../container/Profile";

export default function ProtectedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/job/:title" element={<ViewJobPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/uploadCertification" element={<UploadCertification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Dashboard />} />
        <Route
          path="/"
          element={<Navigate to="/uploadCertification" replace />}
        />
        <Route
          path="*"
          element={<Navigate to="/uploadCertification" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
