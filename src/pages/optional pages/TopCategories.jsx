import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaMapMarkerAlt, FaClock, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import searchLottie from "../../assets/Search.json";

const CATEGORY_CONFIG = {
  Engineering: { icon: "⚙️", color: "text-blue-400",    bg: "bg-blue-500/10",    border: "border-blue-500/20",    glow: "hover:shadow-blue-500/10"    },
  Marketing:   { icon: "📣", color: "text-pink-400",    bg: "bg-pink-500/10",    border: "border-pink-500/20",    glow: "hover:shadow-pink-500/10"    },
  Finance:     { icon: "💹", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "hover:shadow-emerald-500/10" },
  Design:      { icon: "🎨", color: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/20",  glow: "hover:shadow-violet-500/10"  },
  Sales:       { icon: "🤝", color: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/20",   glow: "hover:shadow-amber-500/10"   },
  HR:          { icon: "👥", color: "text-rose-400",    bg: "bg-rose-500/10",    border: "border-rose-500/20",    glow: "hover:shadow-rose-500/10"    },
};
const DEFAULT_CONFIG = { icon: "💼", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", glow: "hover:shadow-indigo-500/10" };

// Highlight matched text
const Highlight = ({ text = "", query = "" }) => {
  if (!query.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${query.trim()})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-indigo-500/30 text-indigo-300 rounded px-0.5 not-italic">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

// Mini job card for search results — same style as JobsCard
const SearchResultCard = ({ job, query, onClick }) => {
  const { title, company, location, category, applicationDeadline, description, company_logo, requirements, salaryRange, _id } = job;
  const config = CATEGORY_CONFIG[category] || DEFAULT_CONFIG;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className="group bg-slate-900 border border-white/8 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Header */}
      <div className="p-4 pb-3 flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-slate-800">
          <img src={company_logo} alt={company} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-sm truncate">
            <Highlight text={company} query={query} />
          </h3>
          <p className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
            <FaMapMarkerAlt className="text-indigo-400 flex-shrink-0" size={9} />
            <Highlight text={location} query={query} />
          </p>
        </div>
        <span className="flex-shrink-0 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2 py-0.5">
          NEW
        </span>
      </div>

      {/* Title + Salary */}
      <div className="px-4 pb-2">
        <h2 className="text-white font-bold text-base leading-snug group-hover:text-indigo-300 transition-colors">
          <Highlight text={title} query={query} />
        </h2>
        <p className="text-indigo-400 font-semibold text-xs mt-0.5">
          {salaryRange.min}–{salaryRange.max}{" "}
          <span className="uppercase">{salaryRange.currency}</span>
          <span className="text-slate-500 font-normal"> / yr</span>
        </p>
      </div>

      {/* Description */}
      <div className="px-4 pb-3">
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{description}</p>
      </div>

      {/* Skills */}
      <div className="px-4 pb-3 flex flex-wrap gap-1.5">
        {requirements?.slice(0, 3).map((skill, i) => (
          <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 border border-white/8 rounded-lg px-2 py-0.5">
            <Highlight text={skill} query={query} />
          </span>
        ))}
        {requirements?.length > 3 && (
          <span className="text-xs font-medium text-slate-500 bg-slate-800 border border-white/8 rounded-lg px-2 py-0.5">
            +{requirements.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto px-4 py-3 border-t border-white/8 flex items-center justify-between">
        <div>
          <span className={`text-xs font-semibold ${config.color} ${config.bg} border ${config.border} rounded-full px-2 py-0.5`}>
            <Highlight text={category} query={query} />
          </span>
          <p className="text-xs text-slate-600 mt-1 flex items-center gap-1">
            <FaClock size={9} />
            Deadline: {applicationDeadline}
          </p>
        </div>
        <button className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-xs font-semibold shadow-lg shadow-indigo-500/20">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

// Floating particle
const Particle = ({ style }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-indigo-400/20"
    style={style}
    animate={{ y: [0, -50, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
    transition={{ duration: style.duration, delay: style.delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const particles = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 10.5) % 100}%`,
  top: `${(i * 13) % 100}%`,
  duration: 3 + (i % 4),
  delay: i * 0.4,
}));

const TopCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch("https://career-code-server-blond.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const counts = {};
        data.forEach((job) => {
          if (job.category) counts[job.category] = (counts[job.category] || 0) + 1;
        });
        const derived = Object.entries(counts).map(([label, count]) => ({
          label, count,
          ...(CATEGORY_CONFIG[label] || DEFAULT_CONFIG),
        }));
        setCategories(derived);
        setLoading(false);
      });
  }, []);

  // Live search filtering
  const searchResults = searchQuery.trim().length > 0
    ? jobs.filter((job) => {
        const q = searchQuery.toLowerCase();
        return (
          job.title?.toLowerCase().includes(q) ||
          job.company?.toLowerCase().includes(q) ||
          job.category?.toLowerCase().includes(q) ||
          job.location?.toLowerCase().includes(q) ||
          job.requirements?.some((r) => r.toLowerCase().includes(q))
        );
      })
    : [];

  const handleCategoryClick = (cat) => {
    const next = cat.label === selectedCategory ? null : cat.label;
    setSelectedCategory(next);
    setSearchQuery(next || "");
    setShowResults(false);
    inputRef.current?.focus();
  };

  const handleResultClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
    setSearchQuery("");
    setShowResults(false);
    setSelectedCategory(null);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setShowResults(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") handleClear();
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
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-violet-500/15 blur-[100px] pointer-events-none"
      />

      {/* Particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-5"
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block"
            />
            Explore
          </motion.span>

          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Browse by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">
              Category
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            Find the right opportunity in your field of expertise.
          </p>
        </motion.div>

        {/* ── Search Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-2xl mx-auto mb-10"
        >
          <motion.div
            animate={{
              boxShadow: searchFocused
                ? "0 0 0 2px rgba(99,102,241,0.5), 0 0 30px rgba(99,102,241,0.15)"
                : "0 0 0 1px rgba(255,255,255,0.08)",
            }}
            className="relative flex items-center bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/8 overflow-hidden"
          >
            {/* Lottie icon */}
            <div className="w-12 h-12 flex items-center justify-center shrink-0 ml-1 pointer-events-none">
              <Player autoplay loop src={searchLottie} style={{ width: 34, height: 34 }} />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
                setSelectedCategory(null);
              }}
              onFocus={() => { setSearchFocused(true); setShowResults(true); }}
              onBlur={() => { setTimeout(() => { setSearchFocused(false); setShowResults(false); }, 200); }}
              onKeyDown={handleKeyDown}
              placeholder="Search by title, company, skill, location..."
              className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm py-4 pr-2 outline-none"
            />

            {/* Result count badge */}
            <AnimatePresence>
              {searchQuery && searchResults.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-xs font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-500/20 rounded-full px-2 py-0.5 mr-2 shrink-0"
                >
                  {searchResults.length}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Clear */}
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleClear}
                  className="mr-2 w-7 h-7 rounded-full bg-white/8 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-all shrink-0"
                >
                  <FaTimes size={10} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Search button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (searchResults.length === 1) {
                  navigate(`/jobs/${searchResults[0]._id}`);
                } else {
                  document.getElementById("hot-jobs")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="m-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white shrink-0 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
            >
              <FaSearch size={11} />
              Search
            </motion.button>
          </motion.div>

          {/* ── Search Results Panel ── */}
          <AnimatePresence>
            {showResults && searchQuery.trim().length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60 z-50 overflow-hidden"
              >
                {searchResults.length > 0 ? (
                  <>
                    {/* Results header */}
                    <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/5">
                      <p className="text-xs text-slate-500 font-medium">
                        <span className="text-indigo-400 font-bold">{searchResults.length}</span> job{searchResults.length !== 1 ? "s" : ""} matched
                      </p>
                      <p className="text-xs text-slate-600">Click to view details</p>
                    </div>

                    {/* Cards grid */}
                    <div className={`p-3 grid gap-3 max-h-[520px] overflow-y-auto ${
                      searchResults.length === 1 ? "grid-cols-1" :
                      searchResults.length === 2 ? "grid-cols-2" :
                      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}>
                      {searchResults.slice(0, 6).map((job, i) => (
                        <SearchResultCard
                          key={job._id}
                          job={job}
                          query={searchQuery}
                          onClick={() => handleResultClick(job._id)}
                        />
                      ))}
                    </div>

                    {/* View all footer */}
                    {searchResults.length > 6 && (
                      <motion.div
                        onClick={() => {
                          setShowResults(false);
                          document.getElementById("hot-jobs")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-4 py-3 text-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer hover:bg-white/5 transition-colors border-t border-white/5"
                      >
                        +{searchResults.length - 6} more results — View all →
                      </motion.div>
                    )}
                  </>
                ) : (
                  /* No results */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 text-center"
                  >
                    <p className="text-3xl mb-3">🔍</p>
                    <p className="text-slate-300 font-semibold text-sm">
                      No results for "<span className="text-indigo-300">{searchQuery}</span>"
                    </p>
                    <p className="text-slate-600 text-xs mt-1">
                      Try a different keyword or browse categories below
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats row */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mb-10 flex-wrap"
          >
            {[
              { label: "Total Jobs",  value: jobs.length },
              { label: "Categories",  value: categories.length },
              { label: "Companies",   value: [...new Set(jobs.map(j => j.company))].length },
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -2 }} className="text-center">
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  {stat.value}+
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Category chips */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-900 border border-white/8 rounded-2xl p-5 flex flex-col items-center gap-3 animate-pulse">
                <div className="w-10 h-10 bg-slate-800 rounded-xl" />
                <div className="h-3 w-16 bg-slate-800 rounded-lg" />
                <div className="h-2 w-10 bg-slate-800 rounded-lg" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleCategoryClick(cat)}
                className={`relative bg-slate-900 border rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer transition-all group hover:shadow-lg ${cat.glow} ${
                  selectedCategory === cat.label
                    ? `${cat.border} ${cat.bg}`
                    : "border-white/8 hover:border-white/20"
                }`}
              >
                {selectedCategory === cat.label && (
                  <motion.div
                    layoutId="selectedCat"
                    className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent ${cat.color.replace("text-", "via-")} to-transparent`}
                  />
                )}

                <motion.span
                  className="text-4xl"
                  animate={selectedCategory === cat.label ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {cat.icon}
                </motion.span>

                <p className={`font-semibold text-sm text-center transition-colors ${
                  selectedCategory === cat.label ? cat.color : "text-white"
                }`}>
                  {cat.label}
                </p>

                <span className={`text-xs font-bold ${cat.color} ${cat.bg} border ${cat.border} rounded-full px-2.5 py-0.5`}>
                  {cat.count} {cat.count === 1 ? "job" : "jobs"}
                </span>

                <motion.div
                  className={`absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full ${cat.bg} border ${cat.border}`}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Category job preview */}
        <AnimatePresence>
          {selectedCategory && !showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">
                  {selectedCategory} Jobs
                  <span className="text-slate-500 font-normal text-sm ml-2">
                    ({jobs.filter(j => j.category === selectedCategory).length} found)
                  </span>
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("hot-jobs")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-3 py-1.5 hover:opacity-80 transition-opacity"
                >
                  View All →
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs
                  .filter(j => j.category === selectedCategory)
                  .slice(0, 3)
                  .map((job, i) => (
                    <SearchResultCard
                      key={job._id}
                      job={job}
                      query={selectedCategory}
                      onClick={() => handleResultClick(job._id)}
                    />
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TopCategories;