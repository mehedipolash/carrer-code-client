import React, { Suspense } from "react";
import ApplicationsStats from "./ApplicationsStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../hooks/UseAuth";
import { MyApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = UseAuth();

  return (
    <div>
      <ApplicationsStats />

      <Suspense
        fallback={<span className="loading loading-bars loading-lg"></span>}
      >
        <ApplicationList
          MyApplicationsPromise={MyApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
