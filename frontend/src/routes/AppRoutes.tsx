import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import Layout from "@/components/app/layouts/Layout";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
