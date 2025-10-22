import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAssignment } from "../services/assignmentsApi";

const AddAssignments = () => {
  const ass = {
    title: "",
    subject: "",
    dueDate: "",
    priority: "low",
    status: "pending",
    estimatedHours: "",
    description: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(ass);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAssignment(formData);
    navigate("/assignments");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 ">
      <form className="space-y-6 mt-10">
        <div className="space-y-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Add title"
            className="w-full border border-gray-400 rounded-2xl p-3"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-2xl p-3"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="dueDate">Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-2xl p-3"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            className="w-full border border-gray-400 rounded-2xl p-3"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>{" "}
            <option value="high">high</option>
          </select>
        </div>
        <textarea
          name="description"
          id="secription"
          className="w-full border border-gray-400 rounded-2xl p-3"
          value={formData.description}
          onChange={handleChange}
        >
          {formData.description}
        </textarea>
        <button
          onClick={handleSubmit}
          className="bg-accent  py-3 px-8 rounded-2xl cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddAssignments;
