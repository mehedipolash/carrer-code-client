import React from "react";

const AddJob = () => {
  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div>
      <h2>Please add a job</h2>
      <form onSubmit={handleAddAJob}>
        {/* Basic Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Job Title"
          />

          <label className="label">Company </label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company logo </label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company logo url"
          />
        </fieldset>

        {/* job type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" className="input" />
        </fieldset>

        {/* Salary Range */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Minimum salary"
              />
            </div>

            <div>
              <label className="label">Maximum salary</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Maximum salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>

          <textarea
            placeholder="Job Description"
            name="description"
            className="textarea textarea-primary"
          ></textarea>
        </fieldset>

        {/* Job Requirments */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirments</legend>

          <textarea
            placeholder="Requirments(separate by comma)"
            name="requirments"
            className="textarea textarea-primary"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>

          <textarea
            placeholder="Responsibilities(separate by comma)"
            name="responsibilities"
            className="textarea textarea-primary"
          ></textarea>
        </fieldset>

        {/* HR Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            name="hr_name"
            placeholder="HR Name"
          />

          <label className="label">HR Email </label>
          <input
            type="email"
            name="hr_email"
            className="input"
            placeholder="HR Email"
          />
        </fieldset>
        <input className="btn" type="submit" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
