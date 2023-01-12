import React,{useState} from "react";
import "./Navbar.css";
import { InputSwitch } from "primereact/inputswitch";
import {createContext} from "react";
import Hero from "./Hero";
export const ThemeContext= createContext("light");
function Navbar() {
  const [value, setValue] = React.useState(false);
  const [theme,settheme]=useState("dark");
  const toggleTheme=()=>{
    settheme((curr)=>(curr==="light"?"dark":"light"))
  }
  return (
    <>
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo">
            <i
              className="pi pi-twitter"
              style={{ fontSize: "3em", color: "#0daeee" }}
            ></i>
          </a>
          <h1>Twitter </h1>
        </div>
        <div className="container1">
          <ul className="nav-link">
            <li>User</li>
            <li>
              <i
                className="pi pi-user"
                style={{ fontSize: "1.5em", marginRight: "1rem" }}
              ></i>

              <InputSwitch
                checked={value}
                onChange={(e) => setValue(e.value)}
                style={{
                  fontSize: "2em",
                  color: "black",
                  borderRadius: "100px",
                }}
                onChange={toggleTheme} checked={theme==="light"}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="hero" id={theme}>
    <Hero/>
    </div>
    </ThemeContext.Provider>
 </>
  );
}

export default Navbar;
