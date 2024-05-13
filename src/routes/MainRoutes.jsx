import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SelectionPage from "../pages/Selection/SelectionPage";
import FamilyForm from "../pages/forms/Family/FamilyForm";
import HomePage from "../pages/Home/Home";
import SchoolForm from "../pages/forms/School/SchoolForm";
import SocialForm from "../pages/forms/Social/SocialForm";
// import { Reports } from "../pages/Reports";
import Reports from "../pages/Reports";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selection" element={<SelectionPage /> }/>
        <Route path="/FamilyQuiz" element={<FamilyForm /> }/>
        <Route path="/SchoolQuiz" element={<SchoolForm /> }/>
        <Route path="/SocialQuiz" element={<SocialForm /> }/>
        <Route path="/" element={<HomePage /> }/>
        <Route path="/Reports" element={<Reports /> }/>
      </Routes>
    </BrowserRouter>
  );
}
