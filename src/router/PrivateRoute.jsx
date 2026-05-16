// import React, { use, useContext } from "react";
// import { AuthContext } from "../context/AuthContext/AuthContext";
// import { Navigate, useLocation } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();
//   // console.log(location);

//   if (loading) {
//     return <span className="loading loading-bars loading-lg"></span>;
//   }

//   if (!user) {
//     return <Navigate to="/signin" state={location.pathname} />;
//   }
//   return children;
// };

// export default PrivateRoute;
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import { motion } from "motion/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 rounded-full border-2 border-white/10 border-t-indigo-500"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;