import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ContextProvider";
import { useContext } from "react";

const Navbar = () => {
  const savedProfileName = JSON.parse(localStorage.getItem("studentProfile"));
  const value = useContext(ThemeContext)
console.log(value);


  return (
    <header className="bg-white border-b shadow">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
            SH
          </div>
          <h1 className="text-xl font-semibold">Student Hub</h1>
        </div>
        <nav className="flex items-center gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/assignments">Assignments</NavLink>
          <NavLink to="/exams">Exams</NavLink>

          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <div className="w-10 h-10  bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold rounded-full">
          <img className="rounded-full" src={savedProfileName.profileImage} alt="" />{" "}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
