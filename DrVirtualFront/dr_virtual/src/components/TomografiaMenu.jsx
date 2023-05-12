import React from 'react'
import Button from './Button'
export default function TomografiaMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione el tipo de Tomografia Axial Computada
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("abdomen y pelvis")}>Tomografia A.C. de abdomen y pelvis</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("craneo y columna")}>Tomografia A.C. de craneo y columna</Button>
        </div>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("torax")}>Tomografia A.C. de torax</Button>
        </div>

      </div>
     
    </div>
  )
}
