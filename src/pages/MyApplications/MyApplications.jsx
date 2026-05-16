// import React, { Suspense } from "react";
// import ApplicationsStats from "./ApplicationsStats";
// import ApplicationList from "./ApplicationList";
// import UseAuth from "../../hooks/UseAuth";
// import { MyApplicationsPromise } from "../../api/applicationsApi";

// const MyApplications = () => {
//   const { user } = UseAuth();

//   return (
//     <div>
//       <ApplicationsStats />

//       <Suspense
//         fallback={<span className="loading loading-bars loading-lg"></span>}
//       >
//         <ApplicationList
//           MyApplicationsPromise={MyApplicationsPromise(user.email)}
//         />
//       </Suspense>
//     </div>
//   );
// };

// export default MyApplications;
import React, { Suspense, useState } from "react";
import { motion } from "motion/react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../hooks/UseAuth";
import { MyApplicationsPromise } from "../../api/applicationsApi";

const LoadingSkeleton = () => (
  <div className="space-y-6">
    {/* Stats skeleton */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-slate-900 border border-white/8 rounded-2xl p-5 animate-pulse">
          <div className="w-10 h-10 bg-slate-800 rounded-xl mb-3" />
          <div className="h-8 w-12 bg-slate-800 rounded-lg mb-2" />
          <div className="h-3 w-24 bg-slate-800 rounded-lg" />
          <div className="h-3 w-16 bg-slate-800 rounded-lg mt-1" />
        </div>
      ))}
    </div>
    {/* Table skeleton */}
    <div className="bg-slate-900 border border-white/8 rounded-2xl overflow-hidden animate-pulse">
      <div className="px-6 py-5 border-b border-white/8">
        <div className="h-5 w-40 bg-slate-800 rounded-lg" />
        <div className="h-3 w-24 bg-slate-800 rounded-lg mt-2" />
      </div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-white/5">
          <div className="w-6 h-4 bg-slate-800 rounded" />
          <div className="w-10 h-10 bg-slate-800 rounded-xl" />
          <div className="flex-1 h-4 bg-slate-800 rounded-lg" />
          <div className="w-24 h-4 bg-slate-800 rounded-lg" />
          <div className="w-16 h-7 bg-slate-800 rounded-lg" />
        </div>
      ))}
    </div>
  </div>
);

// This inner component sits inside Suspense so it only renders after data resolves
const ApplicationsContent = ({ promise }) => {
  const [stats, setStats] = useState({ total: 0, underReview: 0, interviews: 0, offers: 0 });

  return (
    <>
      <ApplicationsStats
        total={stats.total}
        underReview={stats.underReview}
        interviews={stats.interviews}
        offers={stats.offers}
      />
      <ApplicationList
        MyApplicationsPromise={promise}
        onStatsChange={setStats}
      />
    </>
  );
};

const MyApplications = () => {
  const { user } = UseAuth();
  const promise = MyApplicationsPromise(user.email);

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
            Dashboard
          </span>
          <h1 className="text-4xl font-black text-white">My Applications</h1>
          <p className="text-slate-500 mt-2">
            Track and manage all your job applications in one place.
          </p>
        </motion.div>

        <Suspense fallback={<LoadingSkeleton />}>
          <ApplicationsContent promise={promise} />
        </Suspense>
      </div>
    </section>
  );
};

export default MyApplications;