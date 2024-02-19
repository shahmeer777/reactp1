import React from 'react'

function CustomForm({children}) {
  return (
    <>
    <div className='bg-gray-100 rounded-lg p-10 w-1/2 mt-10'>
        {children}

         </div>
    </>
  )
}

export default CustomForm