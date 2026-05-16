// import React from "react";

// const ApplicationsStats = () => {
//   return (
//     <div className="stats shadow">
//       <div className="stat">
//         <div className="stat-figure text-primary">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="inline-block h-8 w-8 stroke-current"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//             ></path>
//           </svg>
//         </div>
//         <div className="stat-title">Total Likes</div>
//         <div className="stat-value text-primary">25.6K</div>
//         <div className="stat-desc">21% more than last month</div>
//       </div>

//       <div className="stat">
//         <div className="stat-figure text-secondary">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="inline-block h-8 w-8 stroke-current"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M13 10V3L4 14h7v7l9-11h-7z"
//             ></path>
//           </svg>
//         </div>
//         <div className="stat-title">Page Views</div>
//         <div className="stat-value text-secondary">2.6M</div>
//         <div className="stat-desc">21% more than last month</div>
//       </div>

//       <div className="stat">
//         <div className="stat-figure text-secondary">
//           <div className="avatar avatar-online">
//             <div className="w-16 rounded-full">
//               <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
//             </div>
//           </div>
//         </div>
//         <div className="stat-value">86%</div>
//         <div className="stat-title">Tasks done</div>
//         <div className="stat-desc text-secondary">31 tasks remaining</div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationsStats;
import React from "react";
import { motion } from "motion/react";

const ApplicationsStats = ({ total, underReview, interviews, offers }) => {
  const stats = [
    {
      label: "Total Applied",
      value: total,
      desc: "Applications submitted",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
    },
    {
      label: "Under Review",
      value: underReview,
      desc: "Awaiting response",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      label: "Interviews",
      value: interviews,
      desc: "Scheduled",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      label: "Offers",
      value: offers,
      desc: offers > 0 ? "Congratulations! 🎉" : "Keep applying!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className={`bg-slate-900 border ${stat.border} rounded-2xl p-5 flex flex-col gap-3 cursor-default`}
        >
          <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
            {stat.icon}
          </div>
          <div>
            <motion.p
              className={`text-3xl font-black ${stat.color}`}
              key={stat.value}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            >
              {stat.value}
            </motion.p>
            <p className="text-white font-semibold text-sm mt-0.5">{stat.label}</p>
            <p className="text-slate-500 text-xs mt-0.5">{stat.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ApplicationsStats;