import { useState } from "react";
import { close, logo,logoV, menu} from '../assets';
import Hero from "./Hero";





const Navbar = () => {

  return (
    <nav className="w-full   z-50   navbar w-full  ">
      <div className="bg-emerald-50 fixed    w-full ">
        <div className="sm:flex  hidden justify-evenly py-5  ml-[20px]"> 
          <img src={logo} alt="logo" className="w-[248px] h-[64px]  cursor-pointer " onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}/>
        </div>
        <div className="sm:hidden flex justify-evenly py-5   ">
          <img src={logoV } alt="logo" className="w-[64px] h-[64px] cursor-pointer" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} />        
        </div>
      </div>
      <div>
        <h2 className="text-center text-m pt-28 text-rose-800 w" >
          Estamos para ayudarte, selecciona el tipo de consulta que deseas realizar
        </h2>
      </div>
 
    </nav>
  )
}

export default Navbar