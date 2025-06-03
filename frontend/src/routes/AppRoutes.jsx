import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/home/HomePage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
