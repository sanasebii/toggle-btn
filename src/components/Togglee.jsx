import React, { useState } from 'react'
import Tiitle from './Tiitle'
const Togglee = () => {
    const[toggle,setToggle] =useState(false)
  return (
    <div>
        <button onClick={()=>setToggle((prev)=>!prev)}>{toggle?"OFF":"ON" }</button>
        {toggle&& <Tiitle/>}
    </div>
  )
}

export default Togglee