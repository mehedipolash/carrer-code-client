// import React from "react";
// import Swal from "sweetalert2";

// const JobApplicationsRow = ({ application, index, handleDelete }) => {
//   const { company, title, company_logo, _id } = application;

//   const onDelete = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to recover this application!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         handleDelete(_id);

//         Swal.fire({
//           title: "Deleted!",
//           text: "Application has been deleted successfully.",
//           icon: "success",
//         });
//       }
//     });
//   };

//   return (
//     <tr>
//       <th>{index + 1}</th>

//       <td>
//         <div className="flex items-center gap-3">
//           <div className="avatar">
//             <div className="mask mask-squircle h-12 w-12">
//               <img src={company_logo} alt={company} />
//             </div>
//           </div>

//           <div>
//             <div className="font-bold">{company}</div>
//           </div>
//         </div>
//       </td>

//       <td>{title}</td>

//       <td>
//         <button onClick={onDelete} className="btn btn-error btn-sm">
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default JobApplicationsRow;
import React from "react";
import Swal from "sweetalert2";
import { motion } from "motion/react";

const JobApplicationsRow = ({ application, index, handleDelete }) => {
  const { company, title, company_logo, _id } = application;

  const onDelete = () => {
    Swal.fire({
      title: "Delete Application?",
      text: "You won't be able to recover this application!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#334155",
      confirmButtonText: "Yes, delete it!",
      background: "#0f172a",
      color: "#f1f5f9",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(_id);
        Swal.fire({
          title: "Deleted!",
          text: "Application removed successfully.",
          icon: "success",
          background: "#0f172a",
          color: "#f1f5f9",
          confirmButtonColor: "#6366f1",
        });
      }
    });
  };

  return (
    <motion.tr
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-white/5 hover:bg-white/3 transition-colors group"
    >
      {/* Index */}
      <td className="py-4 pl-4 w-10">
        <span className="text-slate-600 text-sm font-mono">{String(index + 1).padStart(2, "0")}</span>
      </td>

      {/* Company */}
      <td className="py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-slate-800 flex-shrink-0">
            <img src={company_logo} alt={company} className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-semibold text-sm">{company}</span>
        </div>
      </td>

      {/* Job Title */}
      <td className="py-4">
        <span className="text-slate-300 text-sm">{title}</span>
      </td>

      {/* Status badge — placeholder */}
      <td className="py-4">
        <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-2.5 py-1">
          Under Review
        </span>
      </td>

      {/* Delete */}
      <td className="py-4 pr-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDelete}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
          </svg>
          Delete
        </motion.button>
      </td>
    </motion.tr>
  );
};

export default JobApplicationsRow;