import React from 'react'
import Button from './Button'
export default function TomografiaCraneoMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione la zona de la tomografia axial computada
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("craneo")}>Tomografia A.C. de craneo</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("columna cervical")}>Tomografia A.C. de columna cervical</Button>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("columna dorsal")}>Tomografia A.C. de columna dorsal</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("columna lumbro-sacra")}>Tomografia A.C. de columna lumbro-sacra</Button>
        </div>
      </div>

    </div>
  )
}