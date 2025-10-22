import { useContext, useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import { Check, Clock1, Clock2, File } from "lucide-react";
import AssignmentCard from "../components/AssignmentCard";
import { getAssignments } from "../services/assignmentsApi";
import { ThemeContext } from "../components/ContextProvider";

const Home = () => {
  const [latestAssignments, setLatestAssignments] = useState([])
  const {theme, toggleTheme} = useContext(ThemeContext)
  console.log(theme);
  
  const [status, setStatus] = useState({
    total: 0,
    completed: 0,
    inProgress: 0,
    pending: 0,
  });


  useEffect(() => {
    const fetchedStatus = async () => {
      try {
        const allStatus= await getAssignments("");
          setStatus({
            total: allStatus.length,
            completed: allStatus.filter((a) => a.status === "completed").length,
            pending: allStatus.filter((a) => a.status === "pending").length,
            inProgress: allStatus.filter((a) => a.status === "in-progress")
              .length,
          });
        
      } catch (error) {
        console.log("there is some error...");
      }

      try{
        const latestAssignmentss = await getAssignments(
          "?_sort=dueDate&_order=asc&_limit=3"
        );
        setLatestAssignments(latestAssignmentss)        
      }catch(error){
        console.log(error);
        
      }
    };
    fetchedStatus();
  }, []);

  const stats = [
    {
      title: "Total",
      icon: Clock2,
      number: status.total,
      colorClass: "bg-purple-200 ",
    },
    {
      title: "Completed",
      icon: Check,
      number: status.completed,
      colorClass: "bg-green-200 ",
    },
    {
      title: "InProgress",
      icon: Clock1,
      number: status.inProgress,
      colorClass: "bg-orange-200 ",
    },
    {
      title: "Pending",
      number: status.pending,
      icon: File,
      colorClass: "bg-gray-400 ",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex gap-8 mt-6   mb-8 ">
        {stats.map((stat, index) => (
          <StatusCard key={index} stats={stat} />
        ))}
      </div>
      <h2>Latest Assignments</h2>
      <div className="mt-4 space-y-3 mb-6">
        {latestAssignments.map((a) => (
          <AssignmentCard key={a.id} assignment={a} />
        ))}
      </div>

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Home;