// import React from "react";
// import { Outlet } from "react-router";
// import Navbar from "../pages/Shared/Navbar";
// import Footer from "../pages/Shared/Footer";

// const RootLayout = () => {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default RootLayout;
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;