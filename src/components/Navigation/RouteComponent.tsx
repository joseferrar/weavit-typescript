import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import DrawerLayout from "../Layouts/DrawerLayout"
function RouteComponent() {
  return (
    <div>
      <Routes>
      <Route element={<DrawerLayout />}>
        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteComponent;
