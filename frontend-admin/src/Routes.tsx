import React, { useContext } from "react";
import { Routes as Router, Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./components/contexts/AuthContext";

import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

const Routes = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Router>
      <Route path="meest-admin/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="meest-admin/dashboard" element={<Dashboard />} />
      </Route>
      {/* <Route path="/meest-admin*" element={<Navigate to={`/meest-admin/login`} />} /> */}
    </Router>
  );
};

export default Routes;
