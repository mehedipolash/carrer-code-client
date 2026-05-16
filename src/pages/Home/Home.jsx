// import React, { Suspense } from "react";
// import Banner from "./Banner";
// import HotJobs from "./HotJobs";

// const Home = () => {
//   const jobsPromise = fetch("https://career-code-server-blond.vercel.app/jobs").then((res) =>
//     res.json()
//   );

//   return (
//     <div>
//       <Banner />
//       <Suspense fallback={<div>Loading jobs...</div>}>
//         <HotJobs jobsPromise={jobsPromise} />
//       </Suspense>
//     </div>
//   );
// };

// export default Home;



import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import TopCategories from "../optional pages/TopCategories";
import HowItWorks from "../optional pages/HowItWorks";
import WhyChooseUs from "../optional pages/WhyChooseUs";


const Home = () => {
  const jobsPromise = fetch("https://career-code-server-blond.vercel.app/jobs").then((res) =>
    res.json()
  );

  return (
    <div>
      <Banner />
      <TopCategories />
      <Suspense fallback={<div>Loading jobs...</div>}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default Home;