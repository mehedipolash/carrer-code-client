import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div>
        <h2 className="text-4xl font-bold mb-4 text-center">Hot Jobs of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => <JobsCard key ={job._id} job ={job}>
            
        </JobsCard>)}
      </div>
    </div>
  );
};

export default HotJobs;
