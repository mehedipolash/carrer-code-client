// import Lottie from "lottie-react";
// import React, { useContext } from "react";
// import registerLottie from "../../assets/Register.json";
// import { AuthContext } from "../../context/AuthContext/AuthContext";
// import SocialLogin from "../Shared/SocialLogin";

// const Register = () => {
//   const { createUser } = useContext(AuthContext);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     // console.log(email, password);

//     // ✅ Firebase register
//     createUser(email, password)
//       .then((result) => {
//         console.log("User Created:", result.user);
//       })
//       .catch((error) => {
//         console.error("Error:", error.message);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         {/* Lottie */}
//         <div className="text-center lg:text-left">
//           <Lottie
//             animationData={registerLottie}
//             loop={true}
//             style={{ width: "200px" }}
//           />
//         </div>

//         {/* Form */}
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-3xl font-bold">Register now!</h1>

//             <form onSubmit={handleRegister}>
//               <fieldset className="fieldset">
//                 <label className="label">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="input"
//                   placeholder="Email"
//                   required
//                 />

//                 <label className="label">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="input"
//                   placeholder="Password"
//                   required
//                 />

//                 <button type="submit" className="btn btn-neutral mt-4">
//                   Register
//                 </button>
//               </fieldset>
//             </form>

//             <SocialLogin></SocialLogin>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottie from "../../assets/Register.json";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { Link } from "react-router";
import { motion } from "motion/react";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    createUser(form.email.value, form.password.value)
      .then((result) => console.log("User Created:", result.user))
      .catch((error) => console.error("Error:", error.message));
  };

  const inputClass = "w-full bg-slate-800 border border-white/10 text-white text-sm rounded-xl px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors";
  const labelClass = "block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2";

  return (
    <section className="bg-slate-950 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center gap-12">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center"
        >
          <Lottie animationData={registerLottie} loop={true} style={{ width: "280px" }} />
          <h2 className="text-white font-black text-3xl mt-4 text-center">Join careerCode</h2>
          <p className="text-slate-500 text-sm mt-2 text-center">Create an account and find your next opportunity</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 w-full max-w-sm"
        >
          <div className="bg-slate-900 border border-white/8 rounded-2xl p-8">
            <h1 className="text-2xl font-black text-white mb-6">Create Account</h1>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className={labelClass}>Email</label>
                <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
              </div>
              <div>
                <label className={labelClass}>Password</label>
                <input required type="password" name="password" className={inputClass} placeholder="••••••••" />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/20"
              >
                Register
              </motion.button>
            </form>

            <SocialLogin />

            {/* Link to Sign In */}
            <p className="text-center text-slate-500 text-sm mt-6">
              Already have an account?{" "}
              <Link to="/signin" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;