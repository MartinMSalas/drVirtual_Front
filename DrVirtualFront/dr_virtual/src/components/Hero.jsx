import React, {useState} from 'react'
import GetStarted from './GetStarted'
import Button from '../components/Button'

const Hero = () => {

  const [showRecetas, setShowRecetas] = useState(false)
  const [showPrescripcion, setShowPrescripcion] = useState(false)

  function buttonRecetasClick() {
    setShowRecetas(preShowRecetas => !preShowRecetas)
    setShowPrescripcion(false)
    console.log(showRecetas)
  }
  function buttonPrescripcionClick() {
    setShowPrescripcion(preShowPrescripcion => !preShowPrescripcion)
    setShowRecetas(false)
    console.log(showPrescripcion)
  }
  return (
    
    <div className=' w-full  '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button onClick={buttonRecetasClick} className="text-xs relative transition-all duration-500 bg-blue-400 group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Recetas
          </button>
        </div>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button onClick={buttonPrescripcionClick} className="text-xs relative transition-all duration-500 bg-blue-400 group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              Prescripcion
          </button>
          </div>     
        </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Laboratorio
          </button>
        </div>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              Consulta Medica
          </button>
        </div>     
      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Imagenes Medicas
          </button>
        </div>
      </div>

      {showRecetas && 
        <div className=' flex justify-around py-5 '>
          <div className="relative  w-[160px] group">
            <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
            <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              Imagenes Medicas
            </button>
          </div>
        </div>
      };
      {showPrescripcion &&
          <div className=' w-full  '>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Fisioterapia y Kinesioterapia
                </button>
              </div>
              <div className="relative  w-[160px]  group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                    Electrocardiograma
                    aaaaaaa
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Laboratorio
                </button>
              </div>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                    Consulta Medica
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Laboratorio
                </button>
              </div>
            </div>


          </div>
            
      
      }
    </div>)
  
}

export default Hero