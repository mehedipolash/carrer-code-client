// import React from "react";
// import { Link } from "react-router";
// import { useParams } from "react-router";
// import UseAuth from "../../hooks/UseAuth";
// import axios from "axios";
// import Swal from "sweetalert2";

// const JobApply = () => {
//   const { id: jobId } = useParams();
//   const { user } = UseAuth();
//   // console.log(user);

//   const handleApplyFormSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const linkedin = form.linkedin.value;
//     const github = form.github.value;
//     const resume = form.resume.value;

//     // console.log(linkedin, github, resume);
//     // Create an application object with the form data
//     const application = {
//       jobId,
//       applicantEmail: user?.email,
//       linkedin,
//       github,
//       resume,
//     };
//     // Send the application data to the server using axios
//     axios
//       .post("https://career-code-server-blond.vercel.app/applications", application)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Your application has been submitted",
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
//       <h3 className="text-4xl">
//         Apply For This Job: <Link to={`/jobs/${jobId}`}>Details</Link>{" "}
//       </h3>
//       <form onSubmit={handleApplyFormSubmit} className="mt-8">
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//           <label className="label">LinkedIn Profile</label>
//           <input
//             type="url"
//             name="linkedin"
//             className="input"
//             placeholder="Linkedin Profile URL"
//           />

//           <label className="label">Github Profile</label>
//           <input
//             type="url"
//             name="github"
//             className="input"
//             placeholder="Github Profile URL"
//           />

//           <label className="label">Resume</label>
//           <input
//             type="url"
//             name="resume"
//             className="input"
//             placeholder="Resume URL"
//           />

//           <input type="submit" className="btn w-full" value="Apply" />
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default JobApply;


import React from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const application = {
      jobId,
      applicantEmail: user?.email,
      linkedin: form.linkedin.value,
      github: form.github.value,
      resume: form.resume.value,
    };

    axios
      .post("https://career-code-server-blond.vercel.app/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application submitted!",
            showConfirmButton: false,
            timer: 1500,
            background: "#0f172a",
            color: "#f1f5f9",
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  const inputClass = "w-full bg-slate-800 border border-white/10 text-white text-sm rounded-xl px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800 transition-colors";
  const labelClass = "block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2";

  return (
    <section className="bg-slate-950 min-h-screen py-12 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-3">
              Application
            </span>
            <h1 className="text-4xl font-black text-white">Apply for this Job</h1>
            <p className="text-slate-500 mt-2 text-sm">
              Applying as <span className="text-indigo-400">{user?.email}</span> ·{" "}
              <Link to={`/jobs/${jobId}`} className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors">
                View job details
              </Link>
            </p>
          </div>

          <div className="bg-slate-900 border border-white/8 rounded-2xl p-8">
            <form onSubmit={handleApplyFormSubmit} className="space-y-5">
              <div>
                <label className={labelClass}>LinkedIn Profile</label>
                <input required type="url" name="linkedin" className={inputClass} placeholder="https://linkedin.com/in/yourprofile" />
              </div>

              <div>
                <label className={labelClass}>GitHub Profile</label>
                <input required type="url" name="github" className={inputClass} placeholder="https://github.com/yourusername" />
              </div>

              <div>
                <label className={labelClass}>Resume URL</label>
                <input required type="url" name="resume" className={inputClass} placeholder="https://drive.google.com/your-resume" />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/20 mt-2"
              >
                Submit Application
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobApply;