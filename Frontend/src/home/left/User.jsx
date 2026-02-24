import React from 'react'

const User = () => {
  return (
    <>
    <div className='flex flex-col'>
       <div className='flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer'>
            <div className="avatar">
                <div className="w-14 rounded-full ">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>

            <div>
                <h1 className='font-bold'>
                    Ankit Pathak
                </h1>
                <span>Ankit@gmail.com</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default User
