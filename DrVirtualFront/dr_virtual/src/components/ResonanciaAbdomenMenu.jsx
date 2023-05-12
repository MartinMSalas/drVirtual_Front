import React from 'react'
import Button from './Button'
export default function ResonanciaAbdomenMenu({clickHandler}) {
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-center text-m font-bold p-8 text-rose-800 w">
          Por favor, seleccione la zona de la Resonancia Nuclear Magnetica
        </h2>
      </div>
      <div className=" flex justify-around py-5 ">
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("abdomen")}>RNM de abdomen</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("pelvis")}>RNM de pelvis</Button>
        </div>
      </div>

    </div>
  )
}