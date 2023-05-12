import React from 'react'
import Button from './Button'

export default function PrescripcionEspecialidades({clickHandler}) {
  
  return (
    <div className=' w-full  '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("fisioterapia")} >Fisioterapia y Kinesioterapia</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("electrocardiograma")} >Electrocardiograma</Button>
        </div>     
      </div>

      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">                
          <Button clickHandler={()=>clickHandler("espirometria")}>Espirometria </Button>
        </div>
        <div className="relative  w-[160px] group">
          <Button clickHandler={()=>clickHandler("ergometria")}>Ergometria</Button>
        </div>     
      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <Button clickHandler={()=>clickHandler("interconsultas")}>Interconsultas con Especialista</Button>
        </div>     
      </div>


    </div>
  )
}
