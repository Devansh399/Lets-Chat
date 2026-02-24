import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'
const Right = () => {
  return (
    <div className='w-[70%]   text-white bg-slate-950'>
       
       <Chatuser />
       <div className='py-2 flex-dev overflow-y-auto' style={{ maxHeight: "calc(91vh - 8vh)" }}><Messages /></div>
       <Typesend />
    </div>
  )
}

export default Right
