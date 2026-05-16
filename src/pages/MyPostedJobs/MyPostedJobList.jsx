// import React, { use } from "react";
// import { Link } from "react-router";

// const MyPostedJobList = ({ jobsCreatedByPromise }) => {
//   const jobs = use(jobsCreatedByPromise);
//   return (
//     <div>
//       <h2 className="text-4xl">jobs created by you: {jobs.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Job Title</th>
//               <th>Deadline</th>
//               <th>Count</th>
//               <th>View Applications</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* rows */}
//             {jobs.map((job, index) => (
//               <tr key={job._id}>
//                 <th>{index + 1}</th>
//                 <td>{job.title}</td>
//                 <td>{job.deadline}</td>
//                 <td>{job.application_count}</td>
//                 <td>
//                   <Link to={`/applications/${job._id}`}>View Applications</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyPostedJobList;
import React, { use } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const MyPostedJobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900 border border-white/8 rounded-2xl overflow-hidden"
    >
      <div className="px-6 py-5 border-b border-white/8 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-xl">Posted Jobs</h3>
          <p className="text-slate-500 text-sm mt-0.5">
            {jobs.length} {jobs.length === 1 ? "job" : "jobs"} published
          </p>
        </div>
        <motion.div
          key={jobs.length}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center"
        >
          <span className="text-indigo-400 font-black text-sm">{jobs.length}</span>
        </motion.div>
      </div>

      {jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 px-6 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/8 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-slate-600" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-white font-semibold text-lg">No jobs posted yet</p>
          <p className="text-slate-500 text-sm mt-1">Head to Add Job to publish your first listing.</p>
          <Link to="/addJob">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
            >
              Post a Job
            </motion.button>
          </Link>
        </motion.div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-3 pl-4 text-xs font-semibold text-slate-600 uppercase tracking-widest w-10">#</th>
                <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Job Title</th>
                <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Deadline</th>
                <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Applicants</th>
                <th className="text-left py-3 pr-4 text-xs font-semibold text-slate-600 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {jobs.map((job, index) => (
                  <motion.tr
                    key={job._id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/3 transition-colors"
                  >
                    <td className="py-4 pl-4">
                      <span className="text-slate-600 text-sm font-mono">{String(index + 1).padStart(2, "0")}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-white font-semibold text-sm">{job.title}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-slate-400 text-sm">{job.deadline}</span>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2.5 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-3 h-3" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.application_count ?? 0}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <Link to={`/applications/${job._id}`}>
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                        >
                          View Applications
                        </motion.button>
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default MyPostedJobList;