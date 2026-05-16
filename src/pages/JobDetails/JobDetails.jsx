// import React from "react";
// import { Link, useLoaderData } from "react-router";

// const JobDetails = () => {
//   const { title, company, description , _id} = useLoaderData();
//   return (
//     <div>
//       <h2 className="text-6xl">{title}</h2>
//       <p>Company: {company}</p>
//       <p>Description: {description}</p>
//       <Link to={`/jobApply/${_id}/`}>
//         <button className="btn btn-primary">Apply Now</button>
//       </Link>
//     </div>
//   );
// };

// export default JobDetails;
import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "motion/react";

const JobDetails = () => {
  const { title, company, description, location, category, salaryRange, requirements, applicationDeadline, company_logo, _id } = useLoaderData();

  return (
    <section className="bg-slate-950 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 border border-white/8 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/8">
            <div className="flex items-start gap-5">
              {company_logo && (
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-slate-800 flex-shrink-0">
                  <img src={company_logo} alt={company} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {category && (
                    <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2.5 py-1">
                      {category}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-black text-white">{title}</h1>
                <p className="text-slate-400 mt-1 text-sm">{company}{location ? ` · ${location}` : ""}</p>
                {salaryRange && (
                  <p className="text-indigo-400 font-semibold text-sm mt-1">
                    {salaryRange.min}–{salaryRange.max} <span className="uppercase">{salaryRange.currency}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 space-y-6">
            {description && (
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">Description</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
              </div>
            )}

            {requirements?.length > 0 && (
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">Requirements</h3>
                <div className="flex flex-wrap gap-2">
                  {requirements.map((req, i) => (
                    <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 border border-white/8 rounded-lg px-2.5 py-1">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {applicationDeadline && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Application deadline: <span className="text-slate-300">{applicationDeadline}</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="px-8 pb-8">
            <Link to={`/jobApply/${_id}/`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/20"
              >
                Apply Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobDetails;