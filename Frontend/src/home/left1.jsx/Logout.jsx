import React from 'react'
import { TbLogout2 } from "react-icons/tb";

const Logout = () => {
    return (
        <div className='w-[3%]   text-white bg-slate-950 flex flex-col justify-end'>
            
            <button>
                <TbLogout2  className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
            </button>
        </div>
    )
}

export default Logout
