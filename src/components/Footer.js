import React, { useState } from 'react'

function Footer() {
    function fun(){
        alert("Please read in English only  ")
    }
    const [value,setValue]=useState('')
    const submit=()=>{
      setValue('');
    }
    const change=(e)=>{
      setValue(e);
    }
  return (
    <div>
      
    </div>
  )
}

export default Footer
