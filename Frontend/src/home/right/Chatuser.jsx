import React from 'react'

const Chatuser = () => {
    return (
        <>
            <div className=' pl-4 pt-5 pb-3 h-[10vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
                <div className='flex'>

                    <div className="avatar avatar-online">
                        <div className="w-15 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>
                </div>

                <div >
                    <h1 className='text-xl'>Ankit Pathak</h1>
                    <span>Online</span>
                </div>
            </div>
        </>
    )
}

export default Chatuser
