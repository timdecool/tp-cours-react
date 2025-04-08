import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext.jsx";

const ThemeWrapper = ({children}) => {
  const { theme } = useContext(ThemeContext);
  return (<div data-theme={theme}>{children}</div>)
}

export default ThemeWrapper;