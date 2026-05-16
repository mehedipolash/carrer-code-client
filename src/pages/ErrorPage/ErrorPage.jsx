import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { motion } from "motion/react";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <section className="bg-slate-950 min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
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

      <div className="relative z-10 text-center max-w-lg mx-auto">

        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          className="mb-6"
        >
          <span
            className="text-[9rem] lg:text-[12rem] font-black leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-indigo-400" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-3xl font-black text-white mb-3">Page Not Found</h1>
          <p className="text-slate-400 text-base leading-relaxed mb-2">
            Looks like this page took a remote job and never came back.
          </p>
          {error?.statusText || error?.message ? (
            <p className="text-xs text-slate-600 font-mono bg-slate-900 border border-white/8 rounded-lg px-4 py-2 inline-block mt-2">
              {error?.statusText || error?.message}
            </p>
          ) : null}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/")}
            className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/25"
          >
            Back to Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(-1)}
            className="px-7 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition-colors font-semibold text-white"
          >
            Go Back
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ErrorPage;