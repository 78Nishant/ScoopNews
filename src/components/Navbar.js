import React, { useState } from 'react'


function Navbar() {
  const arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  return (
    <div className='bg-gradient-to-br from-red-700 to-red-600 text-white w-screen h-32 flex '>
     	<div className='text-5xl   flex  '>
        <div className='my-7 flex font-bold hover:animate-bounce'>The </div>
        <div className='bg-white text-red-600 my-7 h-14 rounded-lg font-bold'>Scoop</div>     
      </div>
      <div className='ml-[1050px] my-7 text-2xl font-sans'> 
      <div >{arr[new Date().getDay()-1]}</div> 
       {months[new Date().getMonth()]} {new Date().getDate()}, {new Date().getFullYear()}  | {new Date().getHours()}:{new Date().getMinutes()}         </div>
    </div>
  )
}

export default Navbar
