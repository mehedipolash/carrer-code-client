// import axios from "axios";
// import React from "react";
// import { useLoaderData, useParams } from "react-router";
// import Swal from "sweetalert2";

// const ViewApplications = () => {
//   const { job_id } = useParams();
//   const applications = useLoaderData();

//   const handleStatusChange = (e, app_id) => {
//     console.log(e.target.value, app_id);
//     axios
//       .patch(`https://career-code-server-blond.vercel.app/applications/${app_id}`, {
//         status: e.target.value,
//       })
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.modifiedCount)
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Application status updated",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <div>
//       <h2 className="text-4xl">
//         {" "}
//         {applications.length}Applications for: {job_id}
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Job</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {applications.map((application) => (
//               <tr key={application._id}>
//                 <th>1</th>
//                 <td>{application.applicantEmail}</td>
//                 <td>Quality Control Specialist</td>
//                 <td>
//                   <select
//                     onChange={(e) => handleStatusChange(e, application._id)}
//                     defaultValue={application.status}
//                     className="select"
//                   >
//                     <option disabled>Update Status</option>
//                     <option>Pending</option>
//                     <option>Interview</option>
//                     <option>Hired</option>
//                     <option>Rejected</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewApplications;


import React from "react";
import { useLoaderData, useParams } from "react-router";
import { motion } from "motion/react";
import axios from "axios";
import Swal from "sweetalert2";

const statusConfig = {
  Pending:   { color: "text-amber-400",  bg: "bg-amber-400/10",  border: "border-amber-400/20"  },
  Interview: { color: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/20"   },
  Hired:     { color: "text-emerald-400",bg: "bg-emerald-400/10",border: "border-emerald-400/20" },
  Rejected:  { color: "text-rose-400",   bg: "bg-rose-400/10",   border: "border-rose-400/20"   },
};

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    axios
      .patch(`https://career-code-server-blond.vercel.app/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status updated",
            showConfirmButton: false,
            timer: 1500,
            background: "#0f172a",
            color: "#f1f5f9",
          });
      })
      .catch((err) => console.log(err));
  };

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
          <h1 className="text-4xl font-black text-white">Applications</h1>
          <p className="text-slate-500 mt-2">
            {applications.length} {applications.length === 1 ? "applicant" : "applicants"} for this position
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-slate-900 border border-white/8 rounded-2xl overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-white/8 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-xl">Applicant List</h3>
              <p className="text-slate-500 text-sm mt-0.5 font-mono text-xs">{job_id}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <span className="text-indigo-400 font-black text-sm">{applications.length}</span>
            </div>
          </div>

          {applications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/8 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-slate-600" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">No applicants yet</p>
              <p className="text-slate-500 text-sm mt-1">Applications will appear here once candidates apply.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left py-3 pl-4 text-xs font-semibold text-slate-600 uppercase tracking-widest w-10">#</th>
                    <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Applicant Email</th>
                    <th className="text-left py-3 text-xs font-semibold text-slate-600 uppercase tracking-widest">Current Status</th>
                    <th className="text-left py-3 pr-4 text-xs font-semibold text-slate-600 uppercase tracking-widest">Update Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application, index) => {
                    const cfg = statusConfig[application.status] || statusConfig["Pending"];
                    return (
                      <motion.tr
                        key={application._id}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-white/3 transition-colors"
                      >
                        <td className="py-4 pl-4">
                          <span className="text-slate-600 text-sm font-mono">{String(index + 1).padStart(2, "0")}</span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-indigo-300 text-xs font-bold uppercase">
                                {application.applicantEmail?.[0]}
                              </span>
                            </div>
                            <span className="text-slate-300 text-sm">{application.applicantEmail}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className={`text-xs font-semibold ${cfg.color} ${cfg.bg} border ${cfg.border} rounded-full px-2.5 py-1`}>
                            {application.status || "Pending"}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <select
                            onChange={(e) => handleStatusChange(e, application._id)}
                            defaultValue={application.status || "Pending"}
                            className="text-sm bg-slate-800 border border-white/10 text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500/50 transition-colors cursor-pointer"
                          >
                            <option disabled>Update Status</option>
                            <option>Pending</option>
                            <option>Interview</option>
                            <option>Hired</option>
                            <option>Rejected</option>
                          </select>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ViewApplications;