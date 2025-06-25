import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import Layout from "@app/layouts/Layout";
import SettingLayout from "@app/settings/layout/Layout";
import DirectMessages from "@app/sidebar/DirectMessages";
import Friends from "@app/sidebar/Friends";
import Groups from "@app/sidebar/Groups";
import Channel from "@/components/app/sidebar/Workspace";
import MyAccount from "@app/settings/pages/MyAccount";
import Profile from "@/components/app/settings/pages/Profile";
import Appearance from "@/components/app/settings/pages/Appearance";
import Languages from "@/components/app/settings/pages/Languages";
import Notifications from "@/components/app/settings/pages/Notifications";

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
            <Route path="channel/:id" element={<Channel />} />
          </Route>
          <Route path="/app/settings" element={<SettingLayout />}>
            <Route path="account" element={<MyAccount />} />
            <Route path="profile" element={<Profile />} />
            <Route path="appearance" element={<Appearance />} />
            <Route path="languages" element={<Languages />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
