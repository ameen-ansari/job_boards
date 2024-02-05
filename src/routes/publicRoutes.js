import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "../container/SignUp";
import Login from "../container/Login";
import ForgetPassword from "../container/ForgetPassword";
import CheckEmail from "../container/CheckEmail/index";
import NewPassword from "../container/NewPassword";
import ResetSuccess from "../container/ResetSuccess";
import BookMark from "../container/BookMark";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/checkEmail" element={<CheckEmail />} />
        <Route path="/resetPassword" element={<NewPassword />} />
        <Route path="/resetSuccess" element={<ResetSuccess />} />
        <Route path="/bookMark" element={<BookMark />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
