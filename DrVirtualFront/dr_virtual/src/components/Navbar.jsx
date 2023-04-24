import { useState } from "react"
import { close, logo,logoV, menu} from '../assets'

import {navLinks} from '../constants'
import { FaBeer } from 'react-icons/fa';
import { MdMenuBook } from "react-icons/md";

import { IconContext } from "react-icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>;

const Navbar = () => {
  const [togle, setTogle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          className={`font-poppins font-normal cursos-pointer text-[16px] text-zinc-700 ${index === navLinks.length-1 ? 'mr-0' :'mr-10'}`}>
            <a href={`#${nav.id}` }>
              {nav.title}</a>
            <MdMenuBook></MdMenuBook>

          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={togle ? <FaBeer></FaBeer>
 : <MdMenuBook></MdMenuBook>} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={ () => setTogle( (prev) => !prev)}/>
        <div className={`${togle ? 'flex' :'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>
        </div>
      </div>
    </nav>
  )
}

export default Navbar