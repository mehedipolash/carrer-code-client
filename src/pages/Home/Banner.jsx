// import React from "react";
// import { motion } from "motion/react";
// import team1 from "../../assets/images/dev_team_celebrate.jpg";
// import team2 from "../../assets/images/team_celebrate.jpg";

// const Banner = () => {
//   return (
//     <div className="hero bg-base-200 min-h-96">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="flex-1">
//           <motion.img
//             src={team1}
//             animate={{y: [0, 50, 0] }}
//             transition={{ duration: 5, repeat: Infinity, repeatType: "infinite" }}
//             className="border-s-8 border-b-8 border-blue-500 max-w-sm rounded-t-[40px] rounded-b-[40px] shadow-2xl"
//           />
//           <motion.img
//             src={team2}
//             animate={{ x: [100, 150, 0], x: [0, 50, 0] }}
//             transition={{ duration: 10,
//              delay:5, Infinity, repeatType: "infinite" }}
//             className="border-s-8 border-b-8 border-blue-500 max-w-sm rounded-t-[40px] rounded-b-[40px] shadow-2xl"
//           />
//         </div>

//         <div className="flex-1">
//           <motion.h1 className="text-5xl font-bold">
//             Remote{" "}
//             <motion.span
//               animate={{
//                 color: ["#61eb34", "#9e34eb", "#ebb134"],
//                 transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
//               }}
//               className="text-primary"
//             >
//               Jobs
//             </motion.span>{" "}
//             for you
//           </motion.h1>

//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>

//           <button className="btn btn-primary">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import team1 from "../../assets/images/dev_team_celebrate.jpg";
import team2 from "../../assets/images/team_celebrate.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[580px] flex items-center">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full bg-violet-500/15 blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row-reverse items-center gap-10">
        {/* Images */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <motion.img
              src={team1}
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
              className="border-s-8 border-b-8 border-indigo-500 max-w-sm rounded-t-[40px] rounded-b-[40px] shadow-2xl"
            />
            <motion.img
              src={team2}
              animate={{ x: [100, 150, 0], y: [0, 50, 0] }}
              transition={{
                duration: 10,
                delay: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="border-s-8 border-b-8 border-violet-500 max-w-sm rounded-t-[40px] rounded-b-[40px] shadow-2xl"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-white max-w-xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
              #1 Remote Job Platform
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-6xl font-black leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Remote{" "}
            <motion.span
              animate={{ color: ["#818cf8", "#a78bfa", "#f472b6"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Jobs
            </motion.span>
            <br />
            for You
          </motion.h1>

          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover thousands of remote opportunities from top companies
            worldwide. Your dream career is one click away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("hot-jobs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/25"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
