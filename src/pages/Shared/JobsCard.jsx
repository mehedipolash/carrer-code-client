//  import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { Link } from "react-router";

// const JobsCard = ({ job }) => {
//   const {
//     title,
//     company,
//     location,
//     category,
//     applicationDeadline,
//     description,
//     company_logo,
//     requirements,
//     salaryRange,
//     _id,
//   } = job;

//   return (
//     <div className="card bg-base-100 w-96 shadow-sm">
//       <div className="flex gap-4 items-center p-4">
//         <figure>
//           <img
//             src={company_logo}
//             alt={company}
//             className="w-16 h-16 rounded-full object-cover"
//           />
//         </figure>

//         <div>
//           <h3 className="text-2xl font-bold">{company}</h3>

//           <p className="flex items-center gap-2 text-gray-500">
//             <FaMapMarkerAlt />
//             {location}
//           </p>
//         </div>
//       </div>

//       <div className="card-body">
//         <h2 className="card-title flex justify-between items-center">
//           {title}
//           <div className="badge badge-secondary">NEW</div>
//         </h2>
//         <p>
//           Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
//         </p>
//         <p className="text-gray-500">{description}</p>

//         <div className="card-actions">
//           {requirements?.map((skill, index) => (
//             <div key={index} className="badge badge-outline">
//               {skill}
//             </div>
//           ))}
//         </div>

//         <div className="card-actions">
//           <Link to={`/jobs/${_id}`}>
//             <button className="btn btn-primary">View Details</button>
//           </Link>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <p className="font-semibold text-primary">{category}</p>

//           <p className="text-sm text-gray-500">
//             Deadline: {applicationDeadline}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobsCard;



import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    title, company, location, category,
    applicationDeadline, description,
    company_logo, requirements, salaryRange, _id,
  } = job;

  return (
    <div className="group bg-slate-900 border border-white/8 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col">
      {/* Card Header */}
      <div className="p-6 pb-4 flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-slate-800">
          <img
            src={company_logo}
            alt={company}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-base truncate">{company}</h3>
          <p className="flex items-center gap-1.5 text-slate-500 text-sm mt-0.5">
            <FaMapMarkerAlt className="text-indigo-400 flex-shrink-0" size={11} />
            {location}
          </p>
        </div>
        <span className="flex-shrink-0 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-1">
          NEW
        </span>
      </div>

      {/* Job Title */}
      <div className="px-6 pb-3">
        <h2 className="text-white font-bold text-lg leading-snug group-hover:text-indigo-300 transition-colors">
          {title}
        </h2>
        <p className="text-indigo-400 font-semibold text-sm mt-1">
          {salaryRange.min}–{salaryRange.max}{" "}
          <span className="uppercase text-xs">{salaryRange.currency}</span>
          <span className="text-slate-500 font-normal"> / yr</span>
        </p>
      </div>

      {/* Description */}
      <div className="px-6 pb-4">
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{description}</p>
      </div>

      {/* Skills */}
      <div className="px-6 pb-4 flex flex-wrap gap-2">
        {requirements?.slice(0, 4).map((skill, index) => (
          <span
            key={index}
            className="text-xs font-medium text-slate-300 bg-slate-800 border border-white/8 rounded-lg px-2.5 py-1"
          >
            {skill}
          </span>
        ))}
        {requirements?.length > 4 && (
          <span className="text-xs font-medium text-slate-500 bg-slate-800 border border-white/8 rounded-lg px-2.5 py-1">
            +{requirements.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto px-6 py-4 border-t border-white/8 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2.5 py-1">
            {category}
          </span>
          <p className="text-xs text-slate-600 mt-1.5 flex items-center gap-1">
            <FaClock size={10} />
            Deadline: {applicationDeadline}
          </p>
        </div>
        <Link to={`/jobs/${_id}`}>
          <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold shadow-lg shadow-indigo-500/20">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;