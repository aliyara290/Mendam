import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import Layout from "@components/app/layouts/Layout";
import DirectMessages from "@components/app/sidebar/DirectMessages";
import Friends from "@/components/app/sidebar/Friends";
import Groups from "@/components/app/sidebar/Groups";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<Layout />}>
            <Route path="@me" element={<DirectMessages />} />
            <Route path="friends" element={<Friends />} />
            <Route path="groups" element={<Groups />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
