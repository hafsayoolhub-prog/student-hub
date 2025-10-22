import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AssignmentCard from "../components/AssignmentCard";
import Loader from "../components/Loader";
import { deleteAssignment, getAssignments, updateAssignment } from "../services/assignmentsApi";
import { useContext } from "react";
import { ThemeContext } from "../components/ContextProvider";
const Assignments = () => {
  const value = useContext(ThemeContext)
  console.log(value.theme);
  
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    getAssignments().then(setAssignments);
  }, []);

  const handelDelete = async (id) => {
    if (!confirm("delete this assignment")) return;
    await deleteAssignment(id);
    setAssignments(assignments.filter((a) => a.id !== id));
  };
  const toggleStatus = async (stat) => {
    const orderStats = ["pending", "in-progress", "completed"];
    const nextStat =
      orderStats[(orderStats.indexOf(stat.status) + 1) % orderStats.length];
    const updated = await updateAssignment(stat.id, {
      ...stat,
      status: nextStat,
    });

    setAssignments(assignments.map((a) => (a.id === stat.id ? updated : a)));
  };

  if (assignments.length == 0) return <Loader />;
  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="mt-4 space-y-3 mb-6">
        {assignments.map((a) => (
          <AssignmentCard
            key={a.id}
            assignment={a}
            onDelete={handelDelete}
            toggleStatus={toggleStatus}
          />
        ))}
      </div>
      <Link
        to="/assignments/add"
        className="mt-4 bg-accent p-3 rounded  text-white cursor-pointer"
      >
        Add Assignments
      </Link>

      <button onClick={()=> value.toggleTheme()}>Change Theme</button>
    </div>
  );
};

export default Assignments;
