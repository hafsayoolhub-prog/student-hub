import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Assignments from "./pages/Assignments";
import AddAssignments from "./pages/AddAssignments";
import EditAssignment from "./pages/EditAssignment";
import { ThemeContext } from "./components/ContextProvider";
import { useState } from "react";
function App() {
  const [theme,setTheme] = useState('light')

  const toggleTheme= ()=>{
    setTheme(prevState => (prevState === "light" ? "dark": "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <BrowserRouter>
    <Routes>
      {/* Layout routes */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="assignments">
          <Route index element={<Assignments />} />
          <Route path="add" element={<AddAssignments />} />
          <Route path="edit/:id" element={<EditAssignment />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
