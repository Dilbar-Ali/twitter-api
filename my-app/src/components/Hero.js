import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { ListBox } from 'primereact/listbox';
const Hero = () => {
    // const []
  const [value, setValue] = useState();
 
  return (
    <>
      <div className="flex p-justify-center gap-5">
        <span className="p-float-label m-5">
          <InputText
            id="in"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{}}
          />
          <label htmlFor="in">
            {" "}
            <i className="pi pi-search"></i> Enter Username
          </label>
        </span>
        <span className="p-float-label m-5">
          <InputText
            id="in"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ width: "60vw", borderRadius: "20px" }}
          />
          <label htmlFor="in"> Search tweets </label>
          <Button
            label="Search"
            className="p-button mx-3 "
            style={{
              borderRadius: "20px ",
              background: "linear-gradient(90deg, #000000 10%, #0daeee 100%)",
            }}
          />
        </span>
      </div>
      <div className="grid m-2">
        <div className="col-3 text-center bg-black-alpha-10 border-1 h-22rem">
<ul className="list list-none line-height-4 p-0">
    <li>Imrankhan@gmail.com</li>
    <li>Imrankhan@gmail.com</li>
    <li>Imrankhan@gmail.com</li>
    <li>Imrankhan@gmail.com</li>
    <li>Imrankhan@gmail.com</li>
</ul>

 
        </div>
        <div className="col-9 border-1 h-22rem">
          <h1>i am left</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
