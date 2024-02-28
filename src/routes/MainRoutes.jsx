import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SelectionPage from "../pages/Selection/SelectionPage";
import FamilyForm from "../pages/forms/Family/FamilyForm";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectionPage /> }/>
        <Route path="/FamilyQuiz" element={<FamilyForm /> }/>
      </Routes>
    </BrowserRouter>
  );
}
