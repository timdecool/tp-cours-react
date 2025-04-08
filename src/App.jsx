
import './App.css'
import NavBar from "./components/NavBar.jsx";
import {Outlet } from "react-router-dom";

function App() {
  return (
      <>
        <NavBar className="z-10" />
        <div className="z-0">
          <Outlet />
        </div>
      </>
  )
}

export default App
