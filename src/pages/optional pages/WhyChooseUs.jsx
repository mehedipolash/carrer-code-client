import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const perks = [
  {
    title: "100% Remote Roles",
    desc: "Every single job on our platform is remote-first. No commute, ever.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Real-Time Status Tracking",
    desc: "Know exactly where your application stands — pending, interview, or hired.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Verified Recruiters Only",
    desc: "All companies are verified before posting. Zero spam, zero scams.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "One-Click Applications",
    desc: "Apply instantly with your profile links. No repetitive form filling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Animated counter hook
const useCounter = (target, duration = 1500, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
};

const StatCard = ({ value, label, icon, suffix = "" }) => {
  const [inView, setInView] = useState(false);
  const count = useCounter(value, 1500, inView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 border border-white/8 rounded-2xl p-6 text-center"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-3xl font-black text-white">
        {count}{suffix}
      </p>
      <p className="text-slate-500 text-sm mt-1">{label}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const [stats, setStats] = useState({ jobs: 0, companies: 0, applications: 0, categories: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://career-code-server-blond.vercel.app/jobs").then((r) => r.json()),
      fetch("https://career-code-server-blond.vercel.app/applications").then((r) => r.json()),
    ]).then(([jobs, applications]) => {
      const uniqueCompanies = new Set(jobs.map((j) => j.company)).size;
      const uniqueCategories = new Set(jobs.map((j) => j.category)).size;
      setStats({
        jobs: jobs.length,
        companies: uniqueCompanies,
        applications: applications.length,
        categories: uniqueCategories,
      });
      setLoading(false);
    });
  }, []);

  return (
    <section className="bg-slate-950 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-4">
            Why Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white">Why Choose careerCode</h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            We're not just another job board — built specifically for remote workers.
          </p>
        </motion.div>

        {/* Live stats with animated counters */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-slate-900 border border-white/8 rounded-2xl p-6 text-center animate-pulse">
                <div className="w-8 h-8 bg-slate-800 rounded-lg mx-auto mb-3" />
                <div className="h-8 w-16 bg-slate-800 rounded-lg mx-auto mb-2" />
                <div className="h-3 w-20 bg-slate-800 rounded-lg mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            <StatCard value={stats.jobs}         label="Active Jobs"       icon="💼" />
            <StatCard value={stats.companies}    label="Companies Hiring"  icon="🏢" />
            <StatCard value={stats.applications} label="Applications Sent" icon="📨" />
            <StatCard value={stats.categories}   label="Job Categories"    icon="🗂️" />
          </div>
        )}

        {/* Perks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="bg-slate-900 border border-white/8 rounded-2xl p-6 flex items-start gap-4 hover:border-indigo-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                {perk.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base">{perk.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-1">{perk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;