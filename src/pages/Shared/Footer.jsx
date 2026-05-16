// // Footer.jsx
// import React from "react";
// import footer from "../../../src/assets/footer.json";

// const Footer = () => {
//   // Social links — replace with actual URLs
//   // You can also read these from footer.json if you prefer:
//   // const socialLinks = footerData.socialLinks;
//   const socialLinks = [
//     { name: "Twitter", url: "https://twitter.com/", icon: "twitter" },
//     { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
//     { name: "GitHub", url: "https://github.com/", icon: "github" },
//   ];

//   // Simple icon components (or use react-icons if you have it)
//   const SocialIcon = ({ name }) => {
//     switch (name) {
//       case "twitter":
//         return (
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//           </svg>
//         );
//       case "linkedin":
//         return (
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//           </svg>
//         );
//       case "github":
//         return (
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <footer className="bg-slate-950 border-t border-white/8 pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top row: logo + social links */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
//           {/* Logo & tagline */}
//           <div className="text-center sm:text-left">
//             <div className="flex items-center gap-2 justify-center sm:justify-start">
//               <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                   <path
//                     d="M16 3H8L6 7h12l-2-4z"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <span className="text-white font-bold text-lg tracking-tight">
//                 career<span className="text-indigo-400">Code</span>
//               </span>
//             </div>
//             <p className="text-slate-500 text-sm mt-2 max-w-xs">
//               Connecting top talent with remote-first companies.
//             </p>
//           </div>

//           {/* Social links */}
//           <div className="flex gap-4">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.name}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-500 hover:text-indigo-400 transition-colors p-1"
//                 aria-label={social.name}
//               >
//                 <SocialIcon name={social.icon} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Bottom row: copyright + minimal legal links */}
//         <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-600">
//           <p>© {new Date().getFullYear()} careerCode. All rights reserved.</p>
//           <div className="flex gap-4 mt-3 sm:mt-0">
//             <a href="#" className="hover:text-indigo-400 transition-colors">
//               Privacy
//             </a>
//             <a href="#" className="hover:text-indigo-400 transition-colors">
//               Terms
//             </a>
//             <a href="#" className="hover:text-indigo-400 transition-colors">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// Footer.jsx


import React from "react";
import Lottie from "lottie-react";
import footer from "../../../src/assets/footer.json";

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/OpenAI", icon: "twitter" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/openai/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/facebook/react",
      icon: "github",
    },
  ];

  const SocialIcon = ({ name }) => {
    switch (name) {
      case "twitter":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );

      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );

      case "github":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-white/10 pt-14 pb-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-indigo-600/90 shadow-lg shadow-indigo-500/30 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 3H8L6 7h12l-2-4z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  career<span className="text-indigo-400">Code</span>
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                  Connecting top talent with remote-first companies.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 lg:w-80 lg:h-80 flex-shrink-0">
              <Lottie
                animationData={footer}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} careerCode. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Privacy
            </a>

            <a href="#" className="hover:text-indigo-400 transition-colors">
              Terms
            </a>

            <a href="#" className="hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;