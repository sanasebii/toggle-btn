import React, { useState } from 'react'
import'./accordion.css'
const faq = [
    {
        id:1,
      header: 'Section 1',
      content: 'This is the content of section 1.'
    },
    {
        id:2,
      header: 'Section 2',
      content: 'This is the content of section 2.'
    },
    {
        id:3,
      header: 'Section 3',
      content: 'This is the content of section 3.'
    }
]
const Accoraion = () => {
    const [accord,setAccord]=useState("")
    const handleshow=(faqid)=>{
setAccord(accord===faqid?"":faqid)
    }

  return (
    <div className='accordion'>
        <div className="acdnitem">
            <div className="title">
                <button onClick={()=>handleshow(data.id)}></button>
            </div>
            <div className="content"></div>
        </div>
    </div>
  )
}

export default Accoraion