import React from 'react'
import { IoSend } from "react-icons/io5";
const Typesend = () => {
    return (
        <>
            <div className='flex space-x-1 h-[7vh]  bg-gray-800 '>
                <div className='w-[93%] mx-4' >
                    <input type="text" placeholder="Type here" className="border-[1px] border-gray-700  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-2" />
                </div>

                <button>
                    <IoSend className="text-5xl  p-2 hover:bg-gray-600 rounded-full duration-300" />
                </button>

            </div>
        </>
    )
}
export default Typesend
