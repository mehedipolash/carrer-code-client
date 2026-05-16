// import React, { use, useState } from "react";
// import JobApplicationsRow from "./JobApplicationsRow";

// const ApplicationList = ({ MyApplicationsPromise }) => {
//   const initialApplications = use(MyApplicationsPromise);

//   const [applications, setApplications] = useState(initialApplications);

//   const handleDelete = (id) => {
//     fetch(`https://career-code-server-blond.vercel.app/applications/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount) {
//           const remainingApplications = applications.filter(
//             (application) => application._id !== id
//           );

//           setApplications(remainingApplications);
//         }
//       });
//   };

//   return (
//     <div>
//       <h3 className="text-3xl">
//         Job Applied so far: {applications.length}
//       </h3>

//       <div className="overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Job</th>
//               <th>Delete</th>
//             </tr>
//           </thead>

//           <tbody>
//             {applications.map((application, index) => (
//               <JobApplicationsRow
//                 key={application._id}
//                 index={index}
//                 application={application}
//                 handleDelete={handleDelete}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ApplicationList;

// ApplicationList.jsx – fully responsive (cards on mobile, table on desktop)
import React, { use, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import JobApplicationsRow from "./JobApplicationsRow";

const ApplicationList = ({ MyApplicationsPromise, onStatsChange }) => {
  const initialApplications = use(MyApplicationsPromise);
  const [applications, setApplications] = useState(initialApplications);

  // Compute stats synchronously
  const total = applications.length;
  const underReview = applications.filter(
    (a) => !a.status || a.status === "pending" || a.status === "under_review"
  ).length;
  const interviews = applications.filter(
    (a) => a.status === "interview" || a.status === "shortlisted"
  ).length;
  const offers = applications.filter(
    (a) => a.status === "hired" || a.status === "offer"
  ).length;

  // Pass stats up on every render
  onStatsChange?.({ total, underReview, interviews, offers });

  const handleDelete = (id) => {
    fetch(`https://career-code-server-blond.vercel.app/applications/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setApplications((prev) => prev.filter((a) => a._id !== id));
        }
      });
  };

  // Helper to get status badge style & label
  const getStatusBadge = (status) => {
    const normalized = (status || "pending").toLowerCase();
    if (normalized === "under_review" || normalized === "pending")
      return { label: "Under Review", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" };
    if (normalized === "interview" || normalized === "shortlisted")
      return { label: "Interview", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" };
    if (normalized === "hired" || normalized === "offer")
      return { label: "Offer", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" };
    return { label: status || "Pending", color: "bg-slate-700/50 text-slate-300 border-white/10" };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-slate-900 border border-white/8 rounded-2xl overflow-hidden"
    >
      <div className="px-6 py-5 border-b border-white/8 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="text-white font-bold text-xl">My Applications</h3>
          <p className="text-slate-500 text-sm mt-0.5">
            {applications.length} {applications.length === 1 ? "job" : "jobs"} applied
          </p>
        </div>
        <motion.div
          key={applications.length}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center"
        >
          <span className="text-indigo-400 font-black text-sm">{applications.length}</span>
        </motion.div>
      </div>

      {applications.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 px-6 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/8 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-slate-600" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-white font-semibold text-lg">No applications yet</p>
          <p className="text-slate-500 text-sm mt-1">Start applying to jobs and track them here.</p>
        </motion.div>
      ) : (
        <>
          {/* ------------------------- DESKTOP TABLE ------------------------- */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-3 pl-4 text-xs font-semibold text-slate-600 uppercase tracking-widest w-10">#</th>
                  <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Company</th>
                  <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Position</th>
                  <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Status</th>
                  <th className="text-left py-3 pr-4 text-xs font-semibold text-slate-600 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {applications.map((application, index) => (
                    <JobApplicationsRow
                      key={application._id}
                      index={index}
                      application={application}
                      handleDelete={handleDelete}
                    />
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* ------------------------- MOBILE CARD VIEW ------------------------- */}
          <div className="block md:hidden divide-y divide-white/8">
            <AnimatePresence>
              {applications.map((application, idx) => {
                const statusInfo = getStatusBadge(application.status);
                return (
                  <motion.div
                    key={application._id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-semibold">{application.jobId?.title || "Position not specified"}</p>
                        <p className="text-slate-400 text-sm">{application.jobId?.company || "Unknown company"}</p>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-slate-500 text-xs">Applied: {new Date(application.appliedAt).toLocaleDateString()}</span>
                      <button
                        onClick={() => handleDelete(application._id)}
                        className="text-rose-400 hover:text-rose-300 transition-colors text-sm font-medium flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ApplicationList;