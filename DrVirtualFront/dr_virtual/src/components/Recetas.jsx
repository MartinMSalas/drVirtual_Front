import React,{useState} from 'react'
import ObraSocial2 from './ObraSocial2'
import { FormBasico2 } from './FormBasico2';
import ApiMeli from './ApiMeli';
export const Recetas=()=> {

  const [obraSocialClick, setObraSocialClick] = useState(false);
  const [obraSocialSelected, setObraSocialSelected] = useState(""); //osep, swiss, etc
  const [formSubmited, setFormSubmited] = useState(false);

  const [data, setData] = useState({});
  
  function clickHandlerObraSocial(obraSocialName){
    console.log(obraSocialName)
    setObraSocialSelected(obraSocialName);
    setFormSubmited(false);

    if (!obraSocialClick) {
      console.log("osep", obraSocialClick);
      setObraSocialClick(true);
    } else {
      setObraSocialClick(false);
    }
  }
  function formHandler(data){
  
    if (!formSubmited) {
      setFormSubmited(true);
    } else {
      setFormSubmited(false);
    }
    console.log(data)

  }
  return (
    <>
      <ObraSocial2 clickHandler={clickHandlerObraSocial}></ObraSocial2>
      {obraSocialClick && (<FormBasico2 formHandler={formHandler} obraSocialSelected={obraSocialSelected} receta={true}></FormBasico2>)}
      {formSubmited && <ApiMeli></ApiMeli>}
    </>

  )
}

