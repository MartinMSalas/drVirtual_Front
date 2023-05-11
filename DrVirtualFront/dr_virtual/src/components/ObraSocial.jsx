import  { useState } from "react";
import Button from "./Button";
import FormBasico from "./FormBasico";


const ObraSocial2 = () => {
  const [osepClic, setOsepClic] = useState(false);

  function buttonOsepClick() {
    if (!osepClic) {
      console.log("osep", osepClic);
      setOsepClic(true);
    } else {
      setOsepClic(false);
    }
  }

  return (
    <div>
      <div className=" w-full  ">
        <div>
          <h2 className="text-center text-m font-bold pt-1 text-rose-800 w">
            Por favor, seleccione su obra social
          </h2>
        </div>
        <div className=" flex justify-around py-5 ">
          <div className="relative  w-[160px] h-12 group">
            <Button clickHandler={buttonOsepClick}>OSEP</Button>
          </div>
          <div className="relative  w-[160px] h-12 group">
            <Button clickHandler={buttonOsepClick}>OSEP</Button>
          </div>
        </div>
        <div className=" flex justify-around py-5 ">
          <div className="relative  w-[160px] h-12 group">
            <Button clickHandler={buttonOsepClick}>OSEP</Button>
          </div>
          <div className="relative  w-[160px] h-12 group">
            <Button clickHandler={buttonOsepClick}>OSEP</Button>
          </div>
        </div>
      </div>
      {osepClic && (
        <div>
          <FormBasico receta={true} />
        </div>
      )}
    </div>
  );
};

export default ObraSocial2;
