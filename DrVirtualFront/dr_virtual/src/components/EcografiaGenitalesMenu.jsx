import React from 'react'
import Button from './Button'
export default function EcografiaGenitalesMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
    <div>
      <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
        Por favor, seleccione la especialidad
      </h2>
    </div>
    <div className=" flex justify-around py-5 ">
      <div className="relative  w-[160px] h-12 group">
        <Button clickHandler={()=>clickHandler("ginecologica")}>Ecografia Ginecologica</Button>
      </div>
      <div className="relative  w-[160px] h-12 group">
        <Button clickHandler={()=>clickHandler("testicular")}>Ecografia de Vesiculo Testicular</Button>
      </div>
    </div>
    <div className=" flex justify-around py-5 ">
      <div className="relative  w-[160px] h-12 group">
        <Button clickHandler={()=>clickHandler("prostatica")}>Ecografia Prostatica</Button>
      </div>
      <div className="relative  w-[160px] h-12 group">
        <Button clickHandler={()=>clickHandler("obstetricia")}>Ecografia Obstetricia</Button>
      </div>
    </div>

  </div>
  )
}
