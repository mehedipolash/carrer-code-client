import React, { use, useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default PrivateRoutes;
