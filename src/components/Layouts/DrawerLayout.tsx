import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout";

const DrawerLayout = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default DrawerLayout;
