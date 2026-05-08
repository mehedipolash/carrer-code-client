import React from "react";
import Swal from "sweetalert2";

const JobApplicationsRow = ({ application, index, handleDelete }) => {
  const { company, title, company_logo, _id } = application;

  const onDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this application!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(_id);

        Swal.fire({
          title: "Deleted!",
          text: "Application has been deleted successfully.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt={company} />
            </div>
          </div>

          <div>
            <div className="font-bold">{company}</div>
          </div>
        </div>
      </td>

      <td>{title}</td>

      <td>
        <button onClick={onDelete} className="btn btn-error btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default JobApplicationsRow;
