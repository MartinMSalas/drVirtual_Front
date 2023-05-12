import React from 'react'
import Button from './Button'
import {Button2} from './Button2'
export default function Hero3Menu({clickHandler}) {
  return (
    <div className=' w-full '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <Button2 clickHandler={()=>clickHandler("recetas")} >Recetas</Button2>
        </div>
        <div className="relative  w-[160px] group">
           <Button clickHandler={()=>clickHandler("prescripcion")} >Prescripcion</Button>
        </div> 
      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
           <Button clickHandler={()=>clickHandler("laboratorio")} >Laboratorio</Button>
        </div> 
        <div className="relative  w-[160px] group">
           <Button clickHandler={()=>clickHandler("consultas")} >Consultas</Button>
        </div>    
      </div>
      <div className=' flex justify-around py-5 '>
       <div className="relative  w-[160px] group">
           <Button clickHandler={()=>clickHandler("imagenes")} >Imagenes Medicas</Button>
        </div> 
      </div>
    </div>
  )
}
