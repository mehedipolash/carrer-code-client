import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/images/dev_team_celebrate.jpg";
import team2 from "../../assets/images/team_celebrate.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "infinite" }}
            className="border-s-8 border-b-8 border-blue-500 max-w-sm rounded-t-[40px] rounded-b-[40px] shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 0], x: [0, 50, 0] }}
            transition={{ duration: 10,
             delay:5, Infinity, repeatType: "infinite" }}
            className="border-s-8 border-b-8 border-blue-500 max-w-sm rounded-t-[40px] rounded-b-[40px] shadow-2xl"
          />
        </div>

        <div className="flex-1">
          <motion.h1 className="text-5xl font-bold">
            Remote{" "}
            <motion.span
              animate={{
                color: ["#61eb34", "#9e34eb", "#ebb134"],
                transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              }}
              className="text-primary"
            >
              Jobs
            </motion.span>{" "}
            for you
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;