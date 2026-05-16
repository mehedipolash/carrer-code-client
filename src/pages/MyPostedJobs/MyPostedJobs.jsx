// import React, { Suspense } from "react";
// import UseAuth from "../../hooks/UseAuth";
// import MyPostedJobList from "./MyPostedJobList";
// import { jobsCreatedByPromise } from "../../api/jobsApi";

// const MyPostedJobs = () => {
//   const { user } = UseAuth();

//   return (
//     <div>
//       <h2>My Posted Jobs:</h2>

//       <Suspense
//         fallback={<span className="loading loading-bars loading-lg"></span>}
//       >
//         <MyPostedJobList
//           jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
//         />
//       </Suspense>
//     </div>
//   );
// };

// export default MyPostedJobs;

import React, { Suspense } from "react";
import { motion } from "motion/react";
import UseAuth from "../../hooks/UseAuth";
import MyPostedJobList from "./MyPostedJobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const LoadingSkeleton = () => (
  <div className="bg-slate-900 border border-white/8 rounded-2xl overflow-hidden animate-pulse">
    <div className="px-6 py-5 border-b border-white/8">
      <div className="h-5 w-48 bg-slate-800 rounded-lg" />
      <div className="h-3 w-28 bg-slate-800 rounded-lg mt-2" />
    </div>
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="flex items-center gap-4 px-6 py-4 border-b border-white/5"
      >
        <div className="w-6 h-4 bg-slate-800 rounded" />
        <div className="flex-1 h-4 bg-slate-800 rounded-lg" />
        <div className="w-24 h-4 bg-slate-800 rounded-lg" />
        <div className="w-10 h-4 bg-slate-800 rounded-lg" />
        <div className="w-28 h-7 bg-slate-800 rounded-lg" />
      </div>
    ))}
  </div>
);

const MyPostedJobs = () => {
  const { user } = UseAuth();

  return (
    <section className="bg-slate-950 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-3">
            Recruiter
          </span>
          <h1 className="text-4xl font-black text-white">My Posted Jobs</h1>
          <p className="text-slate-500 mt-2">
            Manage all job listings you've published.
          </p>
        </motion.div>

        <Suspense fallback={<LoadingSkeleton />}>
          <MyPostedJobList
            jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default MyPostedJobs;
