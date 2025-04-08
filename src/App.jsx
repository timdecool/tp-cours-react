
import './App.css'
import NavBar from "./components/layout/NavBar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
      <div className="h-screen flex flex-col">
        <NavBar className="z-10" />
        <div className="z-0 dark:bg-base-200 light:bg-base-900 flex-grow">
          <Outlet />
        </div>
      </div>
  )
}

export default App
