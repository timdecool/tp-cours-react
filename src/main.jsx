import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ThemeContext, ThemeProvider} from "./contexts/ThemeContext.jsx";
import ThemeWrapper from "./components/theme/ThemeWrapper.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeWrapper>
        <RouterProvider router={router}/>
      </ThemeWrapper>
    </ThemeProvider>
  </StrictMode>
)
