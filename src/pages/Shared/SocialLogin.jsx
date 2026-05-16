//  import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext/AuthContext";
// import { useNavigate } from "react-router";

// const SocialLogin = ({ from }) => {
//   const { signInWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         const user = result.user;
//         // console.log(user);
//         navigate(from || "/");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   return (
//     <div>
//       <div className="divider divider-horizontal">OR</div>
//       <button
//         className="btn bg-white text-black border-[#e5e5e5]"
//         onClick={handleGoogleSignIn}
//       >
//         <svg
//           aria-label="Google logo"
//           width="16"
//           height="16"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//         >
//           <g>
//             <path d="m0 0H512V512H0" fill="#fff"></path>
//             <path
//               fill="#34a853"
//               d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//             ></path>
//             <path
//               fill="#4285f4"
//               d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//             ></path>
//             <path
//               fill="#fbbc02"
//               d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//             ></path>
//             <path
//               fill="#ea4335"
//               d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//             ></path>
//           </g>
//         </svg>
//         Login with Google
//       </button>
//     </div>
//   );
// };

// export default SocialLogin;
 

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router";

const SocialLogin = ({ from }) => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => navigate(from || "/"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="mt-6">
      <div className="relative flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">or continue with</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white text-sm font-medium"
      >
        <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <path d="m0 0H512V512H0" fill="transparent"></path>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
          </g>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;