import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {
  getAssignmentById,
  updateAssignment,
} from "../services/assignmentsApi";
const EditAssignment = () => {
  const { id } = useParams(); //5
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getAssignmentById(id);
      setFormData(data);
    })();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAssignment(id, formData);
    navigate("/assignments");
  };

  if (!formData) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <h2>Edit Assignment</h2>

      <form className="space-y-6 mt-10">
        <div className="space-y-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
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
          className="bg-accent py-3 px-8 rounded-2xl cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EditAssignment;
