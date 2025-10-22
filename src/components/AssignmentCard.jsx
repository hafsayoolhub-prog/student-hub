import React from "react";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment, onDelete, toggleStatus }) => {
  return (
    <div className="bg-white p-6 transition-all duration-300 hover:shadow-sm hover:border-indigo-400  rounded-md shadow-sm flex justify-between items-center">
      <div className="flex">
        <div>
          <div className="flex gap-6">
            <div className="font-semibold">{assignment.title}</div>
            <div className="space-x-5">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border transition-colors duration-150 bg-green-100 text-green-800 border-green-300">
                {assignment.priority}
              </span>
              {toggleStatus ? (
                <button
                  onClick={() => toggleStatus(assignment)}
                  className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border transition-colors duration-150 bg-blue-100 text-blue-500  cursor-pointer"
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
              className="cursor-pointer font-semibold py-2 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 active:scale-[0.98] shadow-sm shadow-indigo-500/50 focus:ring-indigo-500/50  "
            >
              Edit
            </Link>
            <button
              className=" font-semibold py-2 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 active:scale-[0.98] shadow-sm shadow-indigo-500/50 focus:ring-indigo-500/50 cursor-pointer "
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
