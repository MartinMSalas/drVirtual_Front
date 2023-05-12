import React, {useState} from 'react'

import Button from '../components/Button'
import {Button2} from '../components/Button2'
import {logoV} from '../assets';
import { useScrollBy } from 'react-use-window-scroll';

import {Recetas} from '../components/Recetas'
import {Prescripcion} from '../components/Prescripcion'
const Hero3 = () => {

  const [showGenerarOrdenOsepFisio, setShowGenerarOrdenOsepFisio] = useState(false)
  const [showApiMeli, setShowApiMeli] = useState(false)
  const [showFisioSesionNumber, setFisioSesionNumber] = useState(0);
  const scrollBy = useScrollBy();

  // primer nivel
  const [recetasClick,setRecetasClick] = useState(false)
  const [prescripcionClick,setPrescripcionClick] = useState(false)


  // segundo nivel
  const [showPrescripcion, setShowPrescripcion] = useState(false)
  
  const [fisioterapiaClick,setFisioterapiaClick] = useState(false)
  const [electrocardiogramaClick,setElectrocardiogramaClick] = useState(false)
  const [espirometriaClick,setEspirometriaClick] = useState(false)
  const [ergometriaClick,setErgometriaClick] = useState(false)

  // tercer nivel



  // obra social
  const [showObraSocial,setShowObraSocial] = useState(false)


  // formulario
  const [showFormularioBasico,setShowFormularioBasico] = useState(false)
  const [showFormularioReceta,setShowFormularioReceta] = useState(false)







  // Funciones para mostrar y ocultar los componentes

  // Funciones primer nivel

  function topButtonClick(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})

    setRecetasClick(false)
    
    setPrescripcionClick(false)
    setFisioterapiaClick(false)
    setShowPrescripcion(false)

    
    setShowObraSocial(false)
    setShowFormularioBasico(false)
    setShowFormularioReceta(false)

    setShowApiMeli(false)
  }
  function buttonRecetasFirstLevelClick() {   

    setShowPrescripcion(false)
    console.log("recetasClick: ",recetasClick)
     if(!recetasClick){
      setRecetasClick(true)
    }else{
      setRecetasClick(false)
    }
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonPrescripcionFirstLevelClick() {
    setRecetasClick(false)
     
    if(!prescripcionClick){
      setPrescripcionClick(true)      
    }else{
      setPrescripcionClick(false)
    }
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }



  // Funciones segundo nivel
  function buttonObraSocialOsepClick() {
    
    if(!showFormularioBasico){
      
      setShowFormularioBasico(true)
      if(recetasClick)
        setShowFormularioReceta(true)

    }else{
      
      setShowFormularioBasico(false)
      setShowFormularioReceta(false)

    }
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonFisioterapiaSecondLevelClick() {
    setShowFormularioBasico(false)
    setShowGenerarOrdenOsepFisio(false)
    setShowApiMeli(false)


    setElectrocardiogramaClick(false)
    setEspirometriaClick(false)
    setErgometriaClick(false)

    if(!fisioterapiaClick){        
        setFisioterapiaClick(true)
        setShowObraSocial(true)
        
    }else{
      setShowObraSocial(false)
      setFisioterapiaClick(false)
      
    } 

    scrollBy({ top: 200, left: 0, behavior: "smooth" })

  }
  function buttonElectrocardiogramaSecondLevelClick(){
    setShowFormularioBasico(false)
    setShowApiMeli(false)

    setFisioterapiaClick(false)
    setEspirometriaClick(false)
    setErgometriaClick(false)
    
    if(!electrocardiogramaClick){
      setElectrocardiogramaClick(true)
      setShowObraSocial(true)
      
    }else{
      setElectrocardiogramaClick(false)
      setShowObraSocial(false)
    }

  }
  function buttonEspirometriaSecondLevelClick(){
    setShowFormularioBasico(false)
    setShowApiMeli(false)

    setFisioterapiaClick(false)
    setElectrocardiogramaClick(false)
    setErgometriaClick(false) 

    if(!espirometriaClick){
      setEspirometriaClick(true)
      setShowObraSocial(true)
      
    }else{
      setEspirometriaClick(false)
      setShowObraSocial(false)
    }

  }
  function buttonErgometriaSecondLevelClick(){
    setShowFormularioBasico(false)
    setShowApiMeli(false)

    setFisioterapiaClick(false)
    setElectrocardiogramaClick(false)
    setEspirometriaClick(false) 

    if(!ergometriaClick){
      setErgometriaClick(true)
      setShowObraSocial(true)
      
    }else{
      setErgometriaClick(false)
      setShowObraSocial(false)
    }

  }





  function buttonGenerarRecetaOsepClick() {

    setShowApiMeli(preShowApiMeli => !preShowApiMeli)
    
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }


 
  function buttonOsepFisio1SessionClick(){
    setShowGenerarOrdenOsepFisio(preShowGenerarOrdenOsepFisio => !preShowGenerarOrdenOsepFisio)
    setShowApiMeli(false)
    setFisioSesionNumber(1)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonOsepFisio5SessionClick(){
    setShowGenerarOrdenOsepFisio(preShowGenerarOrdenOsepFisio => !preShowGenerarOrdenOsepFisio)
    setShowApiMeli(false)
    setFisioSesionNumber(5)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }
  function buttonOsepFisio10SessionClick(){
    setShowGenerarOrdenOsepFisio(preShowGenerarOrdenOsepFisio => !preShowGenerarOrdenOsepFisio)
    setShowApiMeli(false)
    setFisioSesionNumber(10)
    scrollBy({ top: 200, left: 0, behavior: "smooth" })
  }

  return (
    
    <div className=' w-full '>
      <div className=' flex justify-around py-5 '>
        <div className="relative  w-[160px] group">
          <Button2 clickHandler={buttonRecetasFirstLevelClick} >Recetas</Button2>
        </div>
        <div className="relative  w-[160px] group">
           <Button clickHandler={buttonPrescripcionFirstLevelClick} >Prescripcion</Button>
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
      { recetasClick && 
        <Recetas ></Recetas>
      }
      { prescripcionClick &&
        <Prescripcion ></Prescripcion>
      }



      

    </div>)
  
}

export default Hero3