import React, { use, useState } from "react";
import JobApplicationsRow from "./JobApplicationsRow";

const ApplicationList = ({ MyApplicationsPromise }) => {
  const initialApplications = use(MyApplicationsPromise);

  const [applications, setApplications] = useState(initialApplications);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/applications/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingApplications = applications.filter(
            (application) => application._id !== id
          );

          setApplications(remainingApplications);
        }
      });
  };

  return (
    <div>
      <h3 className="text-3xl">
        Job Applied so far: {applications.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application, index) => (
              <JobApplicationsRow
                key={application._id}
                index={index}
                application={application}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;