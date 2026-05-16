import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import gearLottie from "../../assets/Gear how it works.json";

const steps = [
  {
    number: "01",
    title: "Create an Account",
    desc: "Sign up in seconds with your email or Google. No credit card required.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "shadow-indigo-500/20",
    stat: { value: "50K+", label: "Users" },
    action: "/register",
    actionLabel: "Sign Up Free",
  },
  {
    number: "02",
    title: "Browse Jobs",
    desc: "Explore roles filtered by category, salary, and location.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "shadow-violet-500/20",
    stat: { value: "1.2K+", label: "Live Jobs" },
    action: null,
    actionLabel: "See Jobs",
  },
  {
    number: "03",
    title: "Apply in One Click",
    desc: "Submit your LinkedIn, GitHub, and resume URL. No lengthy forms, ever.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/20",
    stat: { value: "98%", label: "Success Rate" },
    action: null,
    actionLabel: null,
  },
  {
    number: "04",
    title: "Get Hired",
    desc: "Track your application status in real time and land your dream job.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "shadow-amber-500/20",
    stat: { value: "30K+", label: "Hired" },
    action: null,
    actionLabel: null,
  },
];

const Particle = ({ style }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-indigo-400/30"
    style={style}
    animate={{ y: [0, -60, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
    transition={{ duration: style.duration, delay: style.delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.2) % 100}%`,
  top: `${(i * 11) % 100}%`,
  duration: 3 + (i % 4),
  delay: i * 0.35,
}));

const HowItWorks = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [activeStep, setActiveStep] = useState(null);

  // ✅ Smart CTA button handler
  const handleCTAClick = () => {
    if (user) {
      // already logged in → scroll to jobs
      document.getElementById("hot-jobs")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/register");
    }
  };

  // ✅ Step 01 button: if logged in, scroll to jobs instead of going to register
  const handleStep01Click = () => {
    if (user) {
      document.getElementById("hot-jobs")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/register");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] py-24 px-6 border-t border-white/5">

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-violet-500/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"
      />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-5"
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block"
            />
            Simple Process
          </motion.span>

          <h2 className="text-4xl lg:text-5xl font-black text-white">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">
              Works
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            From sign-up to hired — four simple steps to your next dream role.
          </p>

          {/* ✅ Gear Lottie — centered under heading */}
          <div className="flex justify-center mt-6">
            <Player
              autoplay
              loop
              src={gearLottie}
              style={{ width: 120, height: 120 }}
            />
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Animated connector line */}
          <div className="hidden lg:block absolute top-12 left-[13%] right-[13%] h-px z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              style={{ transformOrigin: "left" }}
              className="w-full h-full bg-gradient-to-r from-indigo-500/40 via-violet-500/40 to-amber-500/40"
            />
            {/* Moving dot on connector line */}
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-0 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/60"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onHoverStart={() => setActiveStep(i)}
              onHoverEnd={() => setActiveStep(null)}
              className="relative z-10 bg-slate-900/80 backdrop-blur-sm border border-white/8 hover:border-white/20 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* Top accent line on hover */}
              <motion.div
                animate={{ opacity: activeStep === i ? 1 : 0 }}
                className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent ${step.color.replace("text-", "via-")} to-transparent`}
              />

              {/* Icon row */}
              <div className="flex items-center justify-between">
                <motion.div
                  className={`w-14 h-14 rounded-xl ${step.bg} border ${step.border} ${step.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {step.icon}
                </motion.div>
                <span className="text-5xl font-black text-white/5 select-none">
                  {step.number}
                </span>
              </div>

              {/* Title + Desc */}
              <div>
                <h3 className="text-white font-bold text-lg">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-1">{step.desc}</p>
              </div>

              {/* Stat pill */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${step.bg} border ${step.border} w-fit`}
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className={`w-1.5 h-1.5 rounded-full ${step.color.replace("text-", "bg-")}`}
                />
                <span className={`text-sm font-black ${step.color}`}>{step.stat.value}</span>
                <span className="text-xs text-slate-500">{step.stat.label}</span>
              </motion.div>

              {/* ✅ Step 01 action button — smart auth check */}
              {step.action && (
                <motion.button
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStep01Click}
                  className={`mt-auto text-xs font-semibold ${step.color} ${step.bg} border ${step.border} rounded-lg px-3 py-1.5 w-fit transition-opacity hover:opacity-80`}
                >
                  {/* ✅ Label changes based on auth state */}
                  {user ? "Browse Jobs →" : `${step.actionLabel} →`}
                </motion.button>
              )}

              {/* Step 02 scroll to jobs */}
              {step.number === "02" && (
                <motion.button
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document.getElementById("hot-jobs")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`mt-auto text-xs font-semibold ${step.color} ${step.bg} border ${step.border} rounded-lg px-3 py-1.5 w-fit transition-opacity hover:opacity-80`}
                >
                  {step.actionLabel} →
                </motion.button>
              )}

              {/* Pulse dot */}
              <motion.div
                className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${step.bg} border ${step.border}`}
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 relative overflow-hidden rounded-2xl p-px"
          style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)" }}
        >
          <div className="relative bg-slate-900 rounded-2xl p-10 text-center overflow-hidden">
            {/* Glow rings */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.05, 0.15] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-indigo-500/20"
            />
            <motion.div
              animate={{ scale: [1.4, 1, 1.4], opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-violet-500/20"
            />

            {/* ✅ Gear Lottie inside CTA */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
              <Player
                autoplay
                loop
                src={gearLottie}
                style={{ width: 160, height: 160 }}
              />
            </div>

            <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 relative z-10">
              {user ? "Welcome Back! Keep Exploring." : "Ready to Start Your Journey?"}
            </h3>
            <p className="text-slate-400 mb-6 text-sm relative z-10">
              {user
                ? "Browse the latest jobs and track your applications in real time."
                : "Join thousands of professionals who found their dream job through careerCode."}
            </p>

            {/* ✅ Smart CTA button */}
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCTAClick}
              className="relative px-8 py-3.5 font-bold text-white rounded-xl text-sm overflow-hidden group z-10"
              style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {user ? "Browse Jobs →" : "Get Started for Free →"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;