import React from "react";
import "./Navbar.css";
import { InputSwitch } from "primereact/inputswitch";
function Navbar() {
  const [value, setValue] = React.useState(false);

  return (
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
                  borderRadius: "10rem",
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
