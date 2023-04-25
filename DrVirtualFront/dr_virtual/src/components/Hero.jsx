import React, {useState} from 'react'
import GetStarted from './GetStarted'
import Button from '../components/Button'

const Hero = () => {

  const [showRecetas, setShowRecetas] = useState(false)
  const [showPrescripcion, setShowPrescripcion] = useState(false)
  const [showObraSocial, setShowObraSocial] = useState(false)
  const [showFormularioOsep, setShowFormularioOsep] = useState(true)

  function buttonRecetasClick() {
    setShowPrescripcion(false)
    
    console.log(showRecetas)
    if(!showRecetas){
      setShowRecetas(true)
      setShowObraSocial(true)
    }else{
      setShowRecetas(false)
      setShowObraSocial(false)
    }
    
    
    console.log(showRecetas)
  }
  function buttonPrescripcionClick() {
    setShowPrescripcion(preShowPrescripcion => !preShowPrescripcion)
    setShowRecetas(false)
    setShowObraSocial(false)
    console.log(showPrescripcion)
  }

  return (
    
    <div className=' w-full  '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button onClick={buttonRecetasClick} className="h-12 text-xs relative transition-all duration-500 bg-blue-400 group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Recetas
          </button>
        </div>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button onClick={buttonPrescripcionClick} className="h-12 text-xs relative transition-all duration-500 bg-blue-400 group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              Prescripcion
          </button>
          </div>     
        </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Laboratorio
          </button>
        </div>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
              Consulta Medica
          </button>
        </div>     
      </div>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
          <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
            Imagenes Medicas
          </button>
        </div>
      </div>

      
      {showPrescripcion &&
          <div className=' w-full  '>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] h-12 group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Fisioterapia y Kinesioterapia
                </button>
              </div>
              <div className="relative  w-[160px] h-12 group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className=" h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                    Electrocardiograma
                    
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Espirometria
                </button>
              </div>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Ergometria
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12 text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  Interconsultas con Especialistas
                </button>
              </div>
            </div>


          </div>
            
      
      }
      {showObraSocial &&
          <div className=' w-full  '>
            <div>
              <h2 className="text-center text-m font-bold pt-1 text-rose-800 w" >
                Por favor, seleccione su obra social
              </h2>
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] h-12 group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className=" h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  PAMI
                </button>
              </div>
              <div className="relative  w-[160px] h-12 group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className=" h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                    OSECAT
                    
                </button>
              </div>     
            </div>
            <div className=' flex justify-around py-5 '>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  OSEP
                </button>
              </div>
              <div className="relative  w-[160px] group">
                <div className="absolute static transition-all duration-500 inset-0 bg-pink-100 rounded-lg blur opacity-30 rounded w-full  group-hover:duration-500 group-hover:opacity-70 group-hover:bg-pink-600 animate-pulse"></div>
                <button className="h-12  text-xs relative transition-all duration-500 bg-blue-400  group-hover:text-red-700 group-hover:duration-500 group-hover:bg-blue-500 group-hover:rounded-md w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  ">
                  OSDE
                </button>
              </div>     
            </div>
            


          </div>
            
      
      }{
        showFormularioOsep &&
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-emerald-50 rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline  decoration-wavy">
                Formulario para solicitar receta con Obra Social Osep
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Nombre y apellido:
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        DNI:
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Número de carnet:
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Fecha de nacimiento(dd/mm/aaaa):
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Fecha de nacimiento(dd/mm/aaaa):
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Fecha de nacimiento(dd/mm/aaaa):
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Fecha de nacimiento(dd/mm/aaaa):
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Fecha de nacimiento(dd/mm/aaaa):
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                        Login
                    </button>
                </div>
                
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Already have an account?{" "}
                <a
                    href="#"
                    className="font-medium text-indigo-600 hover:underline"
                >
                    Sign in
                </a>
            </p>
        </div>
    </div>
      }


    </div>)
  
}

export default Hero