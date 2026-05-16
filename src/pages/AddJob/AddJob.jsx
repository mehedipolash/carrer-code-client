// import React from "react";
// import useAuth from "../../hooks/UseAuth";
// import axios from "axios";
// import Swal from "sweetalert2";

// const AddJob = () => {
//   const { user } = useAuth();

//   const handleAddAJob = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     // console.log(data);

//     // process the salary range data
//     const { min, max, currency, ...newJob } = data;
//     newJob.salaryRange = { min, max, currency };

//     //process requirments
//     const requirmentsString = newJob.requirments;
//     const requirmentsDirty = requirmentsString.split(",");
//     const requirmentsClean = requirmentsDirty.map((req) => req.trim());
//     newJob.requirments = requirmentsClean;

//     // process responsibilities
//     newJob.responsibilities = newJob.responsibilities
//       .split(",")
//       .map((res) => res.trim());

//     newJob.status = "active";
//     // console.log(newJob);

//     // save job to the database

//     axios
//       .post("https://career-code-server-blond.vercel.app/jobs", newJob)
//       .then((res) => {
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "This new job has been saved and published",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h2>Please add a job</h2>
//       <form onSubmit={handleAddAJob}>
//         {/* Basic Info */}
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Basic Info</legend>

//           <label className="label">Job Title</label>
//           <input
//             type="text"
//             className="input"
//             name="title"
//             placeholder="Job Title"
//           />

//           <label className="label">Company </label>
//           <input
//             type="text"
//             name="company"
//             className="input"
//             placeholder="Company name"
//           />

//           <label className="label">Location</label>
//           <input
//             type="text"
//             name="location"
//             className="input"
//             placeholder="Company Location"
//           />

//           <label className="label">Company logo </label>
//           <input
//             type="text"
//             name="company_logo"
//             className="input"
//             placeholder="Company logo url"
//           />
//         </fieldset>

//         {/* job type */}

//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Job Type</legend>

//           <div className="filter">
//             <input
//               className="btn filter-reset"
//               type="radio"
//               name="jobType"
//               value="On-Site"
//               aria-label="On-Site"
//             />
//             <input
//               className="btn"
//               type="radio"
//               name="jobType"
//               value="Remote"
//               aria-label="Remote"
//             />
//             <input
//               className="btn"
//               type="radio"
//               name="jobType"
//               value="Hybrid"
//               aria-label="Hybrid"
//             />
//           </div>
//         </fieldset>

//         {/* Job category */}
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Job Category</legend>

//           <select
//             defaultValue="Job Category"
//             name="category"
//             className="select"
//           >
//             <option disabled={true}>Job Category</option>
//             <option>Engineering</option>
//             <option>Marketing</option>
//             <option>Finance</option>
//           </select>
//         </fieldset>

//         {/* Salary Range */}

//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Salary Range</legend>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//             <div>
//               <label className="label">Minimum salary</label>
//               <input
//                 type="text"
//                 name="min"
//                 className="input"
//                 placeholder="Minimum salary"
//               />
//             </div>

//             <div>
//               <label className="label">Maximum salary</label>
//               <input
//                 type="text"
//                 name="max"
//                 className="input"
//                 placeholder="Maximum salary"
//               />
//             </div>

//             <div>
//               <label className="label">Currency</label>
//               <select
//                 defaultValue="Select a Currency"
//                 name="currency"
//                 className="select"
//               >
//                 <option disabled={true}>Select a Currency</option>
//                 <option>BDT</option>
//                 <option>USD</option>
//                 <option>EU</option>
//               </select>
//             </div>
//           </div>
//         </fieldset>

//         {/* Job Description */}

//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Job Description</legend>

//           <textarea
//             placeholder="Job Description"
//             name="description"
//             className="textarea textarea-primary"
//           ></textarea>
//         </fieldset>

//         {/* Job Requirments */}

//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Job Requirments</legend>

//           <textarea
//             placeholder="Requirments(separate by comma)"
//             name="requirments"
//             className="textarea textarea-primary"
//           ></textarea>
//         </fieldset>

//         {/* Job Responsibilities */}

//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Job Responsibilities</legend>

//           <textarea
//             placeholder="Responsibilities(separate by comma)"
//             name="responsibilities"
//             className="textarea textarea-primary"
//           ></textarea>
//         </fieldset>

//         {/* HR Info */}
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">HR Related Info</legend>

//           <label className="label">HR Name</label>
//           <input
//             type="text"
//             className="input"
//             name="hr_name"
//             placeholder="HR Name"
//           />

//           <label className="label">HR Email </label>
//           <input
//             type="email"
//             name="hr_email"
//             defaultValue={user.email}
//             className="input"
//             placeholder="HR Email"
//           />
//         </fieldset>

//         {/* Application Deadline  */}
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//           <legend className="fieldset-legend">Application Deadline</legend>
//           <input type="date" name="deadline" className="input" />
//         </fieldset>

//         <input className="btn" type="submit" value="Add Job" />
//       </form>
//     </div>
//   );
// };

// export default AddJob;



import React from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import useAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    newJob.requirments = newJob.requirments.split(",").map((r) => r.trim());
    newJob.responsibilities = newJob.responsibilities.split(",").map((r) => r.trim());
    newJob.status = "active";

    axios
      .post("https://career-code-server-blond.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job published successfully!",
            showConfirmButton: false,
            timer: 1500,
            background: "#0f172a",
            color: "#f1f5f9",
          }).then(() => {
            navigate("/myPostedJobs");
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const inputClass = "w-full bg-slate-800 border border-white/10 text-white text-sm rounded-xl px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors";
  const labelClass = "block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2";
  const textareaClass = "w-full bg-slate-800 border border-white/10 text-white text-sm rounded-xl px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none";
  const sectionClass = "bg-slate-900 border border-white/8 rounded-2xl p-6 space-y-4";
  const sectionTitle = "text-white font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2";

  return (
    <section className="bg-slate-950 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-3">
            Recruiter
          </span>
          <h1 className="text-4xl font-black text-white">Post a New Job</h1>
          <p className="text-slate-500 mt-2">Fill in the details to publish your job listing.</p>
        </motion.div>

        <form onSubmit={handleAddAJob} className="space-y-5">

          {/* Basic Info */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className={sectionClass}>
            <h3 className={sectionTitle}>Basic Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className={labelClass}>Job Title</label><input required type="text" name="title" className={inputClass} placeholder="e.g. Senior React Developer" /></div>
              <div><label className={labelClass}>Company</label><input required type="text" name="company" className={inputClass} placeholder="Company name" /></div>
              <div><label className={labelClass}>Location</label><input required type="text" name="location" className={inputClass} placeholder="e.g. Remote, Dhaka" /></div>
              <div><label className={labelClass}>Company Logo URL</label><input required type="url" name="company_logo" className={inputClass} placeholder="https://..." /></div>
            </div>
          </motion.div>

          {/* Job Type */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className={sectionClass}>
            <h3 className={sectionTitle}>Job Type</h3>
            <div className="flex flex-wrap gap-3">
              {["On-Site", "Remote", "Hybrid"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input required type="radio" name="jobType" value={type} className="hidden peer" />
                  <span className="px-4 py-2 rounded-xl border border-white/10 text-slate-400 text-sm font-medium peer-checked:border-indigo-500/60 peer-checked:bg-indigo-500/10 peer-checked:text-indigo-400 transition-all cursor-pointer hover:border-white/20">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Category */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className={sectionClass}>
            <h3 className={sectionTitle}>Job Category</h3>
            <select required defaultValue="Job Category" name="category" className={inputClass}>
              <option disabled value="Job Category">Job Category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </motion.div>

          {/* Salary */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className={sectionClass}>
            <h3 className={sectionTitle}>Salary Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><label className={labelClass}>Minimum</label><input required type="number" min="0" name="min" className={inputClass} placeholder="e.g. 50000" /></div>
              <div><label className={labelClass}>Maximum</label><input required type="number" min="0" name="max" className={inputClass} placeholder="e.g. 80000" /></div>
              <div>
                <label className={labelClass}>Currency</label>
                <select required defaultValue="Select a Currency" name="currency" className={inputClass}>
                  <option disabled value="Select a Currency">Select a Currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }} className={sectionClass}>
            <h3 className={sectionTitle}>Description</h3>
            <textarea required name="description" className={textareaClass} rows={4} placeholder="Describe the role, team, and what you're looking for..." />
          </motion.div>

          {/* Requirements */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className={sectionClass}>
            <h3 className={sectionTitle}>Requirements</h3>
            <textarea required name="requirments" className={textareaClass} rows={3} placeholder="React, Node.js, MongoDB (separate by comma)" />
          </motion.div>

          {/* Responsibilities */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }} className={sectionClass}>
            <h3 className={sectionTitle}>Responsibilities</h3>
            <textarea required name="responsibilities" className={textareaClass} rows={3} placeholder="Build features, review PRs, mentor juniors (separate by comma)" />
          </motion.div>

          {/* HR Info */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className={sectionClass}>
            <h3 className={sectionTitle}>HR Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className={labelClass}>HR Name</label><input required type="text" name="hr_name" className={inputClass} placeholder="HR Name" /></div>
              <div><label className={labelClass}>HR Email</label><input required type="email" name="hr_email" defaultValue={user.email} className={inputClass} /></div>
            </div>
          </motion.div>

          {/* Deadline */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.45 }} className={sectionClass}>
            <h3 className={sectionTitle}>Application Deadline</h3>
            <input required type="date" name="deadline" className={inputClass} />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-bold text-white text-base shadow-lg shadow-indigo-500/20"
          >
            Publish Job
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default AddJob;