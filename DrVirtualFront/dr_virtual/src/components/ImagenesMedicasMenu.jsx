import React from 'react'
import Button from './Button'

export default function ImagenesMedicasMenu({clickHandler}) {
  
  return (
    <div className=' w-full  '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("radiografias")} >Radiografias</Button>
        </div>
        <div className="relative  w-[160px] h-12 group">
          <Button clickHandler={()=>clickHandler("ecografias")} >Ecografias</Button>
        </div>     
      </div>

      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">                
          <Button clickHandler={()=>clickHandler("tomografias")}>Tomografia Axial Computada </Button>
        </div>
        <div className="relative  w-[160px] group">
          <Button clickHandler={()=>clickHandler("resonancias")}>Resonancia Nuclear Magnetica</Button>
        </div>     
      </div>



    </div>
  )
}
