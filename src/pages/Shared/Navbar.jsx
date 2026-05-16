// import React, { useContext } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../context/AuthContext/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         console.log("sign out user");
//       })
//       .catch((error) => {
//         console.error("Error signing out:", error.message);
//       });
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       {/* for applicant links. check roles as well */}
//       {user && (
//         <>
//           <li>
//             <NavLink to="/myApplications">My Applications</NavLink>
//           </li>
//         </>
//       )}

//       {/* for recruiter. check role as well. */}
//       {user && (
//         <>
//           <li>
//             <NavLink to="/addJob">Add Job</NavLink>
//           </li>
//           <li>
//             <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">careerCode</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <button onClick={handleSignOut} className="btn">
//             Sign Out
//           </button>
//         ) : (
//           <>
//             <NavLink to="/register" className="btn">
//               Register
//             </NavLink>
//             <NavLink to="/signin" className="btn">
//               SignIn
//             </NavLink>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useContext, useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../context/AuthContext/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => console.log("sign out user"))
//       .catch((error) => console.error("Error signing out:", error.message));
//   };

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const navLinkClass = ({ isActive }) =>
//     `text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
//       isActive
//         ? "text-indigo-400 bg-indigo-500/10"
//         : "text-slate-400 hover:text-white hover:bg-white/5"
//     }`;

//   const links = (
//     <>
//       <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
//       {user && (
//         <li><NavLink to="/myApplications" className={navLinkClass}>My Applications</NavLink></li>
//       )}
//       {user && (
//         <>
//           <li><NavLink to="/addJob" className={navLinkClass}>Add Job</NavLink></li>
//           <li><NavLink to="/myPostedJobs" className={navLinkClass}>My Posted Jobs</NavLink></li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/8">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

//         {/* Logo */}
//         <NavLink to="/" className="flex items-center gap-2">
//           <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//               <path d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//               <path d="M16 3H8L6 7h12l-2-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//           <span className="text-white font-bold text-lg tracking-tight">
//             career<span className="text-indigo-400">Code</span>
//           </span>
//         </NavLink>

//         {/* Desktop links */}
//         <ul className="hidden lg:flex items-center gap-1 list-none">
//           {links}
//         </ul>

//         {/* Auth — desktop */}
//         <div className="hidden lg:flex items-center gap-3">
//           {user ? (
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setProfileOpen((p) => !p)}
//                 className="flex items-center gap-2 px-2 py-1.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
//               >
//                 {user.photoURL ? (
//                   <img
//                     src={user.photoURL}
//                     alt="avatar"
//                     className="w-7 h-7 rounded-full object-cover border border-white/10"
//                   />
//                 ) : (
//                   <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
//                     {user.displayName?.[0]?.toUpperCase() || "U"}
//                   </div>
//                 )}
//                 <span className="text-sm text-slate-300 max-w-[120px] truncate">
//                   {user.displayName || "Account"}
//                 </span>
//                 <svg className={`w-4 h-4 text-slate-500 transition-transform ${profileOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-1 z-50">
//                   {/* Profile info */}
//                   <div className="px-4 py-3 border-b border-white/8">
//                     <div className="flex items-center gap-3">
//                       {user.photoURL ? (
//                         <img src={user.photoURL} alt="avatar" className="w-10 h-10 rounded-full object-cover border border-white/10 flex-shrink-0" />
//                       ) : (
//                         <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
//                           {user.displayName?.[0]?.toUpperCase() || "U"}
//                         </div>
//                       )}
//                       <div className="min-w-0">
//                         <p className="text-white font-semibold text-sm truncate">
//                           {user.displayName || "User"}
//                         </p>
//                         <p className="text-slate-500 text-xs truncate">{user.email}</p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Sign out */}
//                   <button
//                     onClick={() => { handleSignOut(); setProfileOpen(false); }}
//                     className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors mt-1"
//                   >
//                     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
//                     </svg>
//                     Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <NavLink to="/signin" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
//                 Sign In
//               </NavLink>
//               <NavLink to="/register" className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors">
//                 Register
//               </NavLink>
//             </>
//           )}
//         </div>

//         {/* Mobile hamburger */}
//         <div className="dropdown lg:hidden">
//           <div tabIndex={0} role="button" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-slate-900 border border-white/10 rounded-xl z-50 mt-3 w-60 p-2 shadow-xl right-0 list-none">
//             {/* Mobile profile info when logged in */}
//             {user && (
//               <li className="mb-1">
//                 <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
//                   {user.photoURL ? (
//                     <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full object-cover border border-white/10 flex-shrink-0" />
//                   ) : (
//                     <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
//                       {user.displayName?.[0]?.toUpperCase() || "U"}
//                     </div>
//                   )}
//                   <div className="min-w-0">
//                     <p className="text-white text-sm font-semibold truncate">{user.displayName || "User"}</p>
//                     <p className="text-slate-500 text-xs truncate">{user.email}</p>
//                   </div>
//                 </div>
//               </li>
//             )}
//             {links}
//             <div className="border-t border-white/10 mt-2 pt-2 flex flex-col gap-1">
//               {user ? (
//                 <button
//                   onClick={handleSignOut}
//                   className="text-sm text-rose-400 px-3 py-2 rounded-lg hover:bg-rose-500/10 text-left transition-colors"
//                 >
//                   Sign Out
//                 </button>
//               ) : (
//                 <>
//                   <NavLink to="/signin" className="text-sm text-slate-300 px-3 py-2 rounded-lg hover:bg-white/5">Sign In</NavLink>
//                   <NavLink to="/register" className="text-sm font-semibold text-white bg-indigo-600 px-3 py-2 rounded-lg text-center">Register</NavLink>
//                 </>
//               )}
//             </div>
//           </ul>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("sign out user"))
      .catch((error) => console.error("Error signing out:", error.message));
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
      isActive
        ? "text-indigo-400 bg-indigo-500/10"
        : "text-slate-400 hover:text-white hover:bg-white/5"
    }`;

  const links = (
    <>
      <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
      {user && (
        <li><NavLink to="/myApplications" className={navLinkClass}>My Applications</NavLink></li>
      )}
      {user && (
        <>
          <li><NavLink to="/addJob" className={navLinkClass}>Add Job</NavLink></li>
          <li><NavLink to="/myPostedJobs" className={navLinkClass}>My Posted Jobs</NavLink></li>
        </>
      )}
    </>
  );

  // ── Theme toggle button (reused in desktop + mobile) ──
  const ThemeToggle = () => (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="w-9 h-9 rounded-xl border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors hover:bg-white/5 flex-shrink-0"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          // Sun icon — switch to light
          <motion.svg
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            className="w-4 h-4 text-amber-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </motion.svg>
        ) : (
          // Moon icon — switch to dark
          <motion.svg
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            className="w-4 h-4 text-indigo-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 3H8L6 7h12l-2-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            career<span className="text-indigo-400">Code</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {links}
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen((p) => !p)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="avatar" className="w-7 h-7 rounded-full object-cover border border-white/10" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {user.displayName?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
                <span className="text-sm text-slate-300 max-w-[120px] truncate">
                  {user.displayName || "Account"}
                </span>
                <svg className={`w-4 h-4 text-slate-500 transition-transform ${profileOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-1 z-50">
                  <div className="px-4 py-3 border-b border-white/8">
                    <div className="flex items-center gap-3">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="avatar" className="w-10 h-10 rounded-full object-cover border border-white/10 flex-shrink-0" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                          {user.displayName?.[0]?.toUpperCase() || "U"}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-sm truncate">{user.displayName || "User"}</p>
                        <p className="text-slate-500 text-xs truncate">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => { handleSignOut(); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors mt-1"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/signin" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Sign In
              </NavLink>
              <NavLink to="/register" className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors">
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile right side */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Theme toggle on mobile too */}
          <ThemeToggle />

          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-slate-900 border border-white/10 rounded-xl z-50 mt-3 w-60 p-2 shadow-xl right-0 list-none">
              {user && (
                <li className="mb-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full object-cover border border-white/10 flex-shrink-0" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {user.displayName?.[0]?.toUpperCase() || "U"}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{user.displayName || "User"}</p>
                      <p className="text-slate-500 text-xs truncate">{user.email}</p>
                    </div>
                  </div>
                </li>
              )}
              {links}
              <div className="border-t border-white/10 mt-2 pt-2 flex flex-col gap-1">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="text-sm text-rose-400 px-3 py-2 rounded-lg hover:bg-rose-500/10 text-left transition-colors"
                  >
                    Sign Out
                  </button>
                ) : (
                  <>
                    <NavLink to="/signin" className="text-sm text-slate-300 px-3 py-2 rounded-lg hover:bg-white/5">Sign In</NavLink>
                    <NavLink to="/register" className="text-sm font-semibold text-white bg-indigo-600 px-3 py-2 rounded-lg text-center">Register</NavLink>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;