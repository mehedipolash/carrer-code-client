// import React, { use } from "react";
// import JobsCard from "../Shared/JobsCard";

// const HotJobs = ({ jobsPromise }) => {
//   const jobs = use(jobsPromise);

//   return (
//     <div>
//         <h2 className="text-4xl font-bold mb-4 text-center">Hot Jobs of the Day</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {jobs.map((job) => <JobsCard key ={job._id} job ={job}>
            
//         </JobsCard>)}
//       </div>
//     </div>
//   );
// };

// export default HotJobs;

import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <section id="hot-jobs" className="bg-slate-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-4">
            Trending Now
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Hot Jobs of the Day
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            Top remote opportunities handpicked from leading companies — apply before they're gone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <JobsCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotJobs;