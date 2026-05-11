
import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import MyPostedJobList from "./MyPostedJobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = UseAuth();

  return (
    <div>
      <h2>My Posted Jobs:</h2>

      <Suspense
        fallback={<span className="loading loading-bars loading-lg"></span>}
      >
        <MyPostedJobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;