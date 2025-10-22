import React from "react";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment, onDelete, toggleStatus }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm flex justify-between items-center">
      <div className="flex">
        <div>
          <div className="flex gap-6">
            <div className="font-semibold">{assignment.title}</div>
            <div className="space-x-5">
              <span className="text-green-500">{assignment.priority}</span>
              {toggleStatus ? (
                <button
                  onClick={() => toggleStatus(assignment)}
                  className=" bg-blue-100 text-blue-500 px-4 py-1 rounded-full text-sm font-medium cursor-pointer"
                >
                  {assignment.status}
                </button>
              ) : (
                <button
                disabled
                  className=" bg-gray-100 text-gray-500 px-4 py-1 rounded-full text-sm font-medium "
                >
                  {assignment.status}
                </button>
              )}
            </div>
          </div>
          <div className="text-sm text-gray-500 space-x-4">
            {assignment.subject}
            <span className="text-accent">
              {" "}
              Due {new Date(assignment.dueDate).toLocaleDateString()}
            </span>

            <p className="max-w-3xl">{assignment.description}</p>
          </div>
        </div>
        {onDelete && (
          <div className="space-x-7">
            <Link
              to={`/assignments/edit/${assignment.id}`}
              className="cursor-pointer"
            >
              Edit
            </Link>
            <button
              className="cursor-pointer"
              onClick={() => onDelete(assignment.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
