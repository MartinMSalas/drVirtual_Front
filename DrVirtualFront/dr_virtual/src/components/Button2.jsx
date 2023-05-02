import React from "react";
import button2 from "./css/button2.css"
export const  Button2 = ({children,clickHandler}) => {
  return (
    <div>

      <div className="w-full">    
        <button onClick={clickHandler} className="button2 w-full h-12 bg-blue-400">{children}</button>
      </div>

    </div>
    );
}
 
