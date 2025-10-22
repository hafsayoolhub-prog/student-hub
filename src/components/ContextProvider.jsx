// import { Home } from "lucide-react";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});
// const ContextProvider = ({children}) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     console.log('its clicking');
    
//     setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ContextProvider;
