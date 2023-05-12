import React from 'react'
import Button from './Button'
export default function TomografiaAbdomenMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione la zona de la tomografia axial computada
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("abdomen")}>Tomografia A.C. de abdomen</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("pelvis")}>Tomografia A.C. de pelvis</Button>
        </div>
      </div>

    </div>
  )
}