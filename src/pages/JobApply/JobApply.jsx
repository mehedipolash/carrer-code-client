import React from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume);
    // Create an application object with the form data
    const application = {
      jobId,
      applicantEmail: user?.email,
      linkedin,
      github,
      resume,
    };
    // Send the application data to the server using axios
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3 className="text-4xl">
        Apply For This Job: <Link to={`/jobs/${jobId}`}>Details</Link>{" "}
      </h3>
      <form onSubmit={handleApplyFormSubmit} className="mt-8">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="Linkedin Profile URL"
          />

          <label className="label">Github Profile</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Profile URL"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume URL"
          />

          <input type="submit" className="btn w-full" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
