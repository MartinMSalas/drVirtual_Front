import React from 'react'
import Button from './Button'
export default function EcografiaGlandulasMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
    <div>
      <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
        Por favor, seleccione la especialidad
      </h2>
    </div>
    <div className=" flex justify-around py-5 ">
      <div className="relative  w-[160px] h-12 group">
        <Button clickHandler={()=>clickHandler("mamaria")}>Ecografia Mamaria</Button>
      </div>
      <div className="relative  w-[160px] h-12 group">
        <Button clickHandler={()=>clickHandler("tiroidea")}>Ecografia Tiroidea</Button>
      </div>
    </div>
    

  </div>
  )
}
