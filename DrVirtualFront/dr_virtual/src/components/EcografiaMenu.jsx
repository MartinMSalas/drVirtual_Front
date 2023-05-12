import React from 'react'
import Button from './Button'
export default function EcografiaMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione el tipo de Ecografia
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("articular")}>Ecografia Articular y de partes blandas</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("abdomen")}>Ecografia de Abdomen</Button>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("genitales")}>Ecografia de Genitales y Obstetricia</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("glandulas")}>Ecografia de Glandulas</Button>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("renal")}>Ecografia Renal</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("venosa")}>Ecografia Venosa</Button>
        </div>
      </div>
    </div>
  )
}
